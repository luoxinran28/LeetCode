/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let map = new Set();

  function dfs(root, k) {
    if (!root) return false;
    let newTarget = k - root.val;
    if (map.has(newTarget)) {
      return true;
    } else {
      map.add(root.val);
    }
    return dfs(root.left, k) || dfs(root.right, k);
  }
  return dfs(root, k);
};
