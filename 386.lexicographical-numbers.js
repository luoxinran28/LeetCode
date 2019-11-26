/*
 * @lc app=leetcode id=386 lang=javascript
 *
 * [386] Lexicographical Numbers
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  let res = [];
  for (let i = 1; i <= 9; i++) {
    if (i <= n) res.push(i);
    dfs(n, res, i);
  }
  return res;

  function dfs(n, res, lastN) {
    for (let i = 0; i <= 9; i++) {
      let num = lastN * 10 + i;
      if (num > n) return;
      res.push(num);
      dfs(n, res, num);
    }
  }
};
// @lc code=end
