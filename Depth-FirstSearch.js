// DFS implementation using recursion
function depthFirstSearch(graph, start, visited = new Set()) {
    // Mark the current node as visited
    visited.add(start);
    console.log(start); // Output the node (or perform any other operation)

    // Visit all the neighbors of the current node
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            depthFirstSearch(graph, neighbor, visited);
        }
    }
}

// Example usage:
const graph = {
    0: [1, 3],
    1: [0, 2],
    2: [1],
    3: [0, 4],
    4: [3]
};

depthFirstSearch(graph, 0);
