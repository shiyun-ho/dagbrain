# Graph Notes

## Objective

The goal of this section is to detail the thought and learning process as I read up more about Graphs, and in particular, Directed Acyclic Graphs (DAGs), which will be immensely helpful in the implementation of task management and planner tool. 

---

## Learning Notes

> Understanding Graphs, in general, to understand how DAGs work within the greater context as a Data Structure. 

---

## Graph

Reference: [Algorithm Design](https://www.amazon.sg/Algorithm-Design-Kleinberg-Jon/dp/9332518645)

- Graph (G): A way of encoding pairwise relationship among a set of objects.
- G = ( V, E ), where V represents collection of nodes, and E represents a collection of edges.

### Principles:
- Each edge connects two nodes.
    - Undirected graphs
        - Edge is thus defined as a set of two nodes: e = { u, v }
    - Directed graphs:
        - Directed edge is an ordered pair:
            e' = ( u, v ) 

### How do we define a path in an undirected graph?
- A path in an undirected graph, G, can be defined as a sequence P of nodes (v1, v2, ...., vk-1, vk)
- Each consecutive pair (i.e. vi, vi+1) is joined by an edge in the graph

---

## Algorithms for searching graph/tree data structure

Reference: [Depth-first Search](https://brilliant.org/wiki/depth-first-search-dfs/)

### Basic Steps to perform Depth-First Search:
1. Visit vertex `s`.
2. Mark `s` as visited.
3. Recursively visit each unvisited vertex attached to `s`.

### Pseudocode 
My Thoughts:
```
1. Locate vertex `s`.
    If `s` exists: 
        # Here you mark root node to be visited
        Mark `s` as visited
    Else:
        Throw error

2. Iteratively visit each unvisited vertex attached to `s`: 
    If child element of `s` exist:
        Mark as visited
    Else:
        Visit sibling vertex

```

Pseudocode
```
Intialise an empty stack for storage of nodes, `S`.
For each vertex `u`:
    Define `u.visited` to be false
Push root node (first node visited) onto `S`.
While stack `S` is not empty:
    Pop first element, `u`, in S.
    Mark first element, `u`, to be true. 
    If `u.visited` = false, then:
        `u.visited` = true
        For each unvisited neighbour `w` of `u`:
            Push `w` into Stack `S`
End process when all nodes have been visited. 
```

--- 

## Implementing Recursive DFS algorithm for Cycle Detection

### Function Prototype
```ts
private hasCycleDFS(
    node: ft_Node<T>,
    visited: Set<number>,
    recursionStack: Set<number>
): boolean
```

### Pseudocode
```markdown
if node has been visited:
    return; # No need to re-traverse
else:
    Mark node as visited
    Add node to current recursion path
for each neighbor of current node:
    call hasCycleDFS() recursively on neighbour:
        if recursive call returns true:
            Propogate `true` up
            Cycle found
After all neighbors explored:
    Remove node from recursion path
    Return `false`
```

---
## Implementing Topological Sort

### Concepts

Reference: [Topological Sort of Directed Acyclic Graph](https://www.baeldung.com/cs/dag-topological-sort)

- A topological sort of a DAG is a linear ordering of all its vertices such that if it contains an edge (u, v), then u appears before v in the ordering. 
- For a DAG, we can construct a topological sort with running time linear to the number of vertices plus the number of edges, which is O(V+E).

### Kahn's Algorithm
- In a DAG, any path between two vertices has a finite length as the graph does not contain a cycle. 
- Let P be the longest path of u (source vertex) to v (destination vertex).
- Since P is the longest path, there can be no incoming edge to u.
- <b>Therefore</b>, a DAG contains <b>at least one vertext that has <u>no incoming edge</u></b>.

### Pseudocode for Kahn's Algorithm
- A topological sort on a DAG can be constructed by finding vertices that have no incoming edges:

```markdown
algorithm KahnsAlgorithm(G):
    /**
    * @input: G = A Directed Acyclic Graph (DAG)
    * @output: L = A topological sort of all vertices in G
    **/

    Compute in-degree for each vertex in G
    Initialise a queue Q with all vertices of in-degree 0

    Initialise an empty vertex list L

    while Q is not empty:
        u <- remove a vertex from Q
        add u to the end of L
        for each neighbouring node v of u:
            decrease the in-degree of v by 1
            if the in-degree of v is 0:
                add v to Q
    
    return L
```

- Time Complexity: O(V+E) for in-degree calculations


### Pseudocode for DFS
```markdown 
algorithm DFSTopologicalSort(G):
    /**
    * @input: G = A Directed Acyclic Graph (DAG)
    * @output: L = A topological sort of all vertices in G
    **/

    L <- initalise an empty vertext list
    visited <- initialialise an array to false for each vertex

    for each vertex u in G:
        if not visited[u]:
            topologicalSortRecursive(u)
    
    return L

function topologicalSortRecursive(u):
    visited[u] = true
    for each neighbouring vertex v of u:
        if not visited[u]:
            topologicalSortRecursive(v)
    add u to the front of L
```




