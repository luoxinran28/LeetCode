/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = s.length;
  let map = new Map();
  let left = 0,
    right = 0;
  let maxLen = Number.MIN_VALUE;
  while (right < len) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right]) + 1); // Go to the last appeared left
    }
    maxLen = Math.max(right - left + 1, maxLen);
    map.set(s[right], right);
    right++;
  }
  return maxLen;
};
// @lc code=end
