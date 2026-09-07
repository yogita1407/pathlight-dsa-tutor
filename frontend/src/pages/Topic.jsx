import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api.js";

export default function Topic({ user }) {
  const { slug } = useParams();
  const [topic, setTopic] = useState(null);
  const exampleLanguage = user?.profile?.languages?.[0] || "";
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setErr("");
    api(`/api/topics/${slug}`)
      .then(setTopic)
      .catch((e) => setErr(e.message));
  }, [slug]);

  async function complete() {
    setMsg("");
    try {
      await api(`/api/topics/${slug}/complete`, { method: "POST" });
      setMsg("Station complete. The next node on your path is unlocked.");
    } catch (e) {
      setMsg(e.message);
    }
  }

  if (err) return <div className="error">{err}</div>;
  if (!topic) return <p>Opening notes…</p>;
  const hasTinyExample = topic.notes.some((note) => note.heading === "A tiny example");
  const topicExample = exampleLanguage ? getTopicExample(topic.slug, exampleLanguage) : "";

  return (
    <div className="topic-grid">
      <article className="card notes">
        <div className="eyebrow">{topic.difficulty} · {topic.estimated_hours} hours</div>
        <h1 className="display" style={{ fontSize: "2.4rem" }}>
          {topic.title}
        </h1>
        <p className="muted lead">{topic.summary}</p>

        <div className="topic-intro">
          <div className="mini-stat">
            <span className="mini-label">What you will learn</span>
            <strong>Core ideas, patterns, and common traps</strong>
          </div>
          <div className="mini-stat">
            <span className="mini-label">Confidence goal</span>
            <strong>Understand the idea before memorizing the code</strong>
          </div>
        </div>

        {topic.notes.map((n, noteIndex) => (
          <section key={n.heading} className="note-section">
            <h2>{n.heading}</h2>
            {(n.paragraphs || []).map((p) => (
              <p key={p}>{p}</p>
            ))}
            {n.keyTakeaways && (
              <div className="note-takeaways">
                {n.keyTakeaways.map((takeaway) => (
                  <span key={takeaway} className="takeaway-pill">{takeaway}</span>
                ))}
              </div>
            )}
            {n.bullets && (
              <ul className="note-list">
                {n.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {n.code && n.heading !== "A tiny example" && <pre>{n.code}</pre>}
            {(n.heading === "A tiny example" || (!hasTinyExample && noteIndex === 0)) && topicExample && (
              <pre>{topicExample}</pre>
            )}
            {n.referenceLinks && n.referenceLinks.length > 0 && (
              <div className="reference-links">
                <span>Official references</span>
                {n.referenceLinks.map((ref) => (
                  <a key={ref.url} href={ref.url} target="_blank" rel="noreferrer noopener">
                    {ref.label}
                  </a>
                ))}
              </div>
            )}
          </section>
        ))}

      </article>
      <aside>
        <div className="card reference-aside" style={{ padding: 16, marginBottom: 16 }}>
          <div className="kicker">Keep learning</div>
          <h3>Lecture notes and references</h3>
          <p className="muted">Read the notes here, then explore trusted explanations and practice material.</p>
          <ul>
            {(topic.references || []).map((ref) => (
              <li key={ref.url}>
                <a href={ref.url} target="_blank" rel="noreferrer noopener">{ref.label}</a>
              </li>
            ))}
          </ul>
          <div className="topic-video-reference">
            <span>Video link</span>
            <a href={getTopicVideoUrl(topic)}>
              Watch the video
            </a>
          </div>
        </div>
        <div className="card" style={{ padding: 16 }}>
          <h3>Drills</h3>
          {topic.problems.map((p) => (
            <Link key={p.id} to={`/app/practice/${p.slug}`} className="choice" style={{ display: "block", marginBottom: 8 }}>
              <b>{p.title}</b>
              <div className="muted">{p.difficulty}</div>
            </Link>
          ))}
          <button className="btn" style={{ width: "100%", marginTop: 8 }} onClick={complete}>
            Mark station complete
          </button>
          {msg && <p className="muted">{msg}</p>}
        </div>
      </aside>
    </div>
  );
}

function getTopicVideoUrl(topic) {
  if (topic.videoUrl) return topic.videoUrl;
  if (topic.video_id) return `https://www.youtube.com/watch?v=${topic.video_id}`;
  const query = `${topic.title} data structures algorithm tutorial`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function getTopicExample(slug, language) {
  const normalized = String(language).toLowerCase();
  const examples = {
    "programming-basics": {
      javascript: `function summarizeScore(score) {
  if (score >= 60) {
    return "pass";
  }
  return "keep practicing";
}`,
      python: `def summarize_score(score):
    if score >= 60:
        return "pass"
    return "keep practicing"`,
      java: `static String summarizeScore(int score) {
    if (score >= 60) {
        return "pass";
    }
    return "keep practicing";
}`,
      "c++": `string summarizeScore(int score) {
    if (score >= 60) {
        return "pass";
    }
    return "keep practicing";
}`,
    },
    arrays: {
      python: `def max_value(nums):
    best = nums[0]
    for value in nums[1:]:
        if value > best:
            best = value
    return best`,
      java: `static int maxValue(int[] nums) {
    int best = nums[0];
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] > best) best = nums[i];
    }
    return best;
}`,
      "c++": `int maxValue(const vector<int>& nums) {
    int best = nums[0];
    for (int i = 1; i < nums.size(); i++) {
        if (nums[i] > best) best = nums[i];
    }
    return best;
}`,
    },
    "binary-search": {
      javascript: `function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}`,
      python: `def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        middle = (left + right) // 2
        if nums[middle] == target:
            return middle
        if nums[middle] < target:
            left = middle + 1
        else:
            right = middle - 1
    return -1`,
      java: `static int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int middle = left + (right - left) / 2;
        if (nums[middle] == target) return middle;
        if (nums[middle] < target) left = middle + 1;
        else right = middle - 1;
    }
    return -1;
}`,
      "c++": `int search(const vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int middle = left + (right - left) / 2;
        if (nums[middle] == target) return middle;
        if (nums[middle] < target) left = middle + 1;
        else right = middle - 1;
    }
    return -1;
}`,
    },
  };
  const key = normalized === "c++" || normalized === "cpp" ? "c++" : normalized;
  const topicExamples = examples[slug];
  if (topicExamples?.[key]) return topicExamples[key];
  return fallbackExample(slug, key);
}

function fallbackExample(slug, language) {
  return "";
}
