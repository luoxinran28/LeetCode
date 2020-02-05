// https://www.youtube.com/watch?v=YDf982Lb84o
// dp[5] = dp[0] * dp[4] + 
//       = dp[1] * dp[3] +
//       =      ...
//       = dp[4] * dp[0]
//
// dp(n) = dp(0) * dp(n-1) + dp(1) * dp(n-2) + … + dp(n-1) * dp(0) 
var numTrees = function(n) {
  if(n <= 1) return 1;
  let dp = Array.from({length: n + 1}).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for(let i = 2; i <= n; i++) { // from 2 to n
    for(let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  return dp[n];
};