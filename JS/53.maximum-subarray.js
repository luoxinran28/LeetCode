/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// DP: https://www.youtube.com/watch?time_continue=178&v=2MmGzdiKR9Y
var maxSubArray = function(nums) {
  let len = nums.length;
  let prefix_sum = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prefix_sum = Math.max(nums[i] + prefix_sum, nums[i]);
    max = Math.max(max, prefix_sum); // Record the max value from the sum of previous  numbers.
  }
  return max;
};
