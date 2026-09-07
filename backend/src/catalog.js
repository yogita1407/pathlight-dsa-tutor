// ============================================================
// Pathlight DSA Catalog
// Organized master curriculum + detailed topic content +
// career roadmaps + study pace + adaptive roadmap generation.
// ============================================================

// Keep the note-section shape used by the existing topic content.
function section(title, paragraphs = [], extras = {}) {
  return {
    title,
    paragraphs,
    ...extras,
  };
}

// ============================================================
// LEVEL 0: PROGRAMMING FOUNDATIONS
// ============================================================

const LEVEL_0_FOUNDATIONS = [
  "programming-basics",
  "input-output",
  "variables-data-types",
  "operators",
  "conditionals",
  "loops",
  "functions",
  "recursion-basics",
  "debugging",
  "testing",
  "time-complexity",
  "space-complexity",
  "asymptotic-analysis",
];

// ============================================================
// LEVEL 1: CORE DATA STRUCTURES
// ============================================================

const LEVEL_1_DATA_STRUCTURES = [
  "arrays",
  "2d-arrays-matrices",
  "strings",
  "hashing",
  "hashmaps",
  "hashsets",
  "frequency-arrays",
  "linked-lists",
  "doubly-linked-lists",
  "circular-linked-lists",
  "stacks",
  "queues",
  "deques",
  "circular-queues",
];

// ============================================================
// LEVEL 2: CORE TECHNIQUES & PATTERNS
// ============================================================

const LEVEL_2_TECHNIQUES = [
  "linear-search",
  "sorting-basics",
  "bubble-sort",
  "selection-sort",
  "insertion-sort",
  "merge-sort",
  "quick-sort",
  "heap-sort",
  "counting-sort",
  "radix-sort",
  "bucket-sort",
  "binary-search",
  "binary-search-variants",
  "lower-upper-bound",
  "search-in-rotated-array",
  "two-pointers",
  "sliding-window",
  "prefix-sums",
  "difference-arrays",
  "kadane-algorithm",
  "intervals",
  "merge-intervals",
  "sweep-line",
  "monotonic-stack",
  "monotonic-queue",
  "bit-manipulation",
  "bitmasking",
];

// ============================================================
// LEVEL 3: RECURSION & BACKTRACKING
// ============================================================

const LEVEL_3_RECURSION_BACKTRACKING = [
  "recursion",
  "recursion-tree",
  "divide-and-conquer",
  "backtracking",
  "subsets",
  "permutations",
  "combinations",
  "n-queens",
  "sudoku-solver",
  "word-search",
];

// ============================================================
// LEVEL 4: TREES & HEAPS
// ============================================================

const LEVEL_4_TREES_HEAPS = [
  "binary-trees",
  "tree-traversals",
  "binary-search-trees",
  "balanced-trees",
  "avl-trees",
  "red-black-trees",
  "tree-height-depth-diameter",
  "lowest-common-ancestor",
  "tree-path-problems",
  "tree-serialization",
  "heaps-priority-queues",
  "min-heap",
  "max-heap",
  "top-k-problems",
  "median-from-data-stream",
  "merge-k-sorted-lists",
];

// ============================================================
// LEVEL 5: GRAPHS
// ============================================================

const LEVEL_5_GRAPHS = [
  "graph-representation",
  "adjacency-list",
  "adjacency-matrix",
  "depth-first-search",
  "breadth-first-search",
  "graph-cycle-detection",
  "connected-components",
  "bipartite-graphs",
  "topological-sort",
  "course-schedule-pattern",
  "shortest-path-unweighted",
  "dijkstra-algorithm",
  "bellman-ford",
  "floyd-warshall",
  "minimum-spanning-tree",
  "kruskal-algorithm",
  "prim-algorithm",
  "union-find",
  "strongly-connected-components",
  "bridges-and-articulation-points",
  "network-flow-basics",
];

// ============================================================
// LEVEL 6: GREEDY & DYNAMIC PROGRAMMING
// ============================================================

const LEVEL_6_GREEDY_DP = [
  "greedy-algorithms",
  "interval-scheduling",
  "activity-selection",
  "jump-game-pattern",
  "fractional-knapsack",
  "dynamic-programming",
  "memoization",
  "tabulation",
  "1d-dynamic-programming",
  "2d-dynamic-programming",
  "knapsack",
  "unbounded-knapsack",
  "subset-sum",
  "coin-change",
  "longest-common-subsequence",
  "longest-increasing-subsequence",
  "edit-distance",
  "matrix-chain-multiplication",
  "interval-dynamic-programming",
  "tree-dynamic-programming",
  "bitmask-dynamic-programming",
  "digit-dynamic-programming",
];

// ============================================================
// LEVEL 7: STRING ALGORITHMS
// ============================================================

const LEVEL_7_STRING_ALGORITHMS = [
  "tries",
  "string-hashing",
  "rabin-karp",
  "kmp-algorithm",
  "z-algorithm",
  "manacher-algorithm",
  "suffix-array",
  "suffix-tree",
];

// ============================================================
// LEVEL 8: RANGE QUERIES & ADVANCED STRUCTURES
// ============================================================

const LEVEL_8_ADVANCED_STRUCTURES = [
  "fenwick-tree",
  "segment-tree",
  "lazy-propagation",
  "sparse-table",
  "sqrt-decomposition",
  "range-minimum-query",
  "ordered-sets",
  "disjoint-set-union",
];

// ============================================================
// LEVEL 9: MATHEMATICS & SPECIALIST TOPICS
// ============================================================

const LEVEL_9_MATH_SPECIALIST = [
  "math-basics",
  "gcd-lcm",
  "prime-numbers",
  "sieve-of-eratosthenes",
  "modular-arithmetic",
  "fast-exponentiation",
  "modular-inverse",
  "combinatorics",
  "permutations-combinations",
  "probability-basics",
  "computational-geometry",
  "randomized-algorithms",
  "game-theory-basics",
];

// ============================================================
// COMPLETE MASTER TOPIC REGISTRY
// ============================================================

export const DSA_MASTER_TOPICS = [
  ...LEVEL_0_FOUNDATIONS,
  ...LEVEL_1_DATA_STRUCTURES,
  ...LEVEL_2_TECHNIQUES,
  ...LEVEL_3_RECURSION_BACKTRACKING,
  ...LEVEL_4_TREES_HEAPS,
  ...LEVEL_5_GRAPHS,
  ...LEVEL_6_GREEDY_DP,
  ...LEVEL_7_STRING_ALGORITHMS,
  ...LEVEL_8_ADVANCED_STRUCTURES,
  ...LEVEL_9_MATH_SPECIALIST,
];

export const TOPIC_LEVELS = {
  foundations: LEVEL_0_FOUNDATIONS,
  dataStructures: LEVEL_1_DATA_STRUCTURES,
  techniques: LEVEL_2_TECHNIQUES,
  recursionBacktracking: LEVEL_3_RECURSION_BACKTRACKING,
  treesHeaps: LEVEL_4_TREES_HEAPS,
  graphs: LEVEL_5_GRAPHS,
  greedyDynamicProgramming: LEVEL_6_GREEDY_DP,
  stringAlgorithms: LEVEL_7_STRING_ALGORITHMS,
  advancedStructures: LEVEL_8_ADVANCED_STRUCTURES,
  mathematicsSpecialist: LEVEL_9_MATH_SPECIALIST,
};

// ============================================================
// DETAILED TOPIC CONTENT
// Preserved from the uploaded catalog topic-content file.
// ============================================================

