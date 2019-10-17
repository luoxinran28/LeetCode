/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  wordDict = new Set(wordDict);
  let map = new Map();
  let len = s.length;
  if (len === 0) return res;
  function dfs(s) {
    let res = [];
    if (map.has(s)) {
      return map.get(s);
    }
    if (s.length === 0) {
      return res;
    }
    if (wordDict.has(s)) res.push(s);
    for (let i = 0; i < s.length; i++) {
      let right = s.substring(i);
      let left = s.substring(0, i);

      if (wordDict.has(right)) {
        let wordArray = dfs(left);
        for (let t of wordArray) {
          res.push(t + " " + right);
        }
      }
    }
    map.set(s, res);
    return res;
  }
  return dfs(s, [], 0, 0);
};
// @lc code=end
