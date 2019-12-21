/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  dfs("", n, n);
  return res;
  function dfs(sol, left, right) {
    if(sol.length === n * 2) {
      res.push(sol);
      return;
    }
    if(left > 0) {
      sol += "(";
      dfs(sol, left - 1, right);
      sol = sol.substring(0, sol.length - 1);
    }
    if(right > 0 && left < right) {
      sol += ")";
      dfs(sol, left, right - 1);
      sol = sol.substring(0, sol.length - 1);
    }
  }
};