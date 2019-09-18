/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let [m, n] = [word1.length, word2.length];
  let dp = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }).fill(0)
  );
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        let replaceValue = dp[i - 1][j - 1];
        let deleteValue = dp[i][j - 1];
        let insertValue = dp[i - 1][j];
        dp[i][j] = Math.min(replaceValue, deleteValue, insertValue) + 1;
      }
    }
  }
  return dp[m][n];
};
