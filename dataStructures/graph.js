// Graph Implementation using Adjacency List
// Undirected graph!
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        )
    }

    removeVertex(vertex) {
        let vertices = this.adjacencyList[vertex];
        while(vertices.length) {
            const vertex2 = vertices.pop();
            this.removeEdge(vertex, vertex2)
        }
        delete this.adjacencyList[vertex];
    }
}

module.exports = Graph;