/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
回溯法，用empty记录还剩下多少个空格子
*/
var uniquePathsIII = function(grid) {
  
  let start_x, start_y, end_x, end_y, empty = 1; // empty 初始为1，要把起始点算上
  let res = 0;
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === -1) continue;
      if(grid[i][j] === 1) {
        start_x = i;
        start_y = j;
      } else if(grid[i][j] === 2) {
        end_x = i;
        end_y = j;
      } else {
        empty++;
      }
    }
  }
  
  dfs(grid, start_x, start_y);
  return res;
  
  function dfs(grid, i, j) {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] < 0) {
      return;
    }
    if(i === end_x && j === end_y) {
      if(empty === 0) res++; // 这里的判断必须在里面
      return;
    }
    grid[i][j] = -2;
    empty--;
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
    grid[i][j] = 0;
    empty++;
  }
};