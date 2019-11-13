/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  if (s === null || s.length === 0) {
    return false;
  }
  s = s.trim() + " ";
  let i = 0;
  let len = s.length - 1;
  if (s.charAt(i) === "-" || s.charAt(i) === "+") {
    i++;
  }

  let n_digits = 0;
  let n_dots = 0;
  while (i < len && (isDigit(s.charAt(i)) || s.charAt(i) === ".")) {
    if (isDigit(s.charAt(i))) {
      n_digits++;
    } else if (s.charAt(i) === ".") {
      n_dots++;
    }
    i++;
  }

  if (n_digits === 0 || n_dots > 1) {
    return false;
  }
  if (s.charAt(i) === "e") {
    i++;
    if (s.charAt(i) === "-" || s.charAt(i) === "+") {
      i++;
    }
    if (i === len) return false; // "0e"
    while (i < len && isDigit(s.charAt(i))) {
      i++;
    }
  }
  return i === len;

  function isDigit(char) {
    return "0" <= char && char <= "9";
  }
};
// @lc code=end
