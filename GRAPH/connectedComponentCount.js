const connectedComponentsCount = (graph) => {

    let count = 0;
    let visited = new Set()
    // note sets will store numbers an Strings as keys. 
    for (let node in graph) {
        // 
        if (traverse(graph, node, visited) ===true) {
            count++;
        }
    }


    return count;

}

const traverse = (graph, current, visited)=>{
    // if we allready have visited this node return false
    if (visited.has(String(current))) {
        return false;
    }

    visited.add(String(current))
    for (let neighbors of graph[current]) {
        traverse(graph, neighbors, visited)
    }

    return true;
};


console.log(connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
})); // -> 2)

console.log(connectedComponentsCount({
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
})); // -> 3