/*
 * @lc app=leetcode id=516 lang=javascript
 *
 * [516] Longest Palindromic Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// // DP: https://www.youtube.com/watch?v=_nCsPn7_OgI
// var longestPalindromeSubseq = function(s) {
//   let len = s.length;
//   let dp = Array.from({length: len}, ()=> Array.from({length: len}).fill(0));
//   dp[0][0] = 1;
//   for(let i = 0; i < len; i++) {
//     dp[i][i] = 1;
//   }
//   for(let i = len-1; i >= 0; i--) {
//     for(let j = i+1; j < len; j++) {
//       if(s[i] === s[j]) {
//         dp[i][j] = dp[i+1][j-1] + 2;
//       } else {
//         dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
//       }
//     }
//   }
//   return dp[0][len-1];
// };

var longestPalindromeSubseq = function(s) {
  let len = s.length;
  let dp = Array.from({ length: 2 }, () => Array.from({ length: len }).fill(0));
  dp[0][len - 1] = 1;
  dp[1][len - 1] = 1;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      dp[i % 2][i] = 1;
      if (s[i] === s[j]) {
        dp[i % 2][j] = dp[(i + 1) % 2][j - 1] + 2;
      } else {
        dp[i % 2][j] = Math.max(dp[(i + 1) % 2][j], dp[i % 2][j - 1]);
      }
    }
  }
  return dp[0][len - 1];
};
// @lc code=end
