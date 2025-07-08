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
        // TODO: Check if edge would not result in cycle
        if (hasCycleDFS(source, ?, ?, ?)){
            return false;   
        }
        else {
            return true;
        }
    }

    // TODO: Implement, using DFS, to detect cycles. This ensures graph remains acylic
    private hasCycleDFS(startNode: ft_Node<T>, visited: Set<number>, recursionStack: Set<number>): boolean {
        return false;
    }
}