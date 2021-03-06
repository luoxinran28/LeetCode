/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// 用找到第一个字符相等的点，用回溯法接着找其他字符。
var exist = function(board, word) {
  if(board === null || board.length === 0) return false;
  if(word.length === 0) return true;
  
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      if(board[i][j] === word[0]) {
        let ex = exist(board, word, i, j, 0); // use a variable to keep testing the others
        if(ex) return true;
      }
    }
  }
  return false;
  
  function exist(board, word, i, j, start) {
    if(start === word.length) return true;
    let row = board.length;
    let col = board[0].length;
    if (i < 0 || i > row - 1 || j < 0 || j > col - 1 ||
       board[i][j] !== word[start]) {
      return false;
    }
    board[i][j] = "*"; // Backtrack
    let res = exist(board, word, i + 1, j, start + 1) ||
              exist(board, word, i - 1, j, start + 1) ||
              exist(board, word, i, j + 1, start + 1) ||
              exist(board, word, i, j - 1, start + 1);
    board[i][j] = word[start];
    return res;
  }
};