/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */
/**
 * @param {string} s
 * @return {string[][]}
 */

/*
需要在每一层吧字符串partition了
E.g: "abba"
        a           ab        abb  abba
      / | \         / \      /
    b   bb  bba    b   aa   a
   / \
  b  aa
 / 
a
*/
var partition = function(s) {
  let res = [];
  dfs(s, [], 0);
  function dfs(s, sol, start) {
    if (start === s.length) {
      res.push(sol.slice());
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s, start, i)) {
        let first = s.substring(start, i + 1); // The first part of string
        sol.push(first);
        dfs(s, sol, i + 1);
        sol.pop();
      }
    }
  }

  function isPalindrome(str, start, end) {
    while (start <= end) {
      if (str[start++] != str[end--]) return false;
    }
    return true;
  }
  return res;
};
