/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let res ;
    let min = Number.MAX_VALUE;
    dfs(root);
    function dfs(root) {
      if(root === null) return;
      dfs(root.left);
      if(root.val - target < min) {
        res = root.val;
        min = Math.abs(root.val - target);
      }
      dfs(root.right);
    }
    return res;
  };