
//depth first implementation. 
const hashPath = (graph, src, dst) => {
    if (src === dst) {
        return true
    }
    console.log(src, 'depth first')
    for ( let neighbor of graph[src]) {
       
        if (hashPath(graph,neighbor, dst) === true) {
            return true;
        }
    }
    return false;
}

const graph = {
    a: ["c", "b"],
    b: ["d"],
    c: ["e"],
    d: ['f'],
    e: [],
    f: []
};

console.log(hashPath(graph,'a','f'),"\n")

// breath first cannot be done iterivly 
// use a queue data strucure. '

bfsHasPath= (graph, src, dst) => {
    const queue = [src]

    while (queue.length > 0) {
       const currentNode = queue.shift()
       console.log(currentNode,"bfs")
       if (currentNode === dst){
           return true;
       }
       for (let neighbor of graph[currentNode]) {
           queue.push(neighbor)
       }
    }
  return false;
}

console.log(bfsHasPath(graph,'a','f'))