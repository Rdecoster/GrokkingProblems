
//Write a function, undirectedPath, that takes in an array of edges for an undirected graph and 
//two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there 
//exists a path between nodeA and nodeB.



const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = constructGraph(edges)
  return hasPath(graph,nodeA,nodeB, new Set())
};

// traverses the graph 

hasPath = (graph, src, dst, visited) => {
  if  (src === dst) return true;
  if( visited.has(src)) return false;
  visited.add(src);

  for (let neighbor of graph[src]) {
    console.log(neighbor,"for in / of")
    if (hasPath(graph, neighbor, dst, visited) === true){
      return true
    }
  }
  return false
};

// converts edge list to an adjacentcy list. 
const constructGraph = (edges) => {
  let graph = {}

  for (let edge of edges) {
    const [a,b] = edge
    if (!(a in graph)){
      graph[a] = []
    }
    if (!(b in graph)) {
      graph[b] =[]
    }
    graph[a].push(b)
    graph[b].push(a)

  }
return graph
};

constructGraph(edges)


console.log(undirectedPath(edges,'i','l'))

console.log(undirectedPath(edges,'i','o'))