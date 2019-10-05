/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let res = [];
  nums = nums.sort((a, b) => a - b);
  let map = new Map();
  for (let k = 0; k < nums.length - 3; k++) {
    if (k > 0 && nums[k] === nums[k - 1]) continue;
    for (let i = k + 1; i < nums.length - 2; i++) {
      if (i > k + 1 && nums[i] === nums[i - 1]) continue;
      let left = i + 1,
        right = nums.length - 1;
      while (left < right) {
        let sum = nums[k] + nums[i] + nums[left] + nums[right];
        if (sum === target) {
          let sol = [nums[k], nums[i], nums[left], nums[right]];
          res.push(sol);
          while (left < right && nums[left] === sol[2]) left++;
          while (left < right && nums[right] === sol[3]) right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return res;
};
