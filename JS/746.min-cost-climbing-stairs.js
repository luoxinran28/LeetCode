/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  if(cost === null || cost.length === 0) return 0;
  let n = cost.length;
  if(n === 1) return cost[0];
  let dp = Array(n);
  dp[0] = cost[0];
  dp[1] = cost[1]; // 这里不需要选最小，因为最后返回会判断
  for(let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[n - 1], dp[n - 2]); // 最后这里要判断
};