export const TOPICS = [
  {
    slug: "programming-basics",
    title: "Programming Basics",
    summary: "Variables, loops, functions, and basic logic needed before DSA.",
    estimatedHours: 8,
    difficulty: "Beginner",
    videoId: "z9bZufPHFLc",
    videoTitle: "Programming basics for beginners",
    references: [
      {
        label: "MDN: JavaScript Guide",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      },
      {
        label: "Python: Getting Started",
        url: "https://docs.python.org/3/tutorial/index.html",
      },
    ],
    notes: [
      section(
        "What you must know",
        [
          "Variables, data types, operators, conditionals, and loops form the foundation for every algorithm.",
          "Functions allow you to break problems into smaller steps.",
        ],
        {
          keyTakeaways: [
            "Use variables to store state",
            "Use loops to repeat work",
            "Use functions to organize logic",
          ],
        }
      ),
      section(
        "Common mistakes",
        [],
        {
          bullets: [
            "Off-by-one errors in loops",
            "Forgetting to return values",
            "Using the wrong data type",
          ],
          keyTakeaways: [
            "Test small inputs first",
            "Write simple functions",
          ],
        }
      ),
    ],
  },

  {
    slug: "time-complexity",
    title: "Time Complexity",
    summary: "Measure how running time grows as input size grows.",
    estimatedHours: 5,
    difficulty: "Beginner",
    videoId: "Mo4vesaut8g",
    videoTitle: "Big-O notation overview",
    references: [
      {
        label: "Wikipedia: Big-O notation",
        url: "https://en.wikipedia.org/wiki/Big_O_notation",
      },
    ],
    notes: [
      section(
        "Why it matters",
        [
          "Time complexity describes how an algorithm scales. A single loop is often O(n), while nested loops can be O(n²).",
          "Interviewers expect you to state time complexity for every solution.",
        ],
        {
          keyTakeaways: [
            "O(1): constant time",
            "O(log n): repeatedly halve a space",
            "O(n): scan once",
            "O(n log n): comparison sorting",
            "O(n²): nested loops",
          ],
        }
      ),
      section(
        "How to analyze",
        [],
        {
          bullets: [
            "Count loop iterations",
            "Ignore constant factors",
            "Focus on the dominant term",
          ],
          keyTakeaways: [
            "Compare algorithms by growth rate",
            "Large inputs need efficient solutions",
          ],
        }
      ),
    ],
  },

  {
    slug: "space-complexity",
    title: "Space Complexity",
    summary: "Measure how extra memory grows as input size grows.",
    estimatedHours: 3,
    difficulty: "Beginner",
    videoId: "Mo4vesaut8g",
    videoTitle: "Big-O notation overview",
    references: [
      {
        label: "Wikipedia: Space complexity",
        url: "https://en.wikipedia.org/wiki/Space_complexity",
      },
    ],
    notes: [
      section(
        "Extra memory",
        [
          "Space complexity counts only extra memory beyond the input. A single variable is O(1), while a copy of the input is O(n).",
          "Recursion uses stack space proportional to call depth.",
        ],
        {
          keyTakeaways: [
            "O(1): fixed extra memory",
            "O(n): extra array or recursion depth",
            "State both time and space",
          ],
        }
      ),
    ],
  },

  {
    slug: "arrays",
    title: "Arrays",
    summary: "Store values in order. Index, scan, and update efficiently.",
    estimatedHours: 6,
    difficulty: "Beginner",
    videoId: "8wmd7RKvPX8",
    videoTitle: "Arrays beginner walkthrough",
    references: [
      {
        label: "MDN: Array",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
      },
      {
        label: "LeetCode: Array problems",
        url: "https://leetcode.com/tag/array/",
      },
    ],
    notes: [
      section(
        "What is an array?",
        [
          "An array stores values in a numbered sequence. Accessing an item by index is usually O(1).",
          "Arrays are the base for many DSA patterns: two pointers, sliding windows, prefix sums, sorting, and binary search.",
        ],
        {
          keyTakeaways: [
            "Use indexes carefully",
            "Scanning is usually O(n)",
            "Watch for off-by-one errors",
          ],
        }
      ),
      section(
        "Common patterns",
        [],
        {
          bullets: [
            "Single pass with a running answer",
            "Frequency counting with a map",
            "Prefix totals",
            "Two pointers",
            "Sorting before searching",
          ],
          keyTakeaways: [
            "Arrays appear in nearly every interview",
            "Start with a brute-force solution, then optimize",
          ],
        }
      ),
    ],
  },

  {
    slug: "2d-arrays-matrices",
    title: "2D Arrays & Matrices",
    summary: "Rows and columns of values. Traverse, rotate, and search grids.",
    estimatedHours: 6,
    difficulty: "Beginner",
    videoId: "ge_P7jXZkY0",
    videoTitle: "Matrix traversal patterns",
    references: [
      {
        label: "LeetCode: Matrix problems",
        url: "https://leetcode.com/tag/matrix/",
      },
    ],
    notes: [
      section(
        "Grid thinking",
        [
          "A 2D array is an array of arrays. Access uses row and column indexes.",
          "Many problems involve traversing rows, columns, diagonals, or connected components.",
        ],
        {
          keyTakeaways: [
            "Use nested loops for traversal",
            "Check boundaries carefully",
            "Use visited arrays for grid search",
          ],
        }
      ),
      section(
        "Common tasks",
        [],
        {
          bullets: [
            "Row and column sums",
            "Rotate or transpose",
            "Search in sorted matrix",
            "Island counting",
          ],
          keyTakeaways: [
            "Visualize the grid",
            "Use DFS or BFS for connected cells",
          ],
        }
      ),
    ],
  },

  {
    slug: "strings",
    title: "Strings",
    summary: "Text as ordered characters: scan, count, compare, and match patterns.",
    estimatedHours: 6,
    difficulty: "Beginner",
    videoId: "D6xkbGLQesk",
    videoTitle: "Strings, scans, and palindromes",
    references: [
      {
        label: "MDN: String",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
      },
      {
        label: "LeetCode: String problems",
        url: "https://leetcode.com/tag/string/",
      },
    ],
    notes: [
      section(
        "Strings are sequences",
        [
          "A string is an ordered sequence of characters. Most string problems use array-style traversal, two pointers, hashing, or sliding windows.",
          "Treat each character as data that can be indexed, compared, counted, and processed.",
        ],
        {
          keyTakeaways: [
            "Use indexes to traverse characters",
            "Maps are useful for frequency counts",
            "Many string problems are pattern problems",
          ],
        }
      ),
      section(
        "Common uses",
        [],
        {
          bullets: [
            "Palindrome checks",
            "Anagram grouping",
            "Substring search",
            "Character frequencies",
            "Parsing structured input",
          ],
          keyTakeaways: [
            "Consider string immutability",
            "Avoid repeated concatenation inside large loops",
          ],
        }
      ),
    ],
  },

  {
    slug: "hashing",
    title: "Hashing",
    summary: "Maps and sets remember what you have seen for fast lookup.",
    estimatedHours: 7,
    difficulty: "Beginner",
    videoId: "shs0KM3wKv8",
    videoTitle: "Hash tables explained",
    references: [
      {
        label: "Wikipedia: Hash table",
        url: "https://en.wikipedia.org/wiki/Hash_table",
      },
      {
        label: "LeetCode: Hash Table",
        url: "https://leetcode.com/tag/hash-table/",
      },
    ],
    notes: [
      section(
        "Why hashing matters",
        [
          "A hash map stores key-value pairs, while a hash set stores unique values. Lookup, insertion, and deletion are usually O(1) on average.",
          "Hashing often replaces a nested loop with a single pass through the input.",
        ],
        {
          keyTakeaways: [
            "Use a set for membership checks",
            "Use a map for values, indexes, or counts",
            "Hashing is a major interview pattern",
          ],
        }
      ),
      section(
        "Recognize the pattern",
        [],
        {
          bullets: [
            "Have I seen this value before?",
            "What complement do I need?",
            "How many times has this appeared?",
            "Where was this item last seen?",
          ],
          keyTakeaways: [
            "Store only useful state",
            "Use average O(1) lookup reasoning",
          ],
        }
      ),
    ],
  },

  {
    slug: "linked-lists",
    title: "Linked Lists",
    summary: "Nodes connected by pointers: traversal, reversal, merging, and cycle detection.",
    estimatedHours: 7,
    difficulty: "Intermediate",
    videoId: "Hj_r3dDidNc",
    videoTitle: "Linked lists",
    references: [
      {
        label: "Wikipedia: Linked list",
        url: "https://en.wikipedia.org/wiki/Linked_list",
      },
    ],
    notes: [
      section(
        "Node and next",
        [
          "A linked list stores data in nodes connected by pointers. Unlike arrays, indexing is not constant time because you must walk node by node.",
          "Pointer updates must be done carefully to avoid losing part of the list.",
        ],
        {
          keyTakeaways: [
            "Traversal is O(n)",
            "No random access",
            "Draw nodes before changing pointers",
          ],
        }
      ),
      section(
        "Classic moves",
        [],
        {
          bullets: [
            "Reverse a list with prev, current, and next",
            "Find a middle node with slow and fast pointers",
            "Detect cycles with Floyd's algorithm",
            "Use a dummy node for easier edge cases",
          ],
          keyTakeaways: [
            "Pointer order matters",
            "Dummy nodes simplify head changes",
          ],
        }
      ),
    ],
  },

  {
    slug: "stacks",
    title: "Stacks",
    summary: "Last-in-first-out structure for validation, undo, and nested processing.",
    estimatedHours: 5,
    difficulty: "Intermediate",
    videoId: "wjI1WNl7wJ4",
    videoTitle: "Stacks and queues",
    references: [
      {
        label: "Wikipedia: Stack",
        url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)",
      },
    ],
    notes: [
      section(
        "LIFO behavior",
        [
          "A stack allows adding and removing only from the top. It is useful for matching, undo, recursion simulation, and nested structures.",
        ],
        {
          keyTakeaways: [
            "Push and pop at the top",
            "Use for nested patterns",
            "Call stack is a stack",
          ],
        }
      ),
      section(
        "Common uses",
        [],
        {
          bullets: [
            "Matching brackets",
            "Undo operations",
            "Monotonic stack problems",
            "Expression evaluation",
          ],
          keyTakeaways: [
            "Think in terms of order",
            "Use when the newest item matters most",
          ],
        }
      ),
    ],
  },

  {
    slug: "queues",
    title: "Queues",
    summary: "First-in-first-out structure for arrival-order processing and BFS.",
    estimatedHours: 5,
    difficulty: "Intermediate",
    videoId: "wjI1WNl7wJ4",
    videoTitle: "Stacks and queues",
    references: [
      {
        label: "Wikipedia: Queue",
        url: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)",
      },
    ],
    notes: [
      section(
        "FIFO behavior",
        [
          "A queue adds at the back and removes from the front. It models waiting lines and level-by-level traversal.",
        ],
        {
          keyTakeaways: [
            "Enqueue at back, dequeue from front",
            "Use for BFS and scheduling",
          ],
        }
      ),
      section(
        "Variants",
        [],
        {
          bullets: [
            "Circular queue",
            "Priority queue (heap)",
            "Deque (double-ended queue)",
          ],
          keyTakeaways: [
            "Choose the queue that matches the required order",
          ],
        }
      ),
    ],
  },

  {
    slug: "sorting-basics",
    title: "Sorting Basics",
    summary: "Order values to simplify searching, grouping, greedy choices, and pointer scans.",
    estimatedHours: 6,
    difficulty: "Beginner",
    videoId: "kgBjXPnmqzs",
    videoTitle: "Sorting algorithms overview",
    references: [
      {
        label: "Wikipedia: Sorting algorithm",
        url: "https://en.wikipedia.org/wiki/Sorting_algorithm",
      },
    ],
    notes: [
      section(
        "Why sort?",
        [
          "Sorting often makes a difficult problem easier. Binary search requires sorted data, and many two-pointer or greedy solutions start by ordering the input.",
          "Comparison sorting generally costs O(n log n), so decide whether that cost is worthwhile.",
        ],
        {
          keyTakeaways: [
            "Sorting unlocks other algorithms",
            "Know whether input mutation is allowed",
            "Use numeric comparators in JavaScript",
          ],
        }
      ),
      section(
        "Interview focus",
        [],
        {
          bullets: [
            "Use a built-in sort when allowed",
            "Know O(n log n) complexity",
            "Sort intervals by start or end when needed",
            "Sort before two-pointer scans",
          ],
          keyTakeaways: [
            "Sorting is a strategy, not always the answer",
            "Explain the complexity tradeoff",
          ],
        }
      ),
    ],
  },

  {
    slug: "binary-search",
    title: "Binary Search",
    summary: "Repeatedly halve a sorted or monotonic search space.",
    estimatedHours: 7,
    difficulty: "Intermediate",
    videoId: "6z4ZzI6X9xk",
    videoTitle: "Binary search pattern",
    references: [
      {
        label: "Wikipedia: Binary search",
        url: "https://en.wikipedia.org/wiki/Binary_search_algorithm",
      },
    ],
    notes: [
      section(
        "Halve the space",
        [
          "Binary search compares a middle value and discards one impossible half. It runs in O(log n) time.",
          "It requires sorted values or a monotonic yes-or-no condition.",
        ],
        {
          keyTakeaways: [
            "Use left, right, and middle",
            "Update one boundary every iteration",
            "Avoid infinite loops with clear conditions",
          ],
        }
      ),
      section(
        "Search on the answer",
        [
          "Binary search can find a value, the first valid position, the last valid position, or the minimum capacity that satisfies a condition.",
        ],
        {
          keyTakeaways: [
            "Define a monotonic condition",
            "Use binary search beyond arrays",
          ],
        }
      ),
    ],
  },

  {
    slug: "two-pointers",
    title: "Two Pointers",
    summary: "Use two indexes to scan, shrink, compare, or modify a sequence.",
    estimatedHours: 6,
    difficulty: "Beginner",
    videoId: "cYxP1nU2jKY",
    videoTitle: "Two pointers pattern",
    references: [
      {
        label: "GeeksforGeeks: Two pointers",
        url: "https://www.geeksforgeeks.org/two-pointers-technique/",
      },
    ],
    notes: [
      section(
        "Two ways to move",
        [
          "Opposite-direction pointers work well on sorted data or palindrome-style comparisons. Same-direction pointers are useful for in-place updates and linked-list cycle patterns.",
          "The method works because every pointer move removes impossible candidates.",
        ],
        {
          keyTakeaways: [
            "Use opposite ends for pair and palindrome problems",
            "Use slow and fast pointers for in-place work",
            "Many solutions become O(n)",
          ],
        }
      ),
      section(
        "When to use it",
        [],
        {
          bullets: [
            "Sorted two-sum",
            "Remove duplicates",
            "Reverse a sequence",
            "Palindrome checking",
            "Three-sum after sorting",
          ],
          keyTakeaways: [
            "Understand why moving a pointer is safe",
            "Check duplicate handling carefully",
          ],
        }
      ),
    ],
  },

  {
    slug: "sliding-window",
    title: "Sliding Window",
    summary: "Maintain a moving contiguous range instead of recalculating every range.",
    estimatedHours: 7,
    difficulty: "Beginner",
    videoId: "MK-NZ4hN7rs",
    videoTitle: "Sliding window pattern",
    references: [
      {
        label: "GeeksforGeeks: Sliding window",
        url: "https://www.geeksforgeeks.org/window-sliding-technique/",
      },
    ],
    notes: [
      section(
        "The moving range",
        [
          "A sliding window tracks a contiguous range using left and right boundaries. Expand the right side and shrink the left side only when the current range becomes invalid.",
          "Each pointer moves forward at most n times, so many solutions are O(n).",
        ],
        {
          keyTakeaways: [
            "Works with subarrays and substrings",
            "Avoids recomputing each range",
            "Usually needs left and right pointers",
          ],
        }
      ),
      section(
        "Typical problems",
        [],
        {
          bullets: [
            "Maximum sum of a fixed-size subarray",
            "Longest substring without repeats",
            "Smallest valid substring",
            "At most k distinct values",
          ],
          keyTakeaways: [
            "Track frequency counts when needed",
            "Do not move pointers backward",
          ],
        }
      ),
    ],
  },

  {
    slug: "prefix-sums",
    title: "Prefix Sums",
    summary: "Store cumulative totals to answer range sums and subarray questions efficiently.",
    estimatedHours: 5,
    difficulty: "Beginner",
    videoId: "u89i60lYx8U",
    videoTitle: "Prefix sums fundamentals",
    references: [
      {
        label: "GeeksforGeeks: Prefix sum",
        url: "https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-2/",
      },
    ],
    notes: [
      section(
        "Cumulative totals",
        [
          "A prefix sum stores the total from the beginning through each position. The sum from left through right can be calculated with subtraction.",
          "Using an extra leading zero makes formulas easier: rangeSum equals prefix[right + 1] minus prefix[left].",
        ],
        {
          keyTakeaways: [
            "Precompute cumulative information",
            "Answer repeated range queries quickly",
            "Useful for arrays and matrices",
          ],
        }
      ),
      section(
        "Prefix sum plus map",
        [
          "For a target sum k, if the current prefix sum is total, look for an earlier prefix sum equal to total minus k.",
          "Store prefix-sum frequencies in a map to count valid subarrays efficiently.",
        ],
        {
          keyTakeaways: [
            "Initialize prefix sum 0 with count 1",
            "Combine prefix sums with hashing",
          ],
        }
      ),
    ],
  },

  {
    slug: "kadane-algorithm",
    title: "Kadane's Algorithm",
    summary: "Find the maximum subarray sum in linear time.",
    estimatedHours: 4,
    difficulty: "Intermediate",
    videoId: "AHZpyENo7k4",
    videoTitle: "Kadane's algorithm explained",
    references: [
      {
        label: "GeeksforGeeks: Kadane's algorithm",
        url: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
      },
    ],
    notes: [
      section(
        "Maximum subarray",
        [
          "Kadane's algorithm maintains the best sum ending at the current position. It updates a running maximum in one pass.",
        ],
        {
          keyTakeaways: [
            "O(n) time, O(1) extra space",
            "Track current and global maximum",
          ],
        }
      ),
      section(
        "Variants",
        [],
        {
          bullets: [
            "Maximum product subarray",
            "Minimum subarray sum",
            "Circular array maximum sum",
          ],
          keyTakeaways: [
            "Extend the idea to related problems",
          ],
        }
      ),
    ],
  },

  {
    slug: "intervals",
    title: "Intervals",
    summary: "Ranges with start and end: merge, intersect, schedule, and partition.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "F57QnGOl12g",
    videoTitle: "Interval problems patterns",
    references: [
      {
        label: "LeetCode: Intervals",
        url: "https://leetcode.com/tag/interval/",
      },
    ],
    notes: [
      section(
        "Interval thinking",
        [
          "An interval has a start and an end. Many problems sort intervals by start or end, then scan to merge or schedule.",
        ],
        {
          keyTakeaways: [
            "Sort by start or end",
            "Track the current merged interval",
            "Use greedy choices for scheduling",
          ],
        }
      ),
      section(
        "Common tasks",
        [],
        {
          bullets: [
            "Merge overlapping intervals",
            "Insert and merge",
            "Non-overlapping intervals",
            "Meeting rooms scheduling",
          ],
          keyTakeaways: [
            "Sort first",
            "Scan once",
          ],
        }
      ),
    ],
  },

  {
    slug: "monotonic-stack",
    title: "Monotonic Stack",
    summary: "Maintain an increasing or decreasing stack to find next greater or smaller elements.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "DfljaUwZsPk",
    videoTitle: "Monotonic stack pattern",
    references: [
      {
        label: "GeeksforGeeks: Monotonic stack",
        url: "https://www.geeksforgeeks.org/next-greater-element/",
      },
    ],
    notes: [
      section(
        "Ordered stack",
        [
          "A monotonic stack keeps values in increasing or decreasing order. It is useful for next greater element, daily temperatures, and largest rectangle in histogram.",
        ],
        {
          keyTakeaways: [
            "Pop while order is violated",
            "Store indexes when needed",
            "Use for range-max or range-min queries",
          ],
        }
      ),
      section(
        "Typical problems",
        [],
        {
          bullets: [
            "Next greater element",
            "Daily temperatures",
            "Largest rectangle in histogram",
            "Trapping rain water variant",
          ],
          keyTakeaways: [
            "Maintain the invariant",
            "Use stack to remember candidates",
          ],
        }
      ),
    ],
  },

  {
    slug: "bit-manipulation",
    title: "Bit Manipulation",
    summary: "Use binary representation, masks, shifts, and XOR for compact logic.",
    estimatedHours: 5,
    difficulty: "Intermediate",
    videoId: "5gU6-8H4l1E",
    videoTitle: "Bit tricks for interviews",
    references: [
      {
        label: "MDN: Bitwise operators",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators",
      },
    ],
    notes: [
      section(
        "Bits and XOR",
        [
          "Bitwise operations work on binary digits. XOR cancels equal values because a value XOR itself becomes zero.",
          "Bit masks let you test, set, clear, or toggle individual bits.",
        ],
        {
          keyTakeaways: [
            "XOR helps with duplicate-pair problems",
            "Use shifts to select bit positions",
            "Bit masks represent compact flags",
          ],
        }
      ),
      section(
        "Useful operators",
        [],
        {
          bullets: [
            "value & mask: test a bit",
            "value | mask: set a bit",
            "value & ~mask: clear a bit",
            "value ^ mask: toggle a bit",
          ],
          keyTakeaways: [
            "Draw binary values when learning",
            "Useful in cybersecurity and low-level programming",
          ],
        }
      ),
    ],
  },

  {
    slug: "recursion",
    title: "Recursion",
    summary: "Solve a smaller version of the same problem and combine results.",
    estimatedHours: 8,
    difficulty: "Intermediate",
    videoId: "IJDJ0kBx4X8",
    videoTitle: "Recursion for beginners",
    references: [
      {
        label: "Wikipedia: Recursion",
        url: "https://en.wikipedia.org/wiki/Recursion_(computer_science)",
      },
    ],
    notes: [
      section(
        "Three required parts",
        [
          "Every recursive function needs a base case, progress toward the base case, and a way to combine a smaller answer into the current answer.",
          "Each call uses stack memory, so deeply recursive solutions can overflow the call stack.",
        ],
        {
          keyTakeaways: [
            "Always define a base case",
            "Make every call smaller",
            "Understand the call stack",
          ],
        }
      ),
      section(
        "Where it fits",
        [],
        {
          bullets: [
            "Trees",
            "Graph DFS",
            "Backtracking",
            "Divide and conquer",
            "Dynamic programming with memoization",
          ],
          keyTakeaways: [
            "Use iteration when it is clearer",
            "Recursion is a foundation for advanced topics",
          ],
        }
      ),
    ],
  },

  {
    slug: "backtracking",
    title: "Backtracking",
    summary: "Choose, explore, undo, and try all valid possibilities.",
    estimatedHours: 8,
    difficulty: "Intermediate",
    videoId: "G_Ulx2rUPEE",
    videoTitle: "Backtracking basics",
    references: [
      {
        label: "GeeksforGeeks: Backtracking",
        url: "https://www.geeksforgeeks.org/backtracking-algorithms/",
      },
    ],
    notes: [
      section(
        "Explore decisions",
        [
          "Backtracking explores a decision tree. Make a choice, recurse, undo the choice, and then try another option.",
          "It is useful when a problem asks for all valid combinations, paths, permutations, or arrangements.",
        ],
        {
          keyTakeaways: [
            "Usually uses recursion",
            "Save copies of completed paths",
            "Undo mutable state correctly",
          ],
        }
      ),
      section(
        "Common families",
        [],
        {
          bullets: [
            "Subsets",
            "Permutations",
            "Combinations",
            "N-Queens",
            "Word search",
          ],
          keyTakeaways: [
            "Prune invalid paths early",
            "Draw the decision tree before coding",
          ],
        }
      ),
    ],
  },

  {
    slug: "divide-and-conquer",
    title: "Divide and Conquer",
    summary: "Split a problem into smaller subproblems, solve them, and combine results.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "1J5wEfCI9QE",
    videoTitle: "Divide and conquer overview",
    references: [
      {
        label: "Wikipedia: Divide and conquer",
        url: "https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm",
      },
    ],
    notes: [
      section(
        "Split and combine",
        [
          "Divide and conquer splits a problem into smaller independent subproblems, solves each, and merges the answers.",
          "Merge sort and quicksort are classic examples.",
        ],
        {
          keyTakeaways: [
            "Identify the split",
            "Solve subproblems recursively",
            "Merge results efficiently",
          ],
        }
      ),
      section(
        "Common uses",
        [],
        {
          bullets: [
            "Merge sort",
            "Quick sort",
            "Binary search",
            "Closest pair of points",
          ],
          keyTakeaways: [
            "Recurrence relations describe complexity",
            "Often O(n log n)",
          ],
        }
      ),
    ],
  },

  {
    slug: "binary-trees",
    title: "Binary Trees",
    summary: "Hierarchical data structures for recursive reasoning and ordered searching.",
    estimatedHours: 9,
    difficulty: "Intermediate",
    videoId: "1-l_UOXGARo",
    videoTitle: "Binary trees",
    references: [
      {
        label: "Wikipedia: Tree (data structure)",
        url: "https://en.wikipedia.org/wiki/Tree_(data_structure)",
      },
    ],
    notes: [
      section(
        "Tree structure",
        [
          "A tree has parent-child relationships. Binary trees have at most two children per node.",
          "Tree shape matters: balanced trees are shallow, while skewed trees can behave like linked lists.",
        ],
        {
          keyTakeaways: [
            "Think in left and right subtrees",
            "Recursion is natural for trees",
            "Balanced shape improves performance",
          ],
        }
      ),
      section(
        "Traversals",
        [],
        {
          bullets: [
            "Preorder: node, left, right",
            "Inorder: left, node, right",
            "Postorder: left, right, node",
            "Level order: BFS using a queue",
          ],
          keyTakeaways: [
            "Traversal order changes the result",
            "BST inorder traversal is sorted",
          ],
        }
      ),
    ],
  },

  {
    slug: "binary-search-trees",
    title: "Binary Search Trees",
    summary: "Ordered binary trees supporting search, insert, and delete in logarithmic time when balanced.",
    estimatedHours: 7,
    difficulty: "Intermediate",
    videoId: "p33CV829OG8",
    videoTitle: "Binary search trees",
    references: [
      {
        label: "Wikipedia: Binary search tree",
        url: "https://en.wikipedia.org/wiki/Binary_search_tree",
      },
    ],
    notes: [
      section(
        "Ordered property",
        [
          "In a BST, left descendants are smaller and right descendants are larger than the current node.",
          "Inorder traversal yields sorted values.",
        ],
        {
          keyTakeaways: [
            "Search in O(h) time",
            "Insert and delete follow search path",
            "Balance affects performance",
          ],
        }
      ),
      section(
        "Common operations",
        [],
        {
          bullets: [
            "Search for a value",
            "Find minimum and maximum",
            "Validate BST property",
            "Lowest common ancestor",
          ],
          keyTakeaways: [
            "Use recursion or iteration",
            "Check edge cases carefully",
          ],
        }
      ),
    ],
  },

  {
    slug: "heaps-priority-queues",
    title: "Heaps & Priority Queues",
    summary: "Efficiently retrieve the smallest or largest priority item.",
    estimatedHours: 7,
    difficulty: "Intermediate",
    videoId: "t0Cq6tVNRBA",
    videoTitle: "Heaps and priority queues",
    references: [
      {
        label: "Wikipedia: Heap",
        url: "https://en.wikipedia.org/wiki/Heap_(data_structure)",
      },
    ],
    notes: [
      section(
        "Priority over full order",
        [
          "A heap keeps the smallest or largest priority item at the top without sorting every element. Reading the top is O(1), and insert or remove operations are usually O(log n).",
          "Heaps are especially useful when you repeatedly need the next best item.",
        ],
        {
          keyTakeaways: [
            "Peek is O(1)",
            "Push and pop are O(log n)",
            "Use a min-heap or max-heap intentionally",
          ],
        }
      ),
      section(
        "Important applications",
        [],
        {
          bullets: [
            "Top-K values",
            "Task scheduling",
            "Merging sorted lists",
            "Streaming median",
            "Dijkstra shortest paths",
          ],
          keyTakeaways: [
            "Important for backend roles",
            "A heap can avoid sorting the entire input",
          ],
        }
      ),
    ],
  },

  {
    slug: "graph-representation",
    title: "Graph Representation",
    summary: "Model nodes and edges using adjacency lists, matrices, or edge lists.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "09_LlHjoEiY",
    videoTitle: "Graph representations",
    references: [
      {
        label: "Wikipedia: Graph (abstract data type)",
        url: "https://en.wikipedia.org/wiki/Graph_(abstract_data_type)",
      },
    ],
    notes: [
      section(
        "Model connections",
        [
          "Graphs represent relationships between nodes. Common forms include adjacency lists, adjacency matrices, grids, and edge lists.",
          "Most graph problems use DFS, BFS, a visited set, and careful handling of cycles.",
        ],
        {
          keyTakeaways: [
            "Adjacency lists are common",
            "Track visited nodes",
            "Model directed and undirected edges correctly",
          ],
        }
      ),
      section(
        "BFS and DFS",
        [
          "DFS explores deeply using recursion or a stack. BFS explores level by level using a queue and finds shortest paths in unweighted graphs.",
        ],
        {
          keyTakeaways: [
            "DFS: stack or recursion",
            "BFS: queue",
            "BFS for unweighted shortest paths",
          ],
        }
      ),
    ],
  },

  {
    slug: "depth-first-search",
    title: "Depth-First Search",
    summary: "Explore a graph by going as deep as possible before backtracking.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "Urx87-NMm6c",
    videoTitle: "DFS on graphs",
    references: [
      {
        label: "Wikipedia: DFS",
        url: "https://en.wikipedia.org/wiki/Depth-first_search",
      },
    ],
    notes: [
      section(
        "Go deep first",
        [
          "DFS visits a node, then recursively visits unvisited neighbors. It uses a stack or recursion.",
        ],
        {
          keyTakeaways: [
            "Use for path existence",
            "Use for component counting",
            "Track visited nodes",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Cycle detection",
            "Topological sort",
            "Connected components",
            "Maze solving",
          ],
          keyTakeaways: [
            "Backtrack when stuck",
            "Use recursion carefully",
          ],
        }
      ),
    ],
  },

  {
    slug: "breadth-first-search",
    title: "Breadth-First Search",
    summary: "Explore a graph level by level using a queue.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "s-CYnVz-uh4",
    videoTitle: "BFS on graphs",
    references: [
      {
        label: "Wikipedia: BFS",
        url: "https://en.wikipedia.org/wiki/Breadth-first_search",
      },
    ],
    notes: [
      section(
        "Level by level",
        [
          "BFS uses a queue to visit nodes in order of distance from the start. It finds shortest paths in unweighted graphs.",
        ],
        {
          keyTakeaways: [
            "Use a queue",
            "Track distance or steps",
            "Mark nodes visited when enqueued",
          ],
        }
      ),
      section(
        "Common uses",
        [],
        {
          bullets: [
            "Shortest path in unweighted graph",
            "Level order traversal",
            "Word ladder",
            "Rotten oranges",
          ],
          keyTakeaways: [
            "BFS guarantees shortest unweighted path",
            "Use visited set to avoid cycles",
          ],
        }
      ),
    ],
  },

  {
    slug: "topological-sort",
    title: "Topological Sort",
    summary: "Order tasks with dependencies so each task comes after its prerequisites.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "eL-KzMXSXXI",
    videoTitle: "Topological sort explained",
    references: [
      {
        label: "Wikipedia: Topological sorting",
        url: "https://en.wikipedia.org/wiki/Topological_sorting",
      },
    ],
    notes: [
      section(
        "Dependency ordering",
        [
          "Topological sort orders nodes in a directed acyclic graph so that every edge goes from earlier to later.",
          "Use DFS postorder or Kahn's algorithm with in-degree counts.",
        ],
        {
          keyTakeaways: [
            "Only possible for DAGs",
            "Detect cycles if no order exists",
            "Use for scheduling tasks",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Course schedule",
            "Build systems",
            "Task scheduling",
            "Dependency resolution",
          ],
          keyTakeaways: [
            "Model prerequisites as edges",
            "Use BFS or DFS approach",
          ],
        }
      ),
    ],
  },

  {
    slug: "union-find",
    title: "Union-Find",
    summary: "Track connected components as relationships or edges are added.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "wU6udHRIkcc",
    videoTitle: "Disjoint set union",
    references: [
      {
        label: "Wikipedia: Disjoint-set data structure",
        url: "https://en.wikipedia.org/wiki/Disjoint-set_data_structure",
      },
    ],
    notes: [
      section(
        "Groups and representatives",
        [
          "Union-Find stores a parent representative for each item. Find identifies the group, and union joins two groups.",
          "Path compression and union by rank keep operations extremely fast in practice.",
        ],
        {
          keyTakeaways: [
            "Fast dynamic connectivity",
            "Path compression flattens parent chains",
            "Union by rank keeps trees shallow",
          ],
        }
      ),
      section(
        "When to use it",
        [],
        {
          bullets: [
            "Count connected components",
            "Cycle detection in undirected graphs",
            "Minimum spanning trees",
            "Grouping linked accounts or devices",
          ],
          keyTakeaways: [
            "Use when edges merge groups",
            "Different from DFS and BFS traversal",
          ],
        }
      ),
    ],
  },

  {
    slug: "dijkstra-algorithm",
    title: "Dijkstra's Algorithm",
    summary: "Find shortest paths from a source in a weighted graph with non-negative edges.",
    estimatedHours: 7,
    difficulty: "Advanced",
    videoId: "pVfj6mxhdMw",
    videoTitle: "Dijkstra's algorithm",
    references: [
      {
        label: "Wikipedia: Dijkstra's algorithm",
        url: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",
      },
    ],
    notes: [
      section(
        "Shortest weighted paths",
        [
          "Dijkstra's algorithm uses a priority queue to expand the closest unvisited node. It updates distances to neighbors.",
        ],
        {
          keyTakeaways: [
            "Non-negative edge weights only",
            "O((V + E) log V) with a heap",
            "Track distances and predecessors",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Network routing",
            "Map shortest paths",
            "Game pathfinding",
            "Minimum cost paths",
          ],
          keyTakeaways: [
            "Use a min-heap",
            "Initialize distances to infinity",
          ],
        }
      ),
    ],
  },

  {
    slug: "minimum-spanning-tree",
    title: "Minimum Spanning Tree",
    summary: "Connect all nodes with minimum total edge weight using Kruskal or Prim.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "71UQH7Pr9kU",
    videoTitle: "MST algorithms",
    references: [
      {
        label: "Wikipedia: Minimum spanning tree",
        url: "https://en.wikipedia.org/wiki/Minimum_spanning_tree",
      },
    ],
    notes: [
      section(
        "Cheapest connections",
        [
          "An MST connects all nodes with minimum total edge weight. Kruskal uses Union-Find with sorted edges. Prim grows a tree from a start node.",
        ],
        {
          keyTakeaways: [
            "No cycles in MST",
            "Unique if edge weights are distinct",
            "Use for network design",
          ],
        }
      ),
      section(
        "Algorithms",
        [],
        {
          bullets: [
            "Kruskal with Union-Find",
            "Prim with priority queue",
            "Boruvka's algorithm",
          ],
          keyTakeaways: [
            "Sort edges for Kruskal",
            "Use heap for Prim",
          ],
        }
      ),
    ],
  },

  {
    slug: "greedy-algorithms",
    title: "Greedy Algorithms",
    summary: "Make a locally best choice when it can be proven globally correct.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "bC7o8P_Ste4",
    videoTitle: "Greedy algorithm intuition",
    references: [
      {
        label: "Wikipedia: Greedy algorithm",
        url: "https://en.wikipedia.org/wiki/Greedy_algorithm",
      },
    ],
    notes: [
      section(
        "A safe local choice",
        [
          "Greedy algorithms choose the best available local option. The key challenge is proving that the local choice never blocks an optimal final answer.",
          "Many greedy solutions begin by sorting intervals, values, or events.",
        ],
        {
          keyTakeaways: [
            "Greedy is not guessing",
            "Correctness needs reasoning",
            "Often combines with sorting or heaps",
          ],
        }
      ),
      section(
        "Greedy versus DP",
        [
          "Use greedy when one local decision is always safe. Use dynamic programming when several earlier decisions may lead to different optimal futures.",
        ],
        {
          keyTakeaways: [
            "Test counterexamples",
            "Use DP when greedy can fail",
          ],
        }
      ),
    ],
  },

  {
    slug: "dynamic-programming",
    title: "Dynamic Programming",
    summary: "Reuse answers to overlapping subproblems through states and transitions.",
    estimatedHours: 10,
    difficulty: "Advanced",
    videoId: "OQ5jsbhAv_M",
    videoTitle: "Dynamic programming fundamentals",
    references: [
      {
        label: "Wikipedia: Dynamic programming",
        url: "https://en.wikipedia.org/wiki/Dynamic_programming",
      },
    ],
    notes: [
      section(
        "The DP question",
        [
          "Dynamic programming fits problems with overlapping subproblems and optimal substructure. Define a state, base cases, and a transition.",
          "Memoization solves recursively and caches results. Tabulation fills answers from smaller states upward.",
        ],
        {
          keyTakeaways: [
            "Define what dp state means",
            "Write base cases first",
            "Reuse earlier answers",
          ],
        }
      ),
      section(
        "Common families",
        [],
        {
          bullets: [
            "Climbing stairs",
            "Knapsack choices",
            "Coin change",
            "Longest increasing subsequence",
            "Grid paths",
          ],
          keyTakeaways: [
            "Start from brute-force recursion",
            "Cache repeated states",
            "Optimize space when possible",
          ],
        }
      ),
    ],
  },

  {
    slug: "tries",
    title: "Tries",
    summary: "Store strings by shared prefixes for fast word and prefix queries.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "oobqoCJlHA0",
    videoTitle: "Trie data structure",
    references: [
      {
        label: "Wikipedia: Trie",
        url: "https://en.wikipedia.org/wiki/Trie",
      },
    ],
    notes: [
      section(
        "A prefix tree",
        [
          "A trie stores characters along paths. Words with the same beginning share nodes for that prefix.",
          "Search time depends mainly on word length, which makes tries useful for repeated prefix queries.",
        ],
        {
          keyTakeaways: [
            "Efficient prefix lookup",
            "Mark word endings separately",
            "Uses more memory than a hash set",
          ],
        }
      ),
      section(
        "Use cases",
        [],
        {
          bullets: [
            "Autocomplete",
            "Dictionary search",
            "Prefix filters",
            "Word-search boards",
          ],
          keyTakeaways: [
            "Separate word search from prefix search",
            "Useful for string-heavy systems",
          ],
        }
      ),
    ],
  },

  {
    slug: "string-hashing",
    title: "String Hashing",
    summary: "Represent strings as numeric hashes for fast comparison and substring checks.",
    estimatedHours: 5,
    difficulty: "Advanced",
    videoId: "VPV98o0MPh4",
    videoTitle: "String hashing and Rabin-Karp",
    references: [
      {
        label: "GeeksforGeeks: Rabin-Karp",
        url: "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
      },
    ],
    notes: [
      section(
        "Hash strings",
        [
          "String hashing converts a string into a numeric value. Equal strings produce equal hashes, while different strings usually differ.",
          "Rolling hashes allow fast substring hash updates.",
        ],
        {
          keyTakeaways: [
            "Use for pattern matching",
            "Handle collisions carefully",
            "Use modulo arithmetic",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Rabin-Karp search",
            "Duplicate substring detection",
            "Longest common substring variants",
          ],
          keyTakeaways: [
            "Precompute prefix hashes",
            "Use large prime moduli",
          ],
        }
      ),
    ],
  },

  {
    slug: "kmp-algorithm",
    title: "KMP Algorithm",
    summary: "Search for a pattern in text in linear time using failure links.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "V5-7GzOfADQ",
    videoTitle: "KMP pattern matching",
    references: [
      {
        label: "Wikipedia: KMP",
        url: "https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm",
      },
    ],
    notes: [
      section(
        "Avoid rechecking",
        [
          "KMP precomputes a failure function for the pattern. It skips characters that are guaranteed to match.",
        ],
        {
          keyTakeaways: [
            "O(n + m) time",
            "Use for repeated pattern search",
            "Preprocess the pattern",
          ],
        }
      ),
      section(
        "When to use",
        [],
        {
          bullets: [
            "Multiple pattern occurrences",
            "Large text with small pattern",
            "Streaming text",
          ],
          keyTakeaways: [
            "Better than naive search for long texts",
            "Understand failure function",
          ],
        }
      ),
    ],
  },

  {
    slug: "math-basics",
    title: "Math Basics",
    summary: "GCD, LCM, primes, modular arithmetic, and fast exponentiation.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "ju36kH8v2Ww",
    videoTitle: "Number theory basics",
    references: [
      {
        label: "GeeksforGeeks: Number theory",
        url: "https://www.geeksforgeeks.org/number-theory/",
      },
    ],
    notes: [
      section(
        "Core concepts",
        [
          "GCD and LCM describe relationships between integers. Primes and factorization are central to many algorithms.",
        ],
        {
          keyTakeaways: [
            "Euclidean algorithm for GCD",
            "Sieve for primes",
            "Modular arithmetic for large numbers",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Prime checking",
            "Factorization",
            "Modular inverse",
            "Fast exponentiation",
          ],
          keyTakeaways: [
            "Useful in cryptography",
            "Common in competitive programming",
          ],
        }
      ),
    ],
  },

  {
    slug: "bitmasking",
    title: "Bitmasking",
    summary: "Represent sets and states using bits for compact DP and combinatorics.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "1O6Qstncpnc",
    videoTitle: "Bitmask DP introduction",
    references: [
      {
        label: "GeeksforGeeks: Bitmask DP",
        url: "https://www.geeksforgeeks.org/bitmasking-and-dynamic-programming-set-1/",
      },
    ],
    notes: [
      section(
        "Sets as integers",
        [
          "A bitmask uses each bit to represent membership in a set. This allows compact state representation in DP.",
        ],
        {
          keyTakeaways: [
            "Use for small sets",
            "Iterate over subsets",
            "Combine with DP",
          ],
        }
      ),
      section(
        "Common uses",
        [],
        {
          bullets: [
            "Traveling salesman variants",
            "Subset DP",
            "Assignment problems",
          ],
          keyTakeaways: [
            "Limit to small n",
            "Use bit operations efficiently",
          ],
        }
      ),
    ],
  },

  {
    slug: "fenwick-tree",
    title: "Fenwick Tree",
    summary: "Efficient prefix sums with point updates using a binary indexed tree.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "CWDQYN44xh4",
    videoTitle: "Fenwick tree basics",
    references: [
      {
        label: "GeeksforGeeks: Fenwick tree",
        url: "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/",
      },
    ],
    notes: [
      section(
        "Prefix sums with updates",
        [
          "A Fenwick tree supports point updates and prefix sum queries in O(log n) time.",
        ],
        {
          keyTakeaways: [
            "Use 1-based indexing",
            "Update and query in O(log n)",
            "Simpler than segment tree",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Range sum queries",
            "Frequency counts",
            "Inversion counting",
          ],
          keyTakeaways: [
            "Use for dynamic prefix sums",
            "Understand bit operations",
          ],
        }
      ),
    ],
  },

  {
    slug: "segment-tree",
    title: "Segment Tree",
    summary: "Range queries and updates on intervals using a tree of segments.",
    estimatedHours: 8,
    difficulty: "Advanced",
    videoId: "ZBHKZKw5Q-Q",
    videoTitle: "Segment tree introduction",
    references: [
      {
        label: "GeeksforGeeks: Segment tree",
        url: "https://www.geeksforgeeks.org/segment-tree-data-structure/",
      },
    ],
    notes: [
      section(
        "Interval tree",
        [
          "A segment tree stores information about intervals. It supports range queries and point or range updates in O(log n) time.",
        ],
        {
          keyTakeaways: [
            "Build in O(n)",
            "Query and update in O(log n)",
            "Use for range min/max/sum",
          ],
        }
      ),
      section(
        "Advanced features",
        [],
        {
          bullets: [
            "Lazy propagation",
            "Persistent segment tree",
            "2D segment tree",
          ],
          keyTakeaways: [
            "Use for complex range operations",
            "More flexible than Fenwick tree",
          ],
        }
      ),
    ],
  },

  {
    slug: "prime-numbers",
    title: "Prime Numbers",
    summary: "Generate and test primes using sieves and factorization.",
    estimatedHours: 5,
    difficulty: "Intermediate",
    videoId: "fb4oZwS4VhQ",
    videoTitle: "Prime numbers and sieves",
    references: [
      {
        label: "GeeksforGeeks: Sieve of Eratosthenes",
        url: "https://www.geeksforgeeks.org/sieve-of-eratosthenes/",
      },
    ],
    notes: [
      section(
        "Efficient prime generation",
        [
          "The Sieve of Eratosthenes marks multiples of each prime to find all primes up to n in O(n log log n) time.",
        ],
        {
          keyTakeaways: [
            "Use for many prime queries",
            "Precompute primes once",
            "Use for factorization",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Prime counting",
            "Factorization",
            "GCD and LCM with primes",
          ],
          keyTakeaways: [
            "Useful in number theory",
            "Common in competitive programming",
          ],
        }
      ),
    ],
  },

  {
    slug: "modular-arithmetic",
    title: "Modular Arithmetic",
    summary: "Perform arithmetic under a modulus for large numbers and cryptography.",
    estimatedHours: 5,
    difficulty: "Advanced",
    videoId: "FnQqbqz5wzI",
    videoTitle: "Modular arithmetic basics",
    references: [
      {
        label: "GeeksforGeeks: Modular arithmetic",
        url: "https://www.geeksforgeeks.org/modular-arithmetic/",
      },
    ],
    notes: [
      section(
        "Work with remainders",
        [
          "Modular arithmetic keeps numbers within a fixed range. It is essential for large-number problems and cryptography.",
        ],
        {
          keyTakeaways: [
            "(a + b) mod m = ((a mod m) + (b mod m)) mod m",
            "Use fast exponentiation",
            "Compute modular inverse when needed",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Large factorials",
            "Combinatorics modulo m",
            "RSA and cryptography",
          ],
          keyTakeaways: [
            "Use prime modulus for inverses",
            "Avoid overflow",
          ],
        }
      ),
    ],
  },

  {
    slug: "combinatorics",
    title: "Combinatorics",
    summary: "Count arrangements, selections, and permutations using formulas and DP.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "XjQJ5v4h0fM",
    videoTitle: "Combinatorics for programming",
    references: [
      {
        label: "GeeksforGeeks: Combinatorics",
        url: "https://www.geeksforgeeks.org/combinatorics/",
      },
    ],
    notes: [
      section(
        "Counting principles",
        [
          "Combinatorics counts ways to arrange or select items. Common formulas include nCr, nPr, and inclusion-exclusion.",
        ],
        {
          keyTakeaways: [
            "Use factorials and combinations",
            "Apply modulo for large counts",
            "Use DP for constrained counting",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Probability calculations",
            "Grid path counting",
            "Subset and permutation counting",
          ],
          keyTakeaways: [
            "Derive formulas carefully",
            "Check edge cases",
          ],
        }
      ),
    ],
  },

  {
    slug: "computational-geometry",
    title: "Computational Geometry",
    summary: "Points, lines, polygons, and convex hulls for geometric algorithms.",
    estimatedHours: 7,
    difficulty: "Advanced",
    videoId: "BrebF4oZ9qg",
    videoTitle: "Computational geometry basics",
    references: [
      {
        label: "GeeksforGeeks: Geometry",
        url: "https://www.geeksforgeeks.org/geometry/",
      },
    ],
    notes: [
      section(
        "Geometric primitives",
        [
          "Computational geometry deals with points, lines, segments, and polygons. Common tasks include intersection, distance, and hulls.",
        ],
        {
          keyTakeaways: [
            "Use cross products",
            "Handle floating-point carefully",
            "Use integer arithmetic when possible",
          ],
        }
      ),
      section(
        "Common problems",
        [],
        {
          bullets: [
            "Convex hull",
            "Line intersection",
            "Closest pair of points",
            "Polygon area",
          ],
          keyTakeaways: [
            "Visualize before coding",
            "Test edge cases",
          ],
        }
      ),
    ],
  },

  {
    slug: "randomized-algorithms",
    title: "Randomized Algorithms",
    summary: "Use randomness for expected fast performance or simpler logic.",
    estimatedHours: 5,
    difficulty: "Advanced",
    videoId: "pHo85vC5Mx0",
    videoTitle: "Randomized algorithms overview",
    references: [
      {
        label: "Wikipedia: Randomized algorithm",
        url: "https://en.wikipedia.org/wiki/Randomized_algorithm",
      },
    ],
    notes: [
      section(
        "Expected efficiency",
        [
          "Randomized algorithms use random choices to achieve good expected performance. Examples include randomized quicksort and hashing.",
        ],
        {
          keyTakeaways: [
            "Analyze expected time",
            "Use for average-case speed",
            "Avoid worst-case inputs",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Randomized quicksort",
            "Hashing",
            "Monte Carlo methods",
            "Random sampling",
          ],
          keyTakeaways: [
            "Use random pivots",
            "Understand probability",
          ],
        }
      ),
    ],
  },
];

