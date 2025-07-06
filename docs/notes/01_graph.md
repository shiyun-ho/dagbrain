# Graph Notes

## Objective

The goal of this section is to detail the thought and learning process as I read up more about Graphs, and in particular, Directed Acyclic Graphs (DAGs), which will be immensely helpful in the implementation of task management and planner tool. 

---

## Learning Notes

> Understanding Graphs, in general, to understand how DAGs work within the greater context as a Data Structure. 

Reference: [Algorithm Design](https://www.amazon.sg/Algorithm-Design-Kleinberg-Jon/dp/9332518645)

## Graph

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


