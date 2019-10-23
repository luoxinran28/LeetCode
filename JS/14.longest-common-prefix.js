/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let minIdx = 0,
    minLen = Number.MAX_VALUE;
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < minLen) {
      minLen = strs[i].length;
      minIdx = i;
    }
  }
  let anyStr = strs[minIdx];
  for (let i = 0; i < anyStr.length; i++) {
    for (let str of strs) {
      if (str[i] !== anyStr[i]) {
        return str.substring(0, i);
      }
    }
  }
  return anyStr;
};
// @lc code=end
