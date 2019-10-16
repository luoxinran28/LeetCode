/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let len = s.length;
  let dp = Array.from({ length: len + 1 }).fill(false);
  dp[0] = true;
  for (let i = 1; i < len + 1; i++) {
    // to build the dp array
    for (let j = 0; j < i; j++) {
      // for string: 0 ... j ... i ... s . update from 0-i
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len];
};
// @lc code=end
