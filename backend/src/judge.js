import vm from "node:vm";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

function same(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function runJavascript(code, functionName, tests) {
  const results = [];
  for (const test of tests) {
    const sandbox = { exports: {}, module: { exports: {} }, console };
    const context = vm.createContext(sandbox);
    const script = new vm.Script(`${code}\n;this.__fn = ${functionName};`);
    script.runInContext(context, { timeout: 1500 });
    const fn = context.__fn;
    if (typeof fn !== "function") {
      throw new Error(`Could not find function ${functionName}. Name it exactly.`);
    }
    let value;
    let err = null;
    try {
      value = fn(...test.args);
    } catch (e) {
      err = e.message;
    }
    const passed = !err && same(value, test.expected);
    results.push({
      passed,
      expected: test.expected,
      got: err ? `Error: ${err}` : value,
    });
  }
  return results;
}

function runPython(code, functionName, tests) {
  const payload = JSON.stringify({ tests, functionName });
  const wrapper = `
import json, sys
user_code = sys.stdin.read().split("\\n---PAYLOAD---\\n", 1)
code = user_code[0]
payload = json.loads(user_code[1])
ns = {}
exec(code, ns)
fn = ns.get(payload["functionName"])
if not callable(fn):
    raise SystemExit("missing function")
out = []
for t in payload["tests"]:
    try:
        got = fn(*t["args"])
        passed = got == t["expected"]
        out.append({"passed": passed, "expected": t["expected"], "got": got})
    except Exception as e:
        out.append({"passed": False, "expected": t["expected"], "got": f"Error: {e}"})
print(json.dumps(out))
`;
  const input = `${code}\n---PAYLOAD---\n${payload}`;
  const windowsPython = process.env.LOCALAPPDATA
    ? path.join(process.env.LOCALAPPDATA, "Programs", "Python", "Python312", "python.exe")
    : null;
  const commands = ["py", "python", "python3", windowsPython].filter(Boolean);
  const attempts = commands.map((command) => spawnSync(command, ["-c", wrapper], {
    input,
    encoding: "utf8",
    timeout: 4000,
    windowsHide: true,
  }));
  const successful = attempts.find((attempt) => !attempt.error && attempt.status === 0);
  if (!successful) {
    const details = attempts
      .map((attempt) => attempt.stderr || attempt.error?.message || "")
      .find((message) => message.trim());
    throw new Error(
      `Python runtime is not installed on the server. Install Python 3 and restart the backend.${details ? ` (${details.trim().slice(0, 160)})` : ""}`
    );
  }
  try {
    return JSON.parse(successful.stdout);
  } catch {
    throw new Error("Python ran, but its output could not be read. Check that your program prints no extra text.");
  }
}

function javaLiteral(value) {
  if (value === null) return "null";
  if (typeof value === "boolean") return String(value);
  if (typeof value === "number") return Number.isInteger(value) ? `${value}` : `${value}d`;
  if (typeof value === "string") return JSON.stringify(value);
  if (Array.isArray(value)) return `new ${javaArrayType(value)}{${value.map(javaLiteral).join(", ")}}`;
  throw new Error("Unsupported Java test value.");
}

function javaArrayType(value) {
  if (!Array.isArray(value) || value.length === 0) return "Object[]";
  const first = value[0];
  if (Array.isArray(first)) return `${javaArrayType(first)}[]`;
  if (typeof first === "number") return "int[]";
  if (typeof first === "boolean") return "boolean[]";
  return "String[]";
}

function runJava(code, functionName, tests) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "pathlight-java-"));
  const calls = tests
    .map((test) => `runTest(method, new Object[]{${test.args.map(javaLiteral).join(", ")}}, ${javaLiteral(test.expected)}, out);`)
    .join("\n");
  const runner = `import java.lang.reflect.*;
import java.util.*;
class Solution{
${code}
}
public class Runner {
  static boolean same(Object a, Object b) {
    if (a == null || b == null) return a == b;
    if (a.getClass().isArray() && b.getClass().isArray()) {
      int n = Array.getLength(a);
      if (n != Array.getLength(b)) return false;
      for (int i = 0; i < n; i++) if (!same(Array.get(a, i), Array.get(b, i))) return false;
      return true;
    }
    if (a instanceof Number && b instanceof Number) return Double.compare(((Number)a).doubleValue(), ((Number)b).doubleValue()) == 0;
    return a.equals(b);
  }
  static Object adapt(Object value, Class<?> type) {
    if (!type.isArray() || value == null) return value;
    int n = Array.getLength(value);
    Class<?> component = type.getComponentType();
    Object result = Array.newInstance(component, n);
    for (int i = 0; i < n; i++) Array.set(result, i, adapt(Array.get(value, i), component));
    return result;
  }
  static void runTest(Method method, Object[] args, Object expected, List<String> out) {
    try {
      Class<?>[] types = method.getParameterTypes();
      for (int i = 0; i < args.length; i++) args[i] = adapt(args[i], types[i]);
      Object got = method.invoke(method.getDeclaringClass().getDeclaredConstructor().newInstance(), args);
      out.add("{\\"passed\\":" + same(got, expected) + ",\\"expected\\":\\"" + String.valueOf(expected) + "\\",\\"got\\":\\"" + String.valueOf(got) + "\\"}");
    } catch (Exception e) {
      Throwable cause = e instanceof InvocationTargetException ? e.getCause() : e;
      out.add("{\\"passed\\":false,\\"expected\\":\\"" + String.valueOf(expected) + "\\",\\"got\\":\\"Error: " + String.valueOf(cause.getMessage()).replace("\\"", "'") + "\\"}");
    }
  }
  public static void main(String[] args) throws Exception {
    Method method = Class.forName("Solution").getDeclaredMethod("${functionName}", ${tests[0]?.args.map(() => "Object.class").join(", ") || ""});
  }
}`;
  // Resolve the overloaded method by name and arity in the generated runner.
  const methodLookup = `Class<?> solutionClass = Class.forName("Solution");
    Method method = Arrays.stream(solutionClass.getDeclaredMethods()).filter(m -> m.getName().equals("${functionName}") && m.getParameterCount() == ${tests[0]?.args.length || 0}).findFirst().orElse(null);
    if (method == null) {
      Method[] candidates = Arrays.stream(solutionClass.getDeclaredMethods()).filter(m -> m.getParameterCount() == ${tests[0]?.args.length || 0}).toArray(Method[]::new);
      if (candidates.length == 1) method = candidates[0];
      else throw new IllegalArgumentException("Name your solution method ${functionName}, or keep only one method with the required parameters.");
    }
    method.setAccessible(true);`;
  const source = runner.replace(/Method method = Class\.forName\("Solution"\)\.getDeclaredMethod\([^;]+;/, `${methodLookup}\n    List<String> out = new ArrayList<>();\n    ${calls}\n    System.out.println("[" + String.join(",", out) + "]");`);
  fs.writeFileSync(path.join(tempDir, "Runner.java"), source);
  const compiled = spawnSync("javac", ["Runner.java"], { cwd: tempDir, encoding: "utf8", timeout: 6000 });
  if (compiled.error || compiled.status !== 0) {
    fs.rmSync(tempDir, { recursive: true, force: true });
    const compilerMessage = (compiled.stderr || "Java compiler is not available on this machine.")
      .replace(/Runner\.java:\d+: error:\s*/g, "")
      .replace(/\r?\n\s*\^/g, "")
      .split("\n")
      .find((line) => line.trim())
      ?.trim();
    throw new Error(`Java compile error: ${compilerMessage || "Check your class and method syntax."}`);
  }
  const executed = spawnSync("java", ["Runner"], { cwd: tempDir, encoding: "utf8", timeout: 4000 });
  fs.rmSync(tempDir, { recursive: true, force: true });
  if (executed.error || executed.status !== 0) {
    throw new Error(`Java runtime error: ${(executed.stderr || "Your program could not run.").trim().slice(0, 300)}`);
  }
  return JSON.parse(executed.stdout);
}

