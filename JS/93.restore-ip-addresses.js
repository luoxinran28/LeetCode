/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let res = [];
  dfs(s, [], 0);
  function dfs(s, sol) {
    if (s.length === 0 && sol.length === 4) {
      res.push(sol.slice().join("."));
      return;
    }
    if (s.length === 0) return;
    if (sol.length > 4) return;

    for (let i = 0; i < s.length; i++) {
      const subStr = s.substring(0, i + 1);
      const subInt = parseInt(subStr);
      if ((subStr.length > 1 && subStr[0] === "0") || subInt > 255) return;
      sol.push(subStr);
      dfs(s.substring(i + 1), sol);
      sol.pop();
    }
  }
  return res;
};
