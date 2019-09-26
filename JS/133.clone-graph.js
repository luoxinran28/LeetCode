/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */

// BFS
var cloneGraph = function(node) {
  if (!node) return null;
  let res;
  let queue = [node];
  let map = new Map();
  map.set(node, new Node(node.val, []));
  while (queue.length > 0) {
    let now = queue.shift();
    for (let neighbor of now.neighbors) {
      if (!map.has(neighbor)) {
        map.set(neighbor, new Node(neighbor.val, []));
        queue.push(neighbor);
      }
      map.get(now).neighbors.push(map.get(neighbor));
    }
  }
  return map.get(node);
};

// DFS
var cloneGraph = function(node) {
  let map = new Map();
  function dfs(node) {
    if (node === null) return;
    if (!map.has(node)) {
      let now = new Node(node.val, []);
      map.set(node, now);
      // for(let neighbor of node.neighbors) {
      //   now.neighbors.push(dfs(neighbor));
      // }
      now.neighbors = node.neighbors.map(neighbor => dfs(neighbor));
    }
    return map.get(node);
  }
  return dfs(node);
};
