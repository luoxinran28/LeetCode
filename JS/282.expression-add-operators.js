/*
 * @lc app=leetcode id=282 lang=javascript
 *
 * [282] Expression Add Operators
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
  let res = [];
  dfs(num, target, 0, 0, "", 0);
  return res;

  function dfs(num, target, cur, sum, sol, lastExp) {
    if (cur === num.length) {
      if (sum === target) {
        res.push(sol);
      }
      return;
    }
    for (let i = cur; i < num.length; i++) {
      let s = num.substring(cur, i + 1);
      let num_s = parseInt(s);
      if (i !== cur && num.charAt(cur) === "0") {
        console.log("o");
        break;
      }
      if (cur === 0) {
        dfs(num, target, i + 1, sum + num_s, sol + "" + s, num_s); // only add operators in between
      } else {
        dfs(num, target, i + 1, sum + num_s, sol + "+" + s, num_s);
        dfs(num, target, i + 1, sum - num_s, sol + "-" + s, -num_s);
        dfs(
          num,
          target,
          i + 1,
          sum - lastExp + lastExp * num_s,
          sol + "*" + s,
          lastExp * num_s
        );
      }
    }
    return;
  }
};
// @lc code=end