// ============================================================
// TOPIC LOOKUP
// ============================================================

export const TOPIC_BY_SLUG = Object.fromEntries(
  TOPICS.map((topic) => [topic.slug, topic])
);

const FALLBACK_REFERENCE = {
  label: "Wikipedia: Algorithms and data structures",
  url: "https://en.wikipedia.org/wiki/Algorithm",
};

export const ALL_TOPICS = DSA_MASTER_TOPICS.map((slug) => {
  const topic = TOPIC_BY_SLUG[slug];
  if (topic) return topic;
  return {
    slug,
    title: slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
    summary: `Build practical understanding of ${slug.replaceAll("-", " ")}.`,
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "",
    videoTitle: "",
    references: [FALLBACK_REFERENCE],
    notes: [
      section("Core idea", [`Study the main concepts, operations, and tradeoffs of ${slug.replaceAll("-", " ")}.`]),
      section("Practice focus", [], { bullets: ["Explain the idea in your own words", "Trace a small example", "Compare time and space complexity"] }),
    ],
  };
});

export const LANGUAGES = ["JavaScript", "Python", "Java", "C++"];

export const FIELDS = [
  "Computer Science",
  "Information Technology",
  "Software Engineering",
  "Data Science",
  "Cybersecurity",
];

export const CAREERS = [
  { id: "software_developer", label: "Software Developer", blurb: "Build products and solve a broad range of engineering problems." },
  { id: "backend_engineer", label: "Backend Engineer", blurb: "Design reliable services, APIs, and data-heavy systems." },
  { id: "data_analyst", label: "Data Analyst", blurb: "Turn data into clear findings and better decisions." },
  { id: "cybersecurity", label: "Cybersecurity", blurb: "Analyze systems, threats, and secure computing patterns." },
  { id: "competitive_programming", label: "Competitive Programming", blurb: "Develop speed and depth across advanced algorithmic problems." },
];

