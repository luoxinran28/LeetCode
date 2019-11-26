/*
 * @lc app=leetcode id=767 lang=javascript
 *
 * [767] Reorganize String
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  let hash = Array.from({ length: 26 }).fill(0);
  let len = S.length;
  for (let i = 0; i < len; i++) {
    hash[S.charCodeAt(i) - "a".charCodeAt()]++;
  }
  let max_idx = -1;
  let max = -1;
  for (let i = 0; i < 26; i++) {
    if (hash[i] > max) {
      max = hash[i];
      max_idx = i;
    }
  }

  if (hash[max_idx] > Math.floor((len + 1) / 2)) return "";
  let ret_arr = Array.from({ length: len }).fill("");
  let cur = 0;
  while (cur < len && hash[max_idx] > 0) {
    // even
    ret_arr[cur] = String.fromCharCode(max_idx + "a".charCodeAt());
    hash[max_idx]--;
    cur += 2;
  }
  for (let h = 0; h < hash.length; h++) {
    let curChar = String.fromCharCode(h + "a".charCodeAt());
    while (h != max_idx && hash[h] != 0) {
      if (cur >= len) {
        cur = 1;
      }
      ret_arr[cur] = curChar;
      hash[h]--;
      cur += 2;
    }
  }
  return ret_arr.join("");
};
// @lc code=end