function cppLiteral(value) {
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "number") return String(value);
  if (typeof value === "string") return JSON.stringify(value);
  if (Array.isArray(value)) return `vector<${cppType(value)}>{${value.map(cppLiteral).join(", ")}}`;
  throw new Error("Unsupported C++ test value.");
}

function cppType(value) {
  if (!Array.isArray(value) || value.length === 0) return "int";
  if (Array.isArray(value[0])) return `vector<${cppType(value[0])}>`;
  if (typeof value[0] === "number") return "int";
  if (typeof value[0] === "boolean") return "bool";
  return "string";
}

function runCpp(code, functionName, tests) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "pathlight-cpp-"));
  const testCalls = tests.map((test, index) => {
    const args = test.args.map((arg, argIndex) => `auto arg${index}_${argIndex} = ${cppLiteral(arg)};`).join(" ");
    const names = test.args.map((_arg, argIndex) => `arg${index}_${argIndex}`).join(", ");
    return `${args} auto got${index} = ${functionName}(${names}); results.push_back({repr(got${index}), repr(${cppLiteral(test.expected)}), same(got${index}, ${cppLiteral(test.expected)})});`;
  }).join("\n    ");
  const source = `#include <algorithm>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>
using namespace std;

${code}

template <typename T> string repr(const T& value) { return to_string(value); }
inline string repr(const string& value) { return value; }
inline string repr(const char* value) { return string(value); }
template <typename T> string repr(const vector<T>& values) { string out = "["; for (size_t i = 0; i < values.size(); i++) { if (i) out += ", "; out += repr(values[i]); } return out + "]"; }
template <typename T> bool same(const T& a, const T& b) { return a == b; }

struct Result { string got; string expected; bool passed; };
int main() {
  vector<Result> results;
  ${testCalls}
  cout << "[";
  for (size_t i = 0; i < results.size(); i++) {
    if (i) cout << ",";
    cout << "{\\"passed\\":" << (results[i].passed ? "true" : "false") << ",\\"expected\\":\\"" << results[i].expected << "\\",\\"got\\":\\"" << results[i].got << "\\"}";
  }
  cout << "]";
}
`;
  fs.writeFileSync(path.join(tempDir, "Runner.cpp"), source);
  const compilerCandidates = [
    "g++",
    "clang++",
    process.env.LOCALAPPDATA
      ? path.join(process.env.LOCALAPPDATA, "Temp", "WinGet", "BrechtSanders.WinLibs.MCF.UCRT.16.1.0-14.0.0-r1", "extracted", "mingw64", "bin", "g++.exe")
      : null,
    process.env.LOCALAPPDATA
      ? path.join(process.env.LOCALAPPDATA, "Microsoft", "WinGet", "Packages", "BrechtSanders.WinLibs.MCF.UCRT_Microsoft.Winget.Source_8wekyb3d8bbwe", "mingw64", "bin", "g++.exe")
      : null,
    process.env.ProgramFiles ? path.join(process.env.ProgramFiles, "LLVM", "bin", "clang++.exe") : null,
  ].filter(Boolean);
  let compiled;
  const compilerErrors = [];
  for (const compiler of compilerCandidates) {
    const compilerRoot = compiler.includes("BrechtSanders.WinLibs")
      ? path.join(path.dirname(compiler), "..")
      : null;
    const compileArgs = ["-std=c++17"];
    if (compilerRoot) {
      compileArgs.push(
        "-I", path.join(compilerRoot, "include"),
        "-I", path.join(compilerRoot, "x86_64-w64-mingw32", "include")
      );
    }
    compileArgs.push("Runner.cpp", "-o", "Runner.exe");
    compiled = spawnSync(compiler, compileArgs, {
      cwd: tempDir,
      encoding: "utf8",
      timeout: 8000,
      windowsHide: true,
    });
    if (!compiled.error && compiled.status === 0) break;
    if (compiled.stderr) compilerErrors.push(compiled.stderr);
  }
  if (!compiled || compiled.error || compiled.status !== 0) {
    fs.rmSync(tempDir, { recursive: true, force: true });
    const detail = compilerErrors
      .flatMap((error) => error.split("\n"))
      .find((line) => line.includes("error:") || line.includes("fatal error:"))
      || compilerErrors.flatMap((error) => error.split("\n")).find((line) => line.trim())
      ?.trim();
    throw new Error(`C++ compile error: ${detail || "A C++ compiler is not installed on the server."}`);
  }
  const executed = spawnSync(path.join(tempDir, "Runner.exe"), [], { cwd: tempDir, encoding: "utf8", timeout: 4000, windowsHide: true });
  fs.rmSync(tempDir, { recursive: true, force: true });
  if (executed.error || executed.status !== 0) throw new Error(`C++ runtime error: ${(executed.stderr || "Your program could not run.").trim().slice(0, 300)}`);
  return JSON.parse(executed.stdout);
}

export function judge(language, code, functionName, tests) {
  const lang = (language || "javascript").toLowerCase();
  if (lang === "javascript" || lang === "js") {
    return runJavascript(code, functionName, tests);
  }
  if (lang === "python") {
    return runPython(code, functionName, tests);
  }
  if (lang === "java") {
    return runJava(code, functionName, tests);
  }
  if (lang === "cpp" || lang === "c++") {
    return runCpp(code, functionName, tests);
  }
  return tests.map((t) => ({
    passed: false,
    expected: t.expected,
    got: `The ${language || "selected"} compiler is not configured on the backend. Install the language toolchain on the server and try again.`,
  }));
}
