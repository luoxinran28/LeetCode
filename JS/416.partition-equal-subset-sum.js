/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// dp[i][j] = dp[i-1][j-nums[i-1]] || dp[i-1][j];
var canPartition = function(nums) {
  let len = nums.length;
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  if (sum % 2 === 1) return false;
  sum = sum / 2;
  let dp = Array.from({ length: 2 }, () =>
    Array.from({ length: sum + 1 }).fill(false)
  );
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = true;
  }
  for (let i = 1; i < len + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      if (j - nums[i - 1] < 0) {
        dp[i % 2][j] = dp[(i - 1) % 2][j];
      } else {
        dp[i % 2][j] = dp[(i - 1) % 2][j - nums[i - 1]] || dp[(i - 1) % 2][j];
      }
    }
  }
  return dp[1][sum];
};
// @lc code=end
