/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  let [l, m, n] = [s1.length, s2.length, s3.length];
  if (l + m !== n) return false;
  let dp = Array.from({ length: l + 1 }, () =>
    Array.from({ length: m + 1 }).fill(false)
  );
  let i = 0,
    j = 0;
  dp[0][0] = true;
  for (let i = 1; i <= l; i++) {
    dp[i][0] = s1.substring(0, i) == s3.substring(0, i);
  }
  for (let j = 1; j <= m; j++) {
    dp[0][j] = s2.substring(0, j) == s3.substring(0, j);
  }

  for (let i = 1; i <= l; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] == s3[i + j - 1]) dp[i][j] = dp[i - 1][j] || dp[i][j];
      if (s2[j - 1] == s3[i + j - 1]) dp[i][j] = dp[i][j - 1] || dp[i][j];
    }
  }
  console.log(dp);

  return dp[l][m];
};
