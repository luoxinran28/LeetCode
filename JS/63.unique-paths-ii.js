/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let rows = obstacleGrid.length;
  let columns = obstacleGrid[0].length;
  if (rows === 0 || columns === 0) return 1;
  let dp = Array.from({ length: rows }).map(() =>
    Array.from({ length: columns }).fill(0)
  );
  for (let i = 0; i < rows; i++) {
    if (obstacleGrid[i][0] !== 1) dp[i][0] = 1;
    else break;
  }
  for (let j = 0; j < columns; j++) {
    if (obstacleGrid[0][j] !== 1) dp[0][j] = 1;
    else break;
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      if (obstacleGrid[i][j] == 1) dp[i][j] = 0;
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[rows - 1][columns - 1];
};
