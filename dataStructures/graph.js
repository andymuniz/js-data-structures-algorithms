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

    DFSRecursive(start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex)
            for(let neighbor of adjacencyList[vertex]){
                if(!visited[neighbor]){
                    dfs(neighbor)
                }
            }
        })(start)
        return result;
    }

    DFSIterative(start) {
        let stack = [start];
        let result = [];
        let visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop()
            result.push(currentVertex);

            for(let neighbor of this.adjacencyList[currentVertex]) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            }
        }
        return result;
    }

    BFS(start) {
        let queue = [start];
        let result = []
        let visited = {}
        let currentVertex

        visited[start] = true;
        while(queue.length) {
            currentVertex = queue.shift()
            result.push(currentVertex);
            for(let neighbor of this.adjacencyList[currentVertex]) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }
}

module.exports = Graph;