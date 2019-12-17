/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var rightSideView = function(root) {
//   let res = [];
//   dfs(root, res, 0);
//   return res;

//   function dfs(root, res, depth) {
//     if(root === null) return;
//     if(depth === res.length) res.push(root.val);
//     dfs(root.right, res, depth + 1);
//     dfs(root.left, res, depth + 1);
//   }
// };
var rightSideView = function(root) {
  if(root === null) return [];
  let res = [];
  let q = [root];
  
  while(q.length > 0) {
    let size = q.length;
    for(let i = 0; i < size; i++) {
      let cur = q.shift();
      if(i === size - 1) res.push(cur.val);
      if(cur.left !== null) q.push(cur.left);
      if(cur.right !== null) q.push(cur.right);
    }
  }
  return res;
};