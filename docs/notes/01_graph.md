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