export const PACE = [
  { id: "relaxed", label: "Relaxed", blurb: "A steady four hours each week." },
  { id: "steady", label: "Steady", blurb: "A consistent eight-hour weekly rhythm." },
  { id: "intense", label: "Intense", blurb: "A focused fourteen-hour weekly sprint." },
];

export const DSA_LEVELS = [
  { id: "beginner", label: "Beginner", blurb: "Start with programming and core data structures." },
  { id: "intermediate", label: "Intermediate", blurb: "Build fluency with common patterns and structures." },
  { id: "advanced", label: "Advanced", blurb: "Work through advanced algorithms and specialist topics." },
];

// The detailed content file currently contains 46 fully written topics.
// The master registry contains the complete basic-to-advanced curriculum.
// This combined list lets the roadmap use every canonical topic without
// inventing educational notes for topics that have not yet been authored.

export const TOPICS_WITH_CONTENT_STATUS = DSA_MASTER_TOPICS.map((slug) => ({
  slug,
  hasDetailedContent: Boolean(TOPIC_BY_SLUG[slug]),
  topic: TOPIC_BY_SLUG[slug] || null,
}));

// ============================================================
// CORE CURRICULUM
// Required foundation for every software-related learner.
// ============================================================

export const CORE_DSA_CURRICULUM = [
  "programming-basics",
  "arrays",
  "input-output",
  "variables-data-types",
  "conditionals",
  "loops",
  "functions",
  "debugging",
  "testing",
  "time-complexity",
  "space-complexity",
  "asymptotic-analysis",
  "2d-arrays-matrices",
  "strings",
  "hashing",
  "hashmaps",
  "hashsets",
  "linear-search",
  "sorting-basics",
  "binary-search",
  "two-pointers",
  "sliding-window",
  "prefix-sums",
  "kadane-algorithm",
  "intervals",
  "monotonic-stack",
  "bit-manipulation",
  "linked-lists",
  "stacks",
  "queues",
  "deques",
  "recursion",
  "backtracking",
  "divide-and-conquer",
  "binary-trees",
  "tree-traversals",
  "binary-search-trees",
  "heaps-priority-queues",
  "graph-representation",
  "depth-first-search",
  "breadth-first-search",
  "graph-cycle-detection",
  "topological-sort",
  "union-find",
  "dijkstra-algorithm",
  "greedy-algorithms",
  "dynamic-programming",
  "memoization",
  "tabulation",
  "tries",
  "string-hashing",
];

