/**
 * @param m: An integer m denotes the size of a backpack
 * @param A: Given n items with size A[i]
 * @param V: Given n items with value V[i]
 * @return: The maximum value
 */
// const backPackII = function (m, A, V) {
//   const N = A.length;
//   let max = Number.MIN_VALUE;
//   dfs(0, 0, 0);
//   function dfs(i, cur_w, cur_v) {
//     if(i > N || cur_w > m) return ;
//     if(dp[i][cur_w] !== -1) return ;
//     max = Math.max(max, cur_v);
//     dfs(i+1, cur_w + A[i], cur_v + V[i]);
//     dfs(i+1, cur_w, cur_v);
//   }
//   return max;
// }

// const backPackII = function (m, A, V) {
//   const N = A.length;
//   let max = Number.MIN_VALUE;
//   let dp = Array.from({length: N+1}, () => Array.from({length: m+1}).fill(0));
//   dfs(0, 0, 0);
//   function dfs(i, cur_w, cur_v) {
//     if(i > N || cur_w > m) return ;
//     // if(dp[i][cur_w] !== 0) return ;

//     dp[i][cur_w] = Math.max(dp[i][cur_w], cur_v);
//     dfs(i+1, cur_w + A[i], cur_v + V[i]);
//     dfs(i+1, cur_w, cur_v);
//   }
//   console.log(dp);
//   return dp[N][m];
// }

const backPackII = function(m, A, V) {
  const N = A.length;
  let dp = Array.from({ length: N + 1 }, () =>
    Array.from({ length: m + 1 }).fill(0)
  );
  for (let i = 1; i < N + 1; i++) {
    for (let j = 0; j < m + 1; j++) {
      if (j - A[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j - A[i - 1]] + V[i - 1], dp[i - 1][j]);
      }
    }
  }
  // console.log(dp);
  return dp[N][m];
};
