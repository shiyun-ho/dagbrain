# Design Docs: Pseudocode and Implementation Details

## Objective

This section details the thought process, pseudocode, edge cases and thinking behind implementation of DAGs. 

---

## Feature List

This details the features to implement, scaffolding the feature changes end-to-end. 

1. [ ] Implement Directed Acyclic Graph. 

    These are the requirements:

    [ ] Ensure membership of node(s)
    [ ] Ensure membership of edge(s)
    [ ] Ensure edge connection between nodes is directed edge
        - i.e. A → B ≠ B → A
    [ ] Ensure that the directed graph has no cycles (i.e. acyclic)
        - Must detect and reject anyoperation that introduces a cycle
