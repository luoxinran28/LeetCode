/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let neg = false;
  if (x < 0) {
    neg = true;
    x = -x;
  }
  let res = 0;
  while (x !== 0) {
    let last = x % 10;
    res = res * 10 + last;
    x = Math.floor(x / 10);
  }
  if (neg) res = -res;
  let maxInteger = Math.pow(2, 31) - 1;
  let minInteger = -Math.pow(2, 31);
  return res < minInteger || res > maxInteger ? 0 : res;
};
// @lc code=end