// ============================================================
// CAREER ROADMAPS
// Ordered from highest-value foundations toward career-specific depth.
// ============================================================

export const SOFTWARE_DEVELOPER_ROADMAP = [
  ...CORE_DSA_CURRICULUM,
  "binary-search-variants",
  "merge-intervals",
  "monotonic-queue",
  "tree-height-depth-diameter",
  "lowest-common-ancestor",
  "tree-path-problems",
  "top-k-problems",
  "median-from-data-stream",
  "connected-components",
  "bipartite-graphs",
  "shortest-path-unweighted",
  "minimum-spanning-tree",
  "kruskal-algorithm",
  "prim-algorithm",
  "1d-dynamic-programming",
  "2d-dynamic-programming",
  "knapsack",
  "longest-common-subsequence",
  "longest-increasing-subsequence",
  "edit-distance",
  "kmp-algorithm",
  "rabin-karp",
];

export const BACKEND_ENGINEER_ROADMAP = [
  "programming-basics",
  "arrays",
  "input-output",
  "variables-data-types",
  "conditionals",
  "loops",
  "functions",
  "time-complexity",
  "space-complexity",
  "strings",
  "hashing",
  "hashmaps",
  "hashsets",
  "sorting-basics",
  "binary-search",
  "two-pointers",
  "sliding-window",
  "prefix-sums",
  "intervals",
  "stacks",
  "queues",
  "deques",
  "heaps-priority-queues",
  "top-k-problems",
  "median-from-data-stream",
  "linked-lists",
  "recursion",
  "binary-trees",
  "binary-search-trees",
  "tries",
  "graph-representation",
  "depth-first-search",
  "breadth-first-search",
  "topological-sort",
  "course-schedule-pattern",
  "dijkstra-algorithm",
  "union-find",
  "minimum-spanning-tree",
  "greedy-algorithms",
  "dynamic-programming",
  "memoization",
  "tabulation",
  "monotonic-stack",
  "string-hashing",
  "bit-manipulation",
];

