/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let res = num;
  while(res >= 10) {
    let tmp = res;
    res = 0;
    while(tmp > 0) {
      res += tmp % 10;
      tmp = Math.floor(tmp/10);
    }
  }
  return res;
  
  // return 1 + (num - 1) % 9; // Not recommended
};
// @lc code=end

