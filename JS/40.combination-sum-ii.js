/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = [];
  dfs(candidates.sort((a, b) => a - b), target, [], 0);
  function dfs(nums, target, sol, start) {
    if (target < 0) return;
    if (target === 0) {
      res.push(sol.slice());
      return;
    }
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      sol.push(nums[i]);
      dfs(nums, target - nums[i], sol, i + 1);
      sol.pop(nums[i]);
    }
  }
  return res;
};
