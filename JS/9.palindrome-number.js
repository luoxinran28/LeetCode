/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
  if(num < 0) return false;
  return num === reverse(num);
  function reverse(n) {
    let rev_n = 0;
    while(n > 0) {
      rev_n = n % 10 + Math.floor(rev_n * 10);
      n = Math.floor(n/10);
    }
    return rev_n;
  }
};
// @lc code=end