export const DATA_ANALYST_ROADMAP = [
  "programming-basics",
  "arrays",
  "input-output",
  "variables-data-types",
  "conditionals",
  "loops",
  "functions",
  "time-complexity",
  "space-complexity",
  "2d-arrays-matrices",
  "strings",
  "hashing",
  "hashmaps",
  "hashsets",
  "frequency-arrays",
  "sorting-basics",
  "merge-sort",
  "quick-sort",
  "counting-sort",
  "binary-search",
  "two-pointers",
  "sliding-window",
  "prefix-sums",
  "difference-arrays",
  "kadane-algorithm",
  "intervals",
  "heaps-priority-queues",
  "top-k-problems",
  "median-from-data-stream",
  "greedy-algorithms",
  "dynamic-programming",
  "memoization",
  "tabulation",
  "binary-trees",
  "binary-search-trees",
  "graph-representation",
  "connected-components",
  "union-find",
  "math-basics",
  "gcd-lcm",
  "prime-numbers",
  "probability-basics",
  "combinatorics",
];

export const CYBERSECURITY_ROADMAP = [
  "programming-basics",
  "arrays",
  "input-output",
  "variables-data-types",
  "conditionals",
  "loops",
  "functions",
  "time-complexity",
  "space-complexity",
  "2d-arrays-matrices",
  "strings",
  "hashing",
  "hashmaps",
  "hashsets",
  "frequency-arrays",
  "bit-manipulation",
  "bitmasking",
  "binary-search",
  "two-pointers",
  "sliding-window",
  "prefix-sums",
  "stacks",
  "queues",
  "deques",
  "linked-lists",
  "recursion",
  "tries",
  "string-hashing",
  "rabin-karp",
  "kmp-algorithm",
  "binary-trees",
  "heaps-priority-queues",
  "graph-representation",
  "depth-first-search",
  "breadth-first-search",
  "graph-cycle-detection",
  "connected-components",
  "topological-sort",
  "dijkstra-algorithm",
  "union-find",
  "greedy-algorithms",
  "dynamic-programming",
  "math-basics",
  "gcd-lcm",
  "prime-numbers",
  "modular-arithmetic",
  "fast-exponentiation",
];

