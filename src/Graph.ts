class ft_Node<T> {
  static idCounter = 0;
  id: number;
  data: T;
  neighbours: Set<ft_Node<T>>;

  constructor(data: T) {
    this.id = ft_Node.idCounter++;
    this.data = data;
    this.neighbours = new Set<ft_Node<T>>();
  }
}

class directedAcyclicGraph<T> {
  private nodes: Map<number, ft_Node<T>>;

  constructor() {
    this.nodes = new Map();
  }

  addNode(data: T): ft_Node<T> {
    const nodeToAdd = new ft_Node(data);
    this.nodes.set(nodeToAdd.id, nodeToAdd);

    return nodeToAdd;
  }

  removeNode(id: number): boolean {
    const nodeToRemove = this.nodes.get(id);
    if (!nodeToRemove) return false;

    for (const [_, node] of this.nodes) {
      if (node.neighbours.has(nodeToRemove)) {
        node.neighbours.delete(nodeToRemove);
      }
    }
    this.nodes.delete(id);
    return true;
  }

  addEdge(source: ft_Node<T>, target: ft_Node<T>): boolean {
    const visited = new Set<number>;
    const recursionStack = new Set<number>;

    if (this.hasCycleDFS(source, visited, recursionStack)) {
      return false;
    }

    source.neighbours.add(target);
    return true;
  }

  removeEdge(source: ft_Node<T>, target: ft_Node<T>): boolean {
    if (!this.nodes.has(source.id) || !this.nodes.has(target.id)) {
      return false;
    }
    if (!source.neighbours.has(target)) {
      return false;
    }

    source.neighbours.delete(target);
    return true;
  }

  private hasCycleDFS(startNode: ft_Node<T>, visited: Set<number>, recursionStack: Set<number>): boolean {
    let startNodeId = startNode.id;

    if (!visited.has(startNodeId)) {
      visited.add(startNodeId);
      recursionStack.add(startNodeId);

      for (const neighbour of startNode.neighbours) {
        if (!visited.has(neighbour.id)) {
          if (this.hasCycleDFS(neighbour, visited, recursionStack)) {
            return true;
          }
        }
        else {
          if (recursionStack.has(neighbour.id)) {
            return true;
          }
        }
      }

      recursionStack.delete(startNodeId);
    }
    return false;
  }

  hasCycle(): boolean {
    const visited = new Set<number>;
    const recursionStack = new Set<number>;

    for (const [_, node] of this.nodes) {
      if (!visited.has(node.id)) {
        if (this.hasCycleDFS(node, visited, recursionStack)) {
          return true;
        }
      }
    }
    return false;
  }

  // TODO: Implement topological sort
  // TODO: Modify DFS to record post-order traversal -> reverse it
  topologicalSortByDFS(): void {

  }

  // TODO: Use Kahn's algorithm with in-degree tracking
  topologicalSortByKahnAlgo(): void {

  }

  printGraph(): void {
    for (const [i, node] of this.nodes) {
      const neighbourIds = [...node.neighbours].map(n => n.id);
      console.log(`Node ${i} -> [${neighbourIds}]`);
    }
  }

  serialize(): string {
    const serializedGraph: { [key: number]: number[] } = [];

    for (const [id, node] of this.nodes) {
      const neighbourIds = [...node.neighbours].map(n => n.id);
      serializedGraph[id] = neighbourIds;
    }

    return JSON.stringify(serializedGraph, null, 2);
  }

}
