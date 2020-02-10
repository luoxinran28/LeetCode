/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(root === null) return true;
  return dfs(root.left, root.right);
  
  function dfs(left, right) {
    if(left === null || right === null) {
      return left === right;
    }
    if(left.val !== right.val) {
      return false;
    }
    return dfs(left.left, right.right) && dfs(left.right, right.left);
  }
};