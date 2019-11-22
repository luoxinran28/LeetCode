/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
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
var convertBST = function(root) {
  let sum = 0;
  traverse(root);
  return root;

  function traverse(root) {
    if (root === null) return;
    traverse(root.right);
    sum += root.val;
    root.val = sum;
    traverse(root.left);
  }
};
// @lc code=end
