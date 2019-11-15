/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let s_dict = Array.from({ length: 128 }).fill(0);
  let t_dict = Array.from({ length: 128 }).fill(0);

  for (let s_char of s) {
    s_dict[s_char.charCodeAt()]++;
  }

  for (let t_char of t) {
    t_dict[t_char.charCodeAt()]++;
  }

  for (let i = 0; i < 128; i++) {
    if (s_dict[i] !== t_dict[i]) return false;
  }
  return true;
};
// @lc code=end
