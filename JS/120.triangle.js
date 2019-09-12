/**
 * @param {number[][]} triangle
 * @return {number}
 */
// DFS:
var minimumTotal = function(triangle) {
  let rows = triangle.length;
  let columns = triangle[rows - 1].length;
  let hash = [];
  for (let i = 0; i < rows; i++) {
    let c = [];
    for (let j = 0; j < columns; j++) {
      c[j] = -1;
    }
    hash[i] = c;
  }
  function dfs(triangle, i, j) {
    // console.log(i, j);
    if (i === rows) return 0;
    if (hash[i][j] !== -1) {
      return hash[i][j];
    }
    hash[i][j] =
      Math.min(dfs(triangle, i + 1, j), dfs(triangle, i + 1, j + 1)) +
      triangle[i][j];
    return hash[i][j];
  }
  return dfs(triangle, 0, 0);
};

// // Bottom up:
var minimumTotal = function(triangle) {
  let rows = triangle.length;
  let columns = triangle[rows - 1].length;
  // let dp = Array.from({length: rows}).map((item, index) => {
  //   if(index === rows - 1) return triangle[rows - 1];
  //   else return Array.from({length: columns}).fill(0);
  // });
  let dp = [...triangle];
  for (let i = rows - 2; i >= 0; i--) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }
  return dp[0][0];
};

var minimumTotal = function(triangle) {
  let rows = triangle.length;
  let columns = triangle[rows - 1].length;
  let dp = Array.from({ length: rows }).map(item =>
    Array.from({ length: columns }).fill(Number.MAX_SAFE_INTEGER)
  );
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
    }
  }
  return Math.min(...dp[columns - 1]);
};
