/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [];
  nums = nums.sort((a, b) => a - b);
  let set = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[i] + nums[right];
      if (sum === 0) {
        let sol = [nums[i], nums[left], nums[right]];
        res.push(sol);
        while (left < right && nums[left] === sol[1]) left++; // Remove duplicates
        while (left < right && nums[right] === sol[2]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};
