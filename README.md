# 🕸️ dagbrain — Directed Acyclic Graph (DAG) Engine in TypeScript

> A lightweight, extensible DAG engine built from scratch in TypeScript. Designed to model dependencies, pipelines, and smart scheduling logic without using external graph libraries.

This project is inspired by tools like [Motion](https://usemotion.com/) and [Notion AI](https://www.notion.so/product/ai), aiming to build the foundational logic for intelligent systems that manage tasks, workflows, or knowledge graphs with dependencies.

## 🧠 What Is It?

`dagbrain` is a **Directed Acyclic Graph (DAG)** engine written entirely in TypeScript. You can:

- Add nodes and edges
- Detect and prevent cycles
- Find shortest paths using topological sorting
- Extend it into a task scheduler, workflow runner, or dependency resolver

It’s perfect for:

- Smart task scheduling
- Build systems
- CI/CD pipelines
- Course prerequisite planners
- AI-powered productivity tools

---

## ✨ Features

- **Cycle Detection** — Prevents adding any edge that creates a cycle.
- **Topological Sorting** — Used internally for shortest path computation.
- **Shortest Path Algorithm** — For weighted DAGs.
- **Extensible Design** — Easily add features like node removal, JSON export/import, CLI tooling, and more.
- **No External Libraries** — Built entirely from scratch.

---

## 📦 Installation

```bash
npm install
```

Or clone the repo:

```bash
git clone https://github.com/your-username/dagbrain.git
cd dagbrain
npm install
```

---

## 🚀 Usage

### Basic Example

```ts
import { Graph } from './src/Graph';

const dag = new Graph();

dag.add_node('A');
dag.add_node('B');
dag.add_edge('A', 'B', 2);

console.log(dag.get_neighbours('A')); // [["B", 2]]

console.log(dag.find_shortest_path('A', 'B')); // ["A", "B"]
```

### Prevent Cycles

```ts
dag.add_edge('B', 'A', 1); // Throws: Adding this edge would introduce a cycle
```

---

## 🧪 Testing

We use **Jest** for unit testing.

```bash
npm run test
```

All core methods are tested, including:

- Adding duplicate nodes
- Adding cycle-inducing edges
- Shortest path logic
- Neighbors lookup
- Invalid operations

---

## 📁 Project Structure

```bash
dagbrain/
├── src/
│   └── Graph.ts           # Core DAG implementation
├── docs/
│   ├── subject.md         # Assignment instructions
│   └── design.md          # Architecture decisions & thought process
├── tests/
│   └── Graph.test.ts      # Jest-based unit tests
├── examples/
│   └── demo.ts            # Sample usage of the graph engine
├── README.md              # This file
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## 🛠️ Bonus Features (Work in Progress)

| Feature | Status |
|--------|--------|
| `remove_node(label)` | ❌ Not Implemented |
| `remove_edge(from, to)` | ❌ Not Implemented |
| Export/Import `.json` | ❌ Not Implemented |
| ASCII Visualization | ❌ Not Implemented |
| CLI Tool | ❌ Not Implemented |

---

## 🧮 Algorithms Used

### Algorithm 1

Description:

- **Time Complexity**:
- **Space Complexity**:

### Cycle Detection

Description:

- **Time Complexity**:
- **Space Complexity**:

### Shortest Path in DAG

Description:

- **Time Complexity:**

---

## 🧪 Example Output

```ts
const dag = new Graph();
dag.add_node("A");
dag.add_node("B");
dag.add_node("C");
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

## 📝 Documentation

- `docs/subject.md` – Full assignment text
- `docs/design.md` – Implementation notes, architecture decisions, and diagrams

---

## 🔬 Roadmap

- ✅ Project configuration setup for Documentation
- ❌  Implement core interfaces (`add_node`, `add_edge`, `get_neighbours`, `find_shortest_path`)
- ❌  Prevent cycles when adding edges
- ❌  Unit testing for all core functions
- ❌ Optional: Node and edge deletion
- ❌ Optional: JSON import/export
- ❌ Optional: CLI interface
- ❌ Optional: Visualization output (e.g., Graphviz or ASCII)
- ❌ Optional: Task scheduling extensions

---
