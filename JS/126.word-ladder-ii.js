/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  let diffMap = new Map();
  let wordSet = new Set(wordList);
  let res = [];
  let limit = 0;

  for (let word of wordList) {
    diffMap.set(word, getDiff(beginWord, word));
  }
  while (res.length === 0) {
    dfs(beginWord, endWord, wordSet, 1, [beginWord]);
    limit++;
  }
  return res;

  function dfs(begin, end, wordSet, depth, sol) {
    if (limit == depth + 1) {
      if (begin === end) {
        res.push(sol.slice());
        return;
      }
    }

    if (depth - 1 + diffMap.get(begin) > limit) return;

    for (let begin_str of getNext(begin, wordSet)) {
      sol.push(begin_str);
      dfs(begin_str, end, wordSet, depth + 1, sol);
      sol.pop();
    }

    if (res.length === 0) {
      diffMap.set(begin, Math.max(diffMap.get(begin), limit - (depth - 1) + 1));
    }
  }
  function getDiff(a, b) {
    let ret = 0;
    for (let i = 0; i < a.length; i++) {
      if (a.charAt(i) !== b.charAt(i)) {
        ret++;
      }
    }
    return ret;
  }

  function getNext(word, wordSet) {
    let ret = [];
    for (let i = 0; i < word.length; i++) {
      let begin_arr = word.split("");
      for (let c = 0; c < 26; c++) {
        let char = String.fromCharCode(97 + c);
        if (char === begin_arr[i]) continue;
        begin_arr[i] = char;
        let begin_str = begin_arr.join("");
        if (wordSet.has(begin_str)) {
          ret.push(begin_str);
        }
      }
    }
    return ret;
  }
};

// @lc code=end
