# 🕸️ Algorithms Project: **dagbrain**

## 🧠 Objective

You are going to implement the brain behind intelligent, dependency-aware systems. Your mission: build a Directed Acyclic Graph (DAG) engine entirely from scratch in **TypeScript**, without using any external graph libraries.

This project will act as the core foundation for a smart task scheduler, inspired by tools like [Motion](https://usemotion.com/), [Notion AI](https://www.notion.so/product/ai), and even systems like `make` or GitHub Actions. But here, you start at the root — the **data structure** and its rules.

You'll not only learn DAGs deeply, you'll also build it in a way that’s modular, reusable, and extensible for future AI-backed features.

---

## 🗃️ Project Name

> **dagbrain** — A core graph engine designed to model dependency trees, pipelines, and smart scheduling logic. No cycles allowed.

---

## 📌 Context

Directed Acyclic Graphs power real-world workflows:

* Job schedulers & workflow runners
* Task dependencies in project management
* CI/CD pipelines
* Course prerequisites (yes, even school)
* AI-enhanced calendar and priority tools (like Motion)

Before AI can plan your day, you must teach it how dependencies work. This is where your journey begins.

---

## 🧱 Mandatory Interfaces

Your main class should be exported as `Graph` and live in `src/Graph.ts`. It must support:

### `add_node(label: string): void`

Adds a new node (task/event/step) to the graph.

* If the node already exists, no action is taken.

### `add_edge(from: string, to: string, weight: number): void`

Creates a **directed** edge from `from` → `to` with a given weight.

* Must **prevent cycles**: check if adding this edge would create a cycle.
* If it does, throw an error.
* Weights must be > 0

### `get_neighbours(label: string): [string, number][]`

Returns the outgoing neighbors of the given node with weights.

### `find_shortest_path(from: string, to: string): string[]`

Find the shortest path from `from` to `to` using DAG-based shortest path algorithm.

* Implement topological sort
* All weights assumed to be > 0

---

## ⚠️ Constraints

* Your graph must remain a **DAG** (no cycles)
* Nodes are identified by unique **string labels**
* You may throw errors for invalid operations (e.g., non-existent nodes, cycle detection)
* No external graph libraries (e.g., Graphlib, D3, etc.)

---

## ✨ Bonus Features (Stretch Goals)

Push your project beyond the basics with these optional challenges:

* [ ] `remove_node(label: string)` — Remove a node and all its connected edges. Ensure integrity is maintained.
* [ ] `remove_edge(from: string, to: string)` — Allow edge deletion without breaking existing graph rules.
* [ ] **Import/Export DAG to/from `.json`** — Serialize your graph and reconstruct it from a saved file.
* [ ] **Graph CLI Tool** — Build a command-line interface (using Node or Bun) to add/view/delete nodes and edges.
* [ ] **ASCII or Graphviz Visualization** — Output a visual graph representation of the current DAG.
* [ ] `find_all_zero_indegree()` — Return all nodes that can be executed immediately (like a scheduler).
* [ ] **Tagged Nodes** — Group nodes by project/module/tag. Bonus: add filters by tag.
* [ ] `find_all_paths(from, to)` — Return all acyclic paths between two nodes (useful for visualization/planning).
* [ ] **Priority-aware Scheduling** — Use weight + metadata (urgency, focus level) to simulate a productivity assistant.
* [ ] **Humanized Report Generator** — Output readable summaries like:

  > "Task A must be completed before Task B (2h), followed by Task C (3h). Total time: 5h."

---

## 🧪 Example

```ts
const dag = new Graph();
dag.add_node("A");
dag.add_node("B");
dag.add_edge("A", "B", 2);
dag.add_edge("B", "C", 3);

console.log(dag.get_neighbours("B"));
// Output: [["C", 3]]

console.log(dag.find_shortest_path("A", "C"));
// Output: ["A", "B", "C"]

dag.add_edge("C", "A", 1);
// Throws Error: Adding this edge would introduce a cycle
```

---

## 🧠 Real World Mapping

* Nodes → tasks, jobs, commands, topics
* Edges → dependencies, preconditions, outputs
* Weight → cost, duration, priority

This project mimics task managers, job runners, build systems, or knowledge graphs — anything where order and dependencies matter.

---

## 📚 Learning Resources

> These are **not optional**. Study them before implementation:

* [GeeksForGeeks: Topological Sorting](https://www.geeksforgeeks.org/topological-sorting/)
* [GFG: Detect Cycle in a Directed Graph](https://www.geeksforgeeks.org/detect-cycle-in-a-directed-graph/)
* [GFG: Shortest Path in DAG](https://www.geeksforgeeks.org/shortest-path-for-directed-acyclic-graphs/)
* [YouTube: DAG Explained Visually](https://www.youtube.com/watch?v=ddTC4Zovtbc)
* [The Case for DAGs – Dagster Blog](https://dagster.io/blog/dags)

---

## 📦 Suggested Folder Structure

```
dagbrain/
├── src/
│   └── Graph.ts         # Core implementation of DAG engine
├── docs/
│   ├── subject.md       # The assignment instructions (copied here)
│   └── design.md        # Your thinking process, architecture decisions, diagrams
├── tests/
│   └── Graph.test.ts    # Jest or Vitest test suite
├── examples/
│   └── demo.ts          # Example usage of your DAG engine
├── ASSIGNMENT.md        # Original markdown assignment file (optional symlink)
├── README.md            # Overview, installation, usage, etc.
├── tsconfig.json
├── package.json
├── .gitignore
└── .eslintrc.cjs        # Optional: Linting config
```

---

## ✅ Evaluation Criteria

| Category           | Requirements                                            |
| ------------------ | ------------------------------------------------------- |
| 🚫 Cycle Detection | Prevent all cyclic edges using DFS or similar algorithm |
| 📐 Correctness     | All core methods work on acyclic graphs                 |
| 💾 Code Structure  | Organized, modular, readable TypeScript                 |
| 📘 Docs            | Inline comments + clear README                          |
| 🧪 Testing         | Edge cases, invalid ops, and happy path tested          |
| 🧠 Bonus           | Extra features or CLI gets bonus points                 |

---

## 🧠 What Comes Next?

If you complete this:

* You’ll have a powerful DAG engine you can use as a library
* You’ll be ready to build the **AI-powered task manager** you originally envisioned
* You’ll understand graphs better than most frontend devs ever will 😎

---

## ✏️ Credits

Inspired by conversations with a friend, Matt Tycock’s challenge pedagogy, and 42 project design.

Project written with ❤️ by Shiyun + ChatGPT

---
