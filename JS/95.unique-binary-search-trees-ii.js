/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if(n < 1) return [];
  let visited = [...Array(n+1)].map(r => Array(n+1));
  return dfs(1, n);
  function dfs(start, end) {
    let res = [];
    if(start > end) {
      res.push(null);
      return res;
    }
    if(visited[start][end]) return visited[start][end];
    for(let i = start; i <= end; i++) {
      let left = dfs(start, i - 1);
      let right = dfs(i + 1, end);
      
      for(let l of left) {
        for(let r of right) {
          let root = new TreeNode(i);
          root.left = l;
          root.right = r;
          res.push(root);
        }
      }
    }
    visited[start][end] = res;
    return res;
  }
};