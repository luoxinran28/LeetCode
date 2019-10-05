/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let res = [];
  dfs(root, sum, []);
  function dfs(root, sum, sol) {
    if (!root) return;
    sol.push(root.val);
    if (!root.left && !root.right && sum === root.val) {
      res.push(sol.slice());
    }
    dfs(root.left, sum - root.val, sol);
    dfs(root.right, sum - root.val, sol);
    sol.pop();
  }
  return res;
};
