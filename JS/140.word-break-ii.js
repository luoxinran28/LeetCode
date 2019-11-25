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

// Lintcode
var wordBreak = function(s, wordDict) {
  // write your code here
  if (s === null || s.length === 0) return [];
  wordDict = new Set(wordDict);
  let map = new Map();
  map.set("", [""]);
  return dfs(s, wordDict, [], map);

  function dfs(s, wordDict) {
    let sol = [];
    if (map.has(s)) {
      return map.get(s);
    }

    for (let i = 1; i <= s.length; i++) {
      let s1 = s.substring(0, i);
      let s2 = s.substring(i);
      if (wordDict.has(s1)) {
        let retArray = dfs(s2, wordDict, sol);
        for (let s of retArray) {
          if (s === "") {
            sol.push(s1);
          } else {
            sol.push(s1 + " " + s);
          }
        }
      }
    }
    map.set(s, sol);
    return sol;
  }
};
// @lc code=end
