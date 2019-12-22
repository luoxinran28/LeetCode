/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

var rangeSumBST = function(root, L, R) {
  let res = 0;
  dfs(root);
  function dfs(root) {
    if(root === null) return;
    dfs(root.left);
    if(L <= root.val && root.val <= R) {
      res += root.val;
    }
    dfs(root.right);
  }
  return res;
};