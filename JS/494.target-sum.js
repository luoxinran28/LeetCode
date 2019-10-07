/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// // DFS:
// var findTargetSumWays = function(nums, S) {
//   if(!nums.length) return 0;
//   function dfs(nums, start, S, preVal) {
//     if(start === nums.length) {
//       if(preVal === S) {
//         return 1;
//       }
//       return 0;
//     }
//     let left = dfs(nums, start+1, S, preVal-nums[start]);
//     let right = dfs(nums, start+1, S, preVal+nums[start]);
//     return left + right;
//   }
//   return dfs(nums, 1, S, nums[0]) + dfs(nums, 1, S, -nums[0]);
// };

// // DP: https://leetcode.com/problems/target-sum/discuss/97335/Short-Java-DP-Solution-with-Explanation
// var findTargetSumWays = function(nums, S) {
//   let sum = 0;
//   for(let num of nums) {
//     sum += num;
//   }
//   if (sum < S) return 0;
//   let maxArrSize = 2*sum + 1;
//   let dp = Array.from({length: maxArrSize}).fill(0);
//   dp[sum] = 1;
//   for(let num of nums) {
//     let tmp = Array.from({length: maxArrSize}).fill(0);
//     for(let i = num; i < maxArrSize - num; i++) {
//       if(dp[i] !== 0) {
//         // console.log("Next level at {i}: "+i+" num: "+num);
//         tmp[i + num] += dp[i];
//         tmp[i - num] += dp[i];
//       }
//     }
//     dp = tmp;
//   }
//   return dp[sum+S];
// };

var findTargetSumWays = function(nums, S) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  if (sum < S || (S + sum) % 2 !== 0) return 0;
  let target = (S + sum) / 2;
  // console.log("target: "+target);
  let dp = Array.from({ length: target + 1 }).fill(0);
  dp[0] = 1;
  // console.log(dp);
  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      if (dp[i - num] !== 0) {
        // console.log("Next level at {i}: "+i+" num: "+num);
        dp[i] += dp[i - num];
      }
    }
    // console.log(dp);
  }
  return dp[target];
};
