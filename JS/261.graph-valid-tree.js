/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

// var validTree = function(n, edges) {
  
//   if(n - 1 !== edges.length) return false;
//   if(n === 0) return false;
//   let graph = createGraph(n, edges);
//   let q = [0];
//   let v = [0];
  
//   while(q.length > 0) {
//     let size = q.length;
//     for(let i = 0; i < size; i++) {
//       let cur = q.shift();
//       for(let neighbor of graph.get(cur)) {
//         if(v.includes(neighbor)) continue;
//         q.push(neighbor);
//         v.push(neighbor);
//       }
//     }
//   }
//   return v.length === n;
  
//   function createGraph(n, edges) {
//     let graph = new Map();
//     for(let i = 0; i < n; i++) {
//       graph.set(i, new Set());
//     }
//     for(let i = 0; i < edges.length; i++) {
//       graph.get(edges[i][0]).add(edges[i][1]);
//       graph.get(edges[i][1]).add(edges[i][0]);
//     }
//     return graph;
//   }
  
// };

var validTree = function(n, edges) {
  if(n - 1 !== edges.length) return false;
  let union_set = new UnionFindSet(n);
  for(let i = 0; i < edges.length; i++) {
    if(union_set.find(edges[i][0]) === union_set.find(edges[i][1])) {
      return false;
    }
    union_set.union(edges[i][0], edges[i][1]);
  }
  return true;
};

class UnionFindSet {
  constructor(n) {
    this.parents = [];
    this.ranks = [];
    for(let i = 0; i < n; i++) {
      this.parents[i] = i;
      this.ranks[i] = i;
    }
  }
  find(u) {
    while(u !== this.parents[u]) {
      this.parents[u] = this.parents[this.parents[u]];
      u = this.parents[u];
    }
    return u;
  }
  
  union(u, v) {
    let pu = this.find(u);
    let pv = this.find(v);
    if(pv === pu) return false;
    if(this.ranks[pu] < this.ranks[pv]) {
      this.parents[pu] = pv;
    } else if(this.ranks[pv] < this.ranks[pu]) {
      this.parents[pv] = pu;
    } else {
      this.parents[pv] = pv;
      this.ranks++;
    }
    return true;
  }
}