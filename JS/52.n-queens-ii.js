/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let res = 0;
  dfs([], 0);
  
  return res;
  
  function dfs(sol, row) {
    if(row === n) {
      // res.push(sol.map(c => ".".repeat(c) + "Q" + ".".repeat(n - c - 1)));
      res++;
      return;
    }
    for(let col = 0; col < n; col++) {
      if(isValid(sol, col, row)) {
        sol.push(col);
        dfs(sol, row + 1);
        sol.pop();
      }
    }
  }
  
  function isValid(sol, col, row) {
    for(let r = 0; r < sol.length; r++) {
      let c = sol[r];
      if(c === col) return false; 
      if(c + r === col + row) return false; // 45 degree
      if(c - r === col - row) return false; // 135 degree
    }
    return true;
  }
};