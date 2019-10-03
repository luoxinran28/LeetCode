/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length === 0) return null;
  let [minDiff, minSum] = [Number.MAX_VALUE, Number.MAX_VALUE];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // if(i>0 && nums[i] === nums[i-1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let diff = Math.abs(sum - target);
      if (diff < minDiff) {
        minDiff = diff;
        minSum = sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return minSum;
};
