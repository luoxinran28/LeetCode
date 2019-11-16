/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if (s === null || s.length === 0) return 0;
  let map = new Map();
  let len = s.length;
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  let res = 0;
  for (let i = 1; i < len; i++) {
    if (map.get(s.charAt(i - 1)) >= map.get(s.charAt(i))) {
      res += map.get(s.charAt(i - 1));
    } else {
      res -= map.get(s.charAt(i - 1));
    }
  }
  res += map.get(s.charAt(len - 1));
  return res;
};
// @lc code=end
