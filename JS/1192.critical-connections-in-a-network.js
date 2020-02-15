/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
// An edge is a critical connection, if and only if it is not in a cycle.
// 主要是判断图里面有没有环，把图里面所有的环的去掉就是答案了。通过dfs遍历，每次到一个节点
// 就会有一个深度，从起点0开始依次加1，用一个rank数组记录现在的深度，但起点的rank是MAX_VALUE，
// 如果有环的话，就是当前路径最小rank小于等于当前节点的rank，
// dfs每次都返回最小深度来记录当前路径的最小深度。
var criticalConnections = function(n, connections) {
  
  let graph = buildGraph(n, connections);
  let rank = [...Array(n)].fill(Number.MAX_VALUE);
  let res = [];
  dfs(graph, 0, null, 0, rank);
  return res;
  
  function dfs(graph, cur, pre, depth, rank) {
    if(rank[cur] < Number.MAX_VALUE) {
      return rank[cur];
    }
    rank[cur] = depth; // current depth
    let min = depth;
    for(let nbor of graph[cur]) {
      if(pre === nbor) continue;
      let ret_depth = dfs(graph, nbor, cur, depth + 1, rank); // Go to neighbors
      if(ret_depth <= depth) {
        graph[cur].delete(nbor);
        graph[nbor].delete(cur);
      } else {
        res.push([cur, nbor]);
      }
      min = Math.min(min, ret_depth);
    }
    return min;
  }
  
  function buildGraph(n, connections) {
    let graph = [...Array(n)].map(e => new Set());
    for(let [i, j] of connections) {
      graph[i].add(j);
      graph[j].add(i);
    }
    return graph;
  }
  
};