/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let v = Array.from({ length: 9 }).fill(false);

  for (let i = 0; i < 9; i++) {
    v = Array.from({ length: 9 }).fill(false);
    for (let j = 0; j < 9; j++) {
      if (!process(v, board[i][j])) return false;
    }
  }

  for (let j = 0; j < 9; j++) {
    v = Array.from({ length: 9 }).fill(false);
    for (let i = 0; i < 9; i++) {
      if (!process(v, board[i][j])) return false;
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      v = Array.from({ length: 9 }).fill(false);
      for (let m = i * 3; m < i * 3 + 3; m++) {
        for (let n = j * 3; n < j * 3 + 3; n++) {
          if (!process(v, board[m][n])) return false;
        }
      }
    }
  }
  return true;

  function process(v, c) {
    if (c == ".") {
      return true;
    }
    let num = c - "0";
    if (num < 1 || num > 9) return false;
    if (v[num - 1]) {
      return false;
    }
    v[num - 1] = true;
    return true;
  }
};
// @lc code=end
