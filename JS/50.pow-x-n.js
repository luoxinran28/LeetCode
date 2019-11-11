/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// https://leetcode.wang/leetCode-50-Pow.html
var myPow = function(x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (Math.abs(x) < 1e-10) {
    return 0;
  }
  let ans = 1,
    tmp = x;
  // console.log(x, n);
  while (n != 0) {
    if (n % 2 === 1) {
      ans *= tmp;
      // console.log("ans: "+ans);
    }
    tmp *= tmp;
    // console.log("tmp: "+tmp);
    n = Math.floor(n / 2);
  }
  return ans;
};
// @lc code=end
