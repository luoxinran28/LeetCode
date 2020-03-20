/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start

/**
 * @param {string} s
 * @return {number}
 */
/*
检查当前点并且向两边扩散，所以是left--, right++，要注意奇数偶数
*/
var countSubstrings = function(s) {
  if(s === null || s.length === 0) return 0;
  
  let res = [];
  let count = 0;

  for(let i = 0; i < s.length; i++) {
    isPalindrome(s, i, i); // 奇数
    isPalindrome(s, i, i + 1); // 偶数
  }
  
  function isPalindrome(s, left, right) {
    while(left >= 0 && right < s.length) {
      if(s[left--] === s[right++]) count++;
      else break;
    }
  }
  
  return count;
};
// @lc code=end

