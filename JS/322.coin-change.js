/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/*
这个题典型的dp问题，如果递归的话，会有很多重复子问题，比如1+2+3就会被算很多次，所以
需要记录重复问题。这题像重复背包问题，需要一个个比较每个coin看哪个用的coin数量最少。
方程如下：
0 ... i ... amount: the remain of the amount
for each coin j:
  dp[i] = min(dp[i - coins[j] + 1], dp[i]);

*/
var coinChange = function(coins, amount) {
  let dp = [...Array(amount + 1)].fill(amount + 1);
  dp[0] = 0;
  for(let i = 1; i <= amount; i++) {
    for(let j = 0; j < coins.length; j++) {
      if(i - coins[j] >= 0) {
        // console.log(i - coins[j]);
        dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
      }
    }
  }
  // console.log(dp);
  return dp[amount] > amount ? -1 : dp[amount];
};