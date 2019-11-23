/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let v = Array.from({ length: 128 }).fill(0);
  for (let i = 0; i < s.length; i++) {
    v[s.charCodeAt(i)]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (v[s.charCodeAt(i)] === 1) {
      return i;
    }
  }
  return -1;
};
// @lc code=end
