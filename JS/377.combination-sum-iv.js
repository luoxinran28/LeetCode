/*
 * @lc app=leetcode id=377 lang=javascript
 *
 * [377] Combination Sum IV
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var combinationSum4 = function(nums, target) {
//   let dp = Array.from({length:target + 1}).fill(-1);
//   dp[0] = 1;
//   dfs(target);
//   function dfs(target) {
//     if(dp[target] != -1) return dp[target];
//     if(target === 0) {
//       return 1;
//     }
//     let res = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if(target >= nums[i]) {
//         res += dfs(target - nums[i]);
//       }
//     }
//     dp[target] = res;
//     return res;
//   }
//   return dp[target];
// };

var combinationSum4 = function(nums, target) {
  let dp = Array.from({ length: target + 1 }).fill(0);
  dp[0] = 1;
  for (let i = 1; i < dp.length; i++) {
    // console.log("target: "+i);
    for (let j = 0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        dp[i] += dp[i - nums[j]]; // number of current target = number of current target - current number
        // console.log("current: "+dp[i]+" prev: "+dp[i-nums[j]]);
      }
    }
  }
  return dp[target];
};
