/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let l = nums.length;
  if (l === 0) return 0;
  if (l === 1) return nums[0];
  let dp = Array.from({ length: l }).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < l; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[l - 1];
};
