/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var combinationSum3 = function(k, n) {
  let res = [];
  dfs(1, [], n);
  function dfs(start, sol, target) {
    if (target < 0) return;
    if (target == 0 && sol.length === k) {
      res.push(sol.slice());
      return;
    }
    for (let i = start; i <= 9; i++) {
      sol.push(i);
      dfs(i + 1, sol, target - i);
      sol.pop();
    }
  }
  return res;
};
