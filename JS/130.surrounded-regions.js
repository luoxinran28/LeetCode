/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length === 0 || board[0].length === 0) return;
  let m = board.length;
  let n = board[0].length;

  for (let i = 0; i < m; i++) {
    bfs(board, i, 0);
    bfs(board, i, n - 1);
  }

  for (let j = 0; j < n; j++) {
    bfs(board, 0, j);
    bfs(board, m - 1, j);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "T") {
        board[i][j] = "O";
      } else {
        // Change 'O' and 'X' to 'X'
        board[i][j] = "X";
      }
    }
  }

  function bfs(board, x, y) {
    if (board[x][y] !== "O") return;
    const m = board.length;
    const n = board[0].length;
    let det_x = [0, 0, 1, -1];
    let det_y = [1, -1, 0, 0];

    let q_x = [];
    let q_y = [];

    q_x.push(x);
    q_y.push(y);

    board[x][y] = "T";

    while (q_x.length !== 0) {
      let c_x = q_x.shift();
      let c_y = q_y.shift();
      for (let i = 0; i < det_x.length; i++) {
        let n_x = c_x + det_x[i];
        let n_y = c_y + det_y[i];
        if (
          0 <= n_x &&
          n_x < m &&
          0 <= n_y &&
          n_y < n &&
          board[n_x][n_y] === "O"
        ) {
          board[n_x][n_y] = "T";
          q_x.push(n_x);
          q_y.push(n_y);
        }
      }
    }
    return;
  }
};
// @lc code=end
