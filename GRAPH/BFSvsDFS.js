
// this graph is represented by an adjacency list not a node class. 
const graph = {
    a: ["c", "b"],
    b: ["d"],
    c: ["e"],
    d: ['f'],
    e: [],
    f: []
};

depthFirstPrint = (graph, source) => {
    const stack = [source];
    while (stack.length > 0) {
        let current = stack.pop();
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}

depthFirstRecursion = (graph, source) => {
    console.log(source);
    for (let neighbor of graph[source]) {
        depthFirstRecursion(graph, neighbor)
    }
}

depthFirstPrint(graph, 'a')
console.log("\n", "break \n")
depthFirstRecursion(graph, 'a')
console.log("\n", "break \n")

breathFirst = (graph, source) => {
    const queue = [source];
    // use push and pop 

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current)

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }

    }
}

console.log("breath first")
breathFirst(graph, 'a')
console.log("\n", "break \n")
