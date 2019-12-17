/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// max = max depth of left + max depth of right
var diameterOfBinaryTree = function(root) {
  let max = 0;
  dfs(root);
  return max;
  function dfs(root) {
    if(root === null) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  }
};