/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// Find the maximum of the array. The left subarray builds the left tree based on the maximum too
var constructMaximumBinaryTree = function(nums) {
  return dfs(nums, 0, nums.length - 1);
  function dfs(nums, start, end) {
    if (start > end) return null;
    // Find maximum
    let max_i = start;
    let i = start;
    while (i <= end) {
      max_i = nums[i] > nums[max_i] ? i : max_i;
      i++;
    }
    let root = new TreeNode(nums[max_i]);
    root.left = dfs(nums, start, max_i - 1);
    root.right = dfs(nums, max_i + 1, end);
    return root;
  }
};
