/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let len = digits.length;
  let res = [];
  if (len === 0) return res;
  let map = [
    "0",
    "1",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz"
  ];
  dfs(0, []);
  function dfs(start, sol) {
    if (start === len) {
      res.push(sol.join(""));
      return;
    }
    let str = map[digits[start] - "0"];
    if (str === "1" || str === "0") return;
    for (let c = 0; c < str.length; c++) {
      sol.push(str[c]);
      dfs(start + 1, sol);
      sol.pop();
    }
  }
  return res;
};