export const COMPETITIVE_PROGRAMMING_ROADMAP = [
  ...CORE_DSA_CURRICULUM,
  "merge-sort",
  "quick-sort",
  "heap-sort",
  "counting-sort",
  "radix-sort",
  "bucket-sort",
  "binary-search-variants",
  "lower-upper-bound",
  "search-in-rotated-array",
  "difference-arrays",
  "sweep-line",
  "monotonic-queue",
  "bitmasking",
  "doubly-linked-lists",
  "circular-linked-lists",
  "circular-queues",
  "permutations",
  "combinations",
  "n-queens",
  "sudoku-solver",
  "word-search",
  "balanced-trees",
  "avl-trees",
  "red-black-trees",
  "lowest-common-ancestor",
  "tree-serialization",
  "merge-k-sorted-lists",
  "connected-components",
  "bipartite-graphs",
  "bellman-ford",
  "floyd-warshall",
  "minimum-spanning-tree",
  "kruskal-algorithm",
  "prim-algorithm",
  "strongly-connected-components",
  "bridges-and-articulation-points",
  "network-flow-basics",
  "interval-scheduling",
  "activity-selection",
  "jump-game-pattern",
  "fractional-knapsack",
  "1d-dynamic-programming",
  "2d-dynamic-programming",
  "knapsack",
  "unbounded-knapsack",
  "subset-sum",
  "coin-change",
  "longest-common-subsequence",
  "longest-increasing-subsequence",
  "edit-distance",
  "matrix-chain-multiplication",
  "interval-dynamic-programming",
  "tree-dynamic-programming",
  "bitmask-dynamic-programming",
  "digit-dynamic-programming",
  "rabin-karp",
  "kmp-algorithm",
  "z-algorithm",
  "manacher-algorithm",
  "suffix-array",
  "suffix-tree",
  "fenwick-tree",
  "segment-tree",
  "lazy-propagation",
  "sparse-table",
  "sqrt-decomposition",
  "range-minimum-query",
  "ordered-sets",
  "disjoint-set-union",
  "prime-numbers",
  "sieve-of-eratosthenes",
  "modular-arithmetic",
  "fast-exponentiation",
  "modular-inverse",
  "combinatorics",
  "permutations-combinations",
  "computational-geometry",
  "randomized-algorithms",
  "game-theory-basics",
];

// ============================================================
// CAREER PRIORITY MAP
// ============================================================

export const CAREER_PRIORITY = {
  software_developer: SOFTWARE_DEVELOPER_ROADMAP,
  backend_engineer: BACKEND_ENGINEER_ROADMAP,
  data_analyst: DATA_ANALYST_ROADMAP,
  cybersecurity: CYBERSECURITY_ROADMAP,
  competitive_programming: COMPETITIVE_PROGRAMMING_ROADMAP,
};

// Friendly aliases so callers can use common career labels.
export const CAREER_ALIASES = {
  "Software Developer": "software_developer",
  "Backend Engineer": "backend_engineer",
  "Data Analyst": "data_analyst",
  Cybersecurity: "cybersecurity",
  "Competitive Programming": "competitive_programming",
};

// ============================================================
// LEGACY/CANONICAL SLUG COMPATIBILITY
// ============================================================

export const LEGACY_TOPIC_ALIASES = {
  graphs: "graph-representation",
  "number-theory": "math-basics",
};

// ============================================================
// REQUIRED TOPICS THAT WERE PREVIOUSLY MISSING FROM THE CORE TRACK
// ============================================================

