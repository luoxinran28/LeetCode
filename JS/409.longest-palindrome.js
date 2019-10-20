/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  if (!s || s.length === 0) return 0;
  let counts = new Set();
  let res = 0;
  for (let c of s) {
    if (counts.has(c)) {
      // It's paired
      counts.delete(c);
      res++;
    } else {
      counts.add(c);
    }
  }
  return counts.size !== 0 ? res * 2 + 1 : res * 2;
};

// var isPalindrome = function(s) {
//   let left = 0, right = s.length-1;
//   while(left !== right) {
//     if(s[left++] !== s[right--]) {
//       return false;
//     }
//   }
//   return true;
// }
// @lc code=end
