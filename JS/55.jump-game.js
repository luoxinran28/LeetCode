/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// // DP:
// var canJump = function(nums) {
//   let len = nums.length;
//   let reach = Array.from({length: len}).fill(false);
//   reach[len-1] = true; // Suppose if the last number can be reached
//   for(let i = len - 2; i >= 0; i--) {
//     for(let j = 0; j <= nums[i] && i+j < len; j++) {
//       if(reach[i+j]) { // If the number behind can be reached, set the current as true
//         reach[i] = true;
//         break;
//       }
//     }
//   }
//   return reach[0]; // It means the last number can be jumped from the begining.
// };

// Greedy: always go the the max
var canJump = function(nums) {
  let len = nums.length;
  let furthestPoint = nums[0];
  for (let i = 1; i < len - 1 && i <= furthestPoint; i++) {
    // Iterate each number to find the furthest point they can go
    furthestPoint = Math.max(i + nums[i], furthestPoint);
  }
  return furthestPoint >= len - 1;
};
// @lc code=end
