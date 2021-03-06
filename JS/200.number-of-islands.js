/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid == null || grid.length == 0 || grid[0].length == 0) return 0;
  let m = grid.length;
  let n = grid[0].length;
  let visited = Array.from({ length: m }, () =>
    Array.from({ length: n }).fill(false)
  );
  // console.log(visited);
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == "1" && !visited[i][j]) {
        res++;
        bfs(grid, i, j, visited);
      }
    }
  }

  return res;

  function bfs(grid, x, y, visited) {
    let det_x = [0, 0, 1, -1];
    let det_y = [1, -1, 0, 0];
    let q_x = [x];
    let q_y = [y];
    visited[x][y] = true;
    let m = grid.length;
    let n = grid[0].length;
    while (q_x.length > 0) {
      let size = q_x.length;
      for (let i = 0; i < size; i++) {
        let c_x = q_x.shift();
        let c_y = q_y.shift();
        for (let j = 0; j < 4; j++) {
          let n_x = c_x + det_x[j];
          let n_y = c_y + det_y[j];
          if (
            0 <= n_x &&
            n_x < m &&
            0 <= n_y &&
            n_y < n &&
            grid[n_x][n_y] == 1 &&
            !visited[n_x][n_y]
          ) {
            q_x.push(n_x);
            q_y.push(n_y);
            visited[n_x][n_y] = true;
          }
        }
      }
    }
  }
};
// @lc code=end
