/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//   let len = s.length;
//   let res = ""
//   if(len === 0) return res;
//   let dp = Array.from({length: len}, ()=> Array.from({length: len}).fill(false));
//   dp[0][0] = true;
//   for(let i = len-1; i >= 0; i--) {
//     for(let j = i; j < len; j++) {
//       dp[i][j] = (s[i] === s[j]) && (j-i < 3 || dp[i+1][j-1]);
//       if(dp[i][j] && (res.length < j - i + 1)) {
//         res = s.substring(i,j+1);
//       }
//     }
//   }
//   return res;
// };

var longestPalindrome = function(s) {
  let len = s.length;
  let res = "";
  if (len === 0) return res;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      // console.log(left, right);
      if (right - left - 1 > res.length) {
        res = s.substring(left + 1, right);
      }
    }
    // No better move exists
    if (Math.ceil(res.length / 2) >= s.length - i) break;
  }
  return res;
};
// @lc code=end
