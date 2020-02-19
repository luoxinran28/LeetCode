/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.grid = [...Array(n)].map(() => [...Array(n)].fill(0));
  this.count_row = [...Array(n)].fill(0);
  this.count_col = [...Array(n)].fill(0);
  this.diagonal = 0;
  this.anti_diagonal = 0;
  this.len = n;
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
/*
最基本的O(n)的做法是，每次走一步都检查当前点的横纵，以及棋盘的对角线。
如果要达到O(1)，就要记录每一行、列或者对角线是否达到绝对值为n，若果是就有人赢。
*/
// O(n)
// TicTacToe.prototype.move = function(row, col, player) {
//   let { grid } = this;
//   if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return 0;
//   if(grid[row][col] !== 0) return 0;
//   grid[row][col] = player == 1 ? 1 : 2;
//   if(winVertically(col, player)) return player;
//   if(winHorizontally(row, player)) return player;
//   if(winDiagonally(row, col, player)) return player;
//   return 0; // No one wins
  
//   function winVertically(col, player) {
//     for(let i = 0; i < grid.length; i++) {
//       if(grid[i][col] !== player) return false;
//     }
//     return true;
//   }
  
//   function winHorizontally(row, player) {
//     for(let j = 0; j < grid[0].length; j++) {
//       if(grid[row][j] !== player) return false;
//     }
//     return true;
//   }
  
  
//   function winDiagonally(row, col, player) {
//     let topLeftToBottomRight = true;
//     let topRightToBottomLeft = true;
//     // top right to bottom left
//     for(let i = 0; i < grid.length; i++) {  
//       if(grid[i][i] !== player) topLeftToBottomRight = false;

//     }
//     // top left to bottom right
//     for(let i = 0; i < grid.length; i++) {
//       if(grid[i][grid.length - i - 1] !== player) topRightToBottomLeft = false;
//     }
//     return topLeftToBottomRight || topRightToBottomLeft;
//   }
// };

// O(1)
TicTacToe.prototype.move = function(row, col, player) {
  let cur_move = player === 1 ? 1 : -1;
  this.count_row[row] += cur_move;
  this.count_col[col] += cur_move;
  if(row === col) this.diagonal += cur_move;
  if(row + col === this.len - 1) this.anti_diagonal += cur_move;  
  if (Math.abs(this.count_row[row]) === this.len ||
      Math.abs(this.count_col[col]) === this.len ||
      Math.abs(this.diagonal) === this.len ||
      Math.abs(this.anti_diagonal) === this.len) return player;
  
  return 0;
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */