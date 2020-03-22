/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  
  return dfs(root);
  
  function dfs(root) {
    if(root === null) return null;
    let left = dfs(root.left);
    let right = dfs(root.right);
    
    root.right = left;
    root.left = right;
    
    return root;
  }
};
// @lc code=end