export const REQUIRED_MISSING_TOPICS = [
  "programming-basics",
  "time-complexity",
  "space-complexity",
  "2d-arrays-matrices",
  "binary-search-variants",
  "kadane-algorithm",
  "intervals",
  "monotonic-stack",
  "monotonic-queue",
  "binary-search-trees",
  "topological-sort",
  "dijkstra-algorithm",
  "minimum-spanning-tree",
  "graph-cycle-detection",
  "string-hashing",
  "kmp-algorithm",
  "math-basics",
  "gcd-lcm",
  "prime-numbers",
  "modular-arithmetic",
];

// ============================================================
// ROADMAP LEVEL DEFINITIONS
// ============================================================

export const ROADMAP_LEVELS = {
  core: "Required for every learner and every software-related career.",
  careerAdvanced: "Required only when relevant to the selected career goal.",
  specialist:
    "Optional for competitive programming, research, systems, and advanced university work.",
};

// ============================================================
// STUDY PACE SETTINGS
// ============================================================

export const PACE_SETTINGS = {
  relaxed: {
    hoursPerWeek: 4,
    sessionsPerWeek: 3,
    sessionMinutes: 80,

    topicsPerWeek: 1,
    lessonsPerTopic: 2,
    questionsPerWeek: 8,

    easyQuestionsPerTopic: 6,
    mediumQuestionsPerTopic: 2,
    hardQuestionsPerTopic: 0,

    revisionSessionsPerWeek: 2,
    mockInterviewsPerMonth: 0,

    explanationDepth: "detailed",
    maxHintsBeforeSolution: 50,

    estimatedMonthsForCore: 10,
    estimatedMonthsForFullTrack: 14,
  },

  steady: {
    hoursPerWeek: 8,
    sessionsPerWeek: 4,
    sessionMinutes: 120,

    topicsPerWeek: 2,
    lessonsPerTopic: 2,
    questionsPerWeek: 16,

    easyQuestionsPerTopic: 6,
    mediumQuestionsPerTopic: 5,
    hardQuestionsPerTopic: 1,

    revisionSessionsPerWeek: 1,
    mockInterviewsPerMonth: 1,

    explanationDepth: "standard",
    maxHintsBeforeSolution: 50,

    estimatedMonthsForCore: 6,
    estimatedMonthsForFullTrack: 9,
  },

  intense: {
    hoursPerWeek: 14,
    sessionsPerWeek: 6,
    sessionMinutes: 140,

    topicsPerWeek: 3,
    lessonsPerTopic: 1,
    questionsPerWeek: 28,

    easyQuestionsPerTopic: 5,
    mediumQuestionsPerTopic: 8,
    hardQuestionsPerTopic: 3,

    revisionSessionsPerWeek: 2,
    mockInterviewsPerMonth: 2,

    explanationDepth: "concise",
    maxHintsBeforeSolution: 50,

    estimatedMonthsForCore: 3,
    estimatedMonthsForFullTrack: 5,
  },
};

// ============================================================
// LEARNER LEVEL SETTINGS
// ============================================================

export const LEVEL_SETTINGS = {
  beginner: {
    startTopics: [
      "programming-basics",
      "arrays",
      "input-output",
      "variables-data-types",
      "conditionals",
      "loops",
      "functions",
      "time-complexity",
      "space-complexity",
      "strings",
      "hashing",
      "sorting-basics",
      "two-pointers",
      "sliding-window",
      "prefix-sums",
    ],
    questionDifficultyMix: {
      Easy: 0.85,
      Medium: 0.15,
      Hard: 0,
    },
    unlockRule: {
      minimumTopicProgress: 0.7,
      minimumEasyAccuracy: 0.65,
      minimumQuestionsCompleted: 5,
    },
  },

  intermediate: {
    startTopics: [
      "binary-search",
      "linked-lists",
      "stacks",
      "queues",
      "recursion",
      "backtracking",
      "binary-trees",
      "binary-search-trees",
      "heaps-priority-queues",
      "graph-representation",
      "depth-first-search",
      "breadth-first-search",
      "greedy-algorithms",
      "dynamic-programming",
    ],
    questionDifficultyMix: {
      Easy: 0.45,
      Medium: 0.45,
      Hard: 0.1,
    },
    unlockRule: {
      minimumTopicProgress: 0.75,
      minimumEasyAccuracy: 0.7,
      minimumQuestionsCompleted: 8,
    },
  },

  advanced: {
    startTopics: [
      "topological-sort",
      "union-find",
      "dijkstra-algorithm",
      "minimum-spanning-tree",
      "tries",
      "string-hashing",
      "kmp-algorithm",
      "bitmasking",
      "fenwick-tree",
      "segment-tree",
      "modular-arithmetic",
      "combinatorics",
      "computational-geometry",
      "randomized-algorithms",
    ],
    questionDifficultyMix: {
      Easy: 0.2,
      Medium: 0.55,
      Hard: 0.25,
    },
    unlockRule: {
      minimumTopicProgress: 0.8,
      minimumEasyAccuracy: 0.75,
      minimumQuestionsCompleted: 10,
    },
  },
};

// ============================================================
// ROADMAP GENERATION
// ============================================================

export function generateRoadmap({
  career = "software_developer",
  pace = "steady",
  level = "beginner",
} = {}) {
  const normalizedCareer = CAREER_ALIASES[career] || career;
  const paceConfig = PACE_SETTINGS[pace] || PACE_SETTINGS.steady;
  const levelConfig = LEVEL_SETTINGS[level] || LEVEL_SETTINGS.beginner;

  const careerTopics =
    CAREER_PRIORITY[normalizedCareer] || SOFTWARE_DEVELOPER_ROADMAP;
  const startTopics = levelConfig.startTopics || [];

  const orderedTopics = [
    ...new Set([
      ...startTopics,
      ...careerTopics,
    ]),
  ];

  const weeks = [];

  for (
    let index = 0;
    index < orderedTopics.length;
    index += paceConfig.topicsPerWeek
  ) {
    const weeklyTopics = orderedTopics.slice(
      index,
      index + paceConfig.topicsPerWeek
    );

    const weekNumber =
      Math.floor(index / paceConfig.topicsPerWeek) + 1;

    weeks.push({
      week: weekNumber,
      topics: weeklyTopics,

      studyPlan: {
        hours: paceConfig.hoursPerWeek,
        sessions: paceConfig.sessionsPerWeek,
        sessionMinutes: paceConfig.sessionMinutes,
        conceptSessions: paceConfig.lessonsPerTopic,
        revisionSessions: paceConfig.revisionSessionsPerWeek,
        practiceQuestions: paceConfig.questionsPerWeek,
        difficultyMix: levelConfig.questionDifficultyMix,
        easyQuestionsPerTopic: paceConfig.easyQuestionsPerTopic,
        mediumQuestionsPerTopic: paceConfig.mediumQuestionsPerTopic,
        hardQuestionsPerTopic: paceConfig.hardQuestionsPerTopic,
      },

      goals: [
        `Learn: ${weeklyTopics.join(", ")}`,
        `Complete about ${paceConfig.questionsPerWeek} practice questions`,
        "Review incorrect solutions and try them again without hints",
        "Complete one timed practice session",
      ],
    });
  }

  return {
    career: normalizedCareer,
    pace,
    level,
    paceDetails: paceConfig,
    totalWeeks: weeks.length,
    totalMonths: Math.ceil(weeks.length / 4),
    weeklyRoadmap: weeks,
  };
}

// ============================================================
// ADAPTIVE STUDY RECOMMENDATIONS
// ============================================================

export function getRecommendedAdjustment({
  accuracy = 0,
  completedQuestions = 0,
  hintsUsed = 0,
} = {}) {
  if (accuracy < 0.5 || completedQuestions < 4) {
    return {
      action: "slow_down",
      message:
        "Repeat the current topic with easier questions, more examples, and revision before unlocking the next topic.",
      extraPracticeQuestions: 5,
      recommendVideo: true,
      recommendHintMode: "detailed",
    };
  }

  if (accuracy < 0.7) {
    return {
      action: "continue_with_revision",
      message:
        "Continue to the next topic, but schedule a revision session and retry incorrect questions.",
      extraPracticeQuestions: 3,
      recommendVideo: false,
      recommendHintMode: "standard",
    };
  }

  if (accuracy >= 0.85 && hintsUsed <= 5) {
    return {
      action: "speed_up",
      message:
        "The learner is ready for a harder question or an additional topic this week.",
      extraPracticeQuestions: 2,
      recommendVideo: false,
      recommendHintMode: "concise",
    };
  }

  return {
    action: "continue",
    message:
      "Continue with the planned roadmap and complete the scheduled revision.",
    extraPracticeQuestions: 0,
    recommendVideo: false,
    recommendHintMode: "standard",
  };
}

// ============================================================
// VALIDATION HELPERS
// ============================================================

export function validateCatalog() {
  const masterSet = new Set(DSA_MASTER_TOPICS);
  const duplicateMasterTopics =
    DSA_MASTER_TOPICS.filter(
      (topic, index) => DSA_MASTER_TOPICS.indexOf(topic) !== index
    );

  const invalidCareerTopics = Object.fromEntries(
    Object.entries(CAREER_PRIORITY).map(([career, topics]) => [
      career,
      topics.filter((topic) => !masterSet.has(topic)),
    ])
  );

  const invalidLevelTopics = Object.fromEntries(
    Object.entries(LEVEL_SETTINGS).map(([level, config]) => [
      level,
      config.startTopics.filter((topic) => !masterSet.has(topic)),
    ])
  );

  return {
    valid:
      duplicateMasterTopics.length === 0 &&
      Object.values(invalidCareerTopics).every((topics) => topics.length === 0) &&
      Object.values(invalidLevelTopics).every((topics) => topics.length === 0),

    totalMasterTopics: DSA_MASTER_TOPICS.length,
    detailedTopics: TOPICS.length,
    topicsWithoutDetailedContent: TOPICS_WITH_CONTENT_STATUS.filter(
      (item) => !item.hasDetailedContent
    ).map((item) => item.slug),

    duplicateMasterTopics,
    invalidCareerTopics,
    invalidLevelTopics,
  };
}
