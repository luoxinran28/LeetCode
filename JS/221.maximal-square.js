/**
 * @param {character[][]} matrix
 * @return {number}
 */
/*
最暴力的方法是对每一行每一列的点，进行不断扩大size的方式检查，时间复杂度达到O(n^3)，而且很多检查都是重复了的，
这时候我们可以用dp来记录检查过的正方形：

dp[i][j]代表当前点所能达到的最大正方形长度：
if a[i][j] == 1
  dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j]) + 1
  
这里之所以用min，是为了保证左上，上和左方向的正方形能加在一起组合成一个正方形，如果不是min，就可能有个方向会长一点，
那加上该点就不是正方形了。每次更新dp都要记录max。


*/
var maximalSquare = function(matrix) {
  if(matrix === null || matrix.length === 0 || matrix[0].length === 0) return 0;
  let m = matrix.length, n = matrix[0].length;
  let dp = [...Array(m + 1)].map(() => [...Array(n + 1)].fill(0));
  let max = 0;
  for(let i = 1; i < m + 1; i++) {
    for(let j = 1; j < n + 1; j++) {
      if(matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        max = Math.max(dp[i][j], max);
      }
    }
  }
  return max * max; // 返回面积
};