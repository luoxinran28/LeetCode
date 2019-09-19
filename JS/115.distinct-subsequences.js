/*
 * @lc app=leetcode id=115 lang=javascript
 *
 * [115] Distinct Subsequences
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  let [m, n] = [t.length, s.length];
  let dp = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }).fill(0)
  );

  for (let j = 0; j <= n; j++) {
    //if t is '', no matter how long s is, the answer will always be 1
    //because we need to delete all characters in s to produce t
    dp[0][j] = 1;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (t[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      } else dp[i][j] = dp[i][j - 1];
    }
  }
  return dp[m][n];
};
