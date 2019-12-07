/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  let graph = createGraph(equations, values, queries);
  let res = [];
  for(let i = 0; i < queries.length; i++) {
    let x = queries[i][0];
    let y = queries[i][1];
    let k = values[i];
    if(!graph.has(x) || !graph.has(y)) res.push(-1);
    else res.push(dfs(x, y, graph, new Set()));
  }
  return res;
  
  function dfs(x, y, graph, v) {
    if(x === y) return 1;
    let nbors = graph.get(x).keys();
    v.add(x);
    for(let n of nbors) {
      if(v.has(n)) continue;
      let d = dfs(n, y, graph, v);
      if(d !== -1) return d * graph.get(x).get(n);
    }
    return -1;
  }
  
  function createGraph(equations, values, queries) {
    let graph = new Map();
    for(let i = 0; i < equations.length; i++) {
      let x = equations[i][0];
      let y = equations[i][1];
      let v = values[i];
      if(!graph.has(x)) {
         graph.set(x, new Map());
      }
      if(!graph.has(y)) {
         graph.set(y, new Map());
      }
      graph.get(x).set(y, v);
      graph.get(y).set(x, 1 / v);
    }
    console.log(graph);
    return graph;
  }
};