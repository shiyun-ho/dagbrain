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
        // TODO: Remove its edges from other nodes
        this.nodes.delete(id);
        return true;
    }

    addEdge(source: ft_Node<T>, target: ft_Node<T>): boolean {
        const visited = new Set<number>;
        const recursionStack = new Set<number>;

        if (this.hasCycleDFS(source, visited, recursionStack)){
            return false;   
        }
    
        source.neighbours.add(target);
        return true;
    }

    private hasCycleDFS(startNode: ft_Node<T>, visited: Set<number>, recursionStack: Set<number>): boolean {
        let startNodeId = startNode.id;
    
        if (!visited.has(startNodeId)){
            visited.add(startNodeId);
            recursionStack.add(startNodeId);

            for (const neighbour of startNode.neighbours) {
                if (!visited.has(neighbour.id)){
                    if(this.hasCycleDFS(neighbour, visited, recursionStack)) {
                        return true;
                    }
                }
                else {
                    if (recursionStack.has(neighbour.id)){
                        return true;
                    }
                }
            }

            recursionStack.delete(startNodeId);
        }
        return false;
    }

}