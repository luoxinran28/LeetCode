/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function(s) {
  let len = s.length;
  var dp = Array.from({ length: len + 1 }).fill(0);
  if (len === 0) return dp[len];
  dp[0] = 1;
  for (let i = 1; i < len + 1; i++) {
    if (parseInt(s[i - 1]) !== 0) {
      dp[i] += dp[i - 1];
    }
    if (i > 1) {
      let num = parseInt(s.substr(i - 2, 2));
      if (10 <= num && num <= 26) {
        dp[i] += dp[i - 2];
      }
    }
  }
  return dp[len];
};
// @lc code=end
