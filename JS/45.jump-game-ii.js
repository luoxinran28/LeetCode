/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// // DP:
// var jump = function(nums) {
//   let len = nums.length;
//   let reach = Array.from({length: len}).fill(Number.MAX_VALUE);
//   reach[0] = 0;
//   for(let i = 1; i < len; i++) {
//     for(let j = 0; j < i; j++) {
//       if(reach[j] != Number.MAX_VALUE && j + nums[j] >= i) {
//          reach[i] = Math.min(reach[i], reach[j] + 1);
//       }
//     }
//   }
//   return reach[len - 1];
// };

// Greedy: https://leetcode.wang/leetCode-45-Jump-Game-II.html?q=
var jump = function(nums) {
  let len = nums.length;
  let steps = 0;
  let end = 0,
    maxPos = 0;
  for (let i = 0; i < len - 1; i++) {
    maxPos = Math.max(maxPos, nums[i] + i); // nums[i]+i: The far farthest point for current number can go.
    if (i === end) {
      end = maxPos;
      steps++;
    }
  }
  return steps;
};
// @lc code=end
