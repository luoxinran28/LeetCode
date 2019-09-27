/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let res = [];
  dfs(n, 0, []);

  // Sol is recording the queen column postion, index is row, value is column
  function dfs(n, row, sol) {
    if (row === n) {
      res.push(sol.map(c => ".".repeat(c) + "Q" + ".".repeat(n - c - 1)));
      return;
    }
    for (let col = 0; col < n; col++) {
      // // array.some(function(currentValue, index, arr), thisValue)
      // if(!sol.some((c, r) =>
      //             c === col ||
      //             (c + r) === (col + row) ||
      //             (c - r) === (col - row) )) {
      if (isValid(sol, col, row)) {
        sol.push(col);
        dfs(n, row + 1, sol);
        sol.pop();
      }
    }
  }
  function isValid(sol, col, row) {
    for (let r = 0; r < sol.length; r++) {
      let c = sol[r];
      if (c === col) return false;
      if (c + r === col + row) return false;
      if (c - r === col - row) return false;
    }
    return true;
  }
  return res;
};
