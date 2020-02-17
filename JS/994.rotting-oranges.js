/**
 * @param {number[][]} grid
 * @return {number}
 */
// BFS所有rotten点。要注意最后需要扫描一次看看有没有1存在。level因为要最后多走一步，
// 所以要判断如果不是0的话要减1.
var orangesRotting = function(grid) {
  if(grid === null || grid.length === 0 || grid[0].length === 0) return -1; 
  let det_x = [1, -1, 0, 0];
  let det_y = [0, 0, 1, -1];
    
  let q_x = [];
  let q_y = [];
  
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === 2) { // 找到rotten点最为起始点
        q_x.push(i);
        q_y.push(j);
      }
    }
  }

  // console.log(q_x, q_y);
  let level = 0;
  while(q_x.length > 0 && q_y.length > 0) {
    level++;
    let size = q_x.length;
    for(let i = 0; i < size; i++) {
      let c_x = q_x.shift();
      let c_y = q_y.shift();
      for(let j = 0; j < 4; j++) {
        let n_x = c_x + det_x[j];
        let n_y = c_y + det_y[j];
        if (n_x >= 0 && n_x < grid.length && n_y >= 0 && n_y < grid[0].length &&
            grid[n_x][n_y] === 1) {
          q_x.push(n_x);
          q_y.push(n_y);
          grid[n_x][n_y] = 2;
        }
      }
    }
  }

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === 1) { // 找到rotten点最为起始点
        return -1
      }
    }
  }
  return level === 0 ? 0 : level - 1;
};