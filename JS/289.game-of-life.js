/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/*
如果直接用暴力法解决，每次更改棋盘上的状态，这个被改变的状态可能影响其他的棋子，最直接的办法是
拷贝一个棋盘，遍历原棋盘的点并在拷贝的棋盘上面做更改，遍历完之后再将拷贝棋盘赋值回原棋盘。但这样做
如果棋盘太大会很浪费空间。
解决方法是是如果在原棋盘做出改动，可以把棋子的状态变成其他数值。
  条件1：当前live周围少于2个live，将其变成-1；
  条件2：当前live周围是2个或者3个live，不做出改变；
  条件3：当前live周围多余3个live，当前死亡变成-1；
  条件4：当前dead周五有3个live，当前re-live变成2；
总的来说就是live->die变成-1，die->live变成2，最后根据棋盘上面的正负情况来更新棋盘，正live，非正dead
*/
var gameOfLife = function(board) {
  let turn_live = 2;
  let turn_dead = -1;
  
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      let live_neighbors = countNeighborLives(board, i, j);

      // Rule 1 or 3
      if(board[i][j] === 1 && (live_neighbors < 2 || live_neighbors > 3)) {
         board[i][j] = turn_dead;
      }
      // Rule 4
      if(board[i][j] === 0 && live_neighbors === 3) {
         board[i][j] = turn_live;
      }
    }
  }
  // 重新扫一遍根据正负更新棋盘
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      if(board[i][j] > 0) board[i][j] = 1;
      else if(board[i][j] <= 0) board[i][j] = 0;
    }
  }
  
  
  
  function countNeighborLives(board, i, j) {
    let count = 0;
    let det_x = [-1, 1, 0, 0, -1, -1, 1, 1];
    let det_y = [0, 0, -1, 1, -1, 1, -1, 1];
    
    for(let d = 0; d < 8; d++) {
      let x = i + det_x[d];
      let y = j + det_y[d];
      if(x < 0 || x >= board.length || y < 0 || y >= board[0].length) {
        continue;
      }
      if(board[x][y] === 1 || board[x][y] === turn_dead) count++; // 要算上turn_dead的，因为它本来是live
    }
    return count;
  }
};