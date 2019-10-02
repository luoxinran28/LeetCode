/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (nums.length <= 1) return [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let newTarget = target - cur;
    if (map.has(newTarget)) {
      return [map.get(newTarget), i];
    } else {
      map.set(cur, i);
    }
  }
  return [];
};
