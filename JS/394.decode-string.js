/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let multiply = [];
  let repeatStr = [];
  let res = "";
  let tempNum = "";
  
  for(let ch of s) {
    if(!isNaN(ch)) { // Number
      tempNum += ch;
    } else if(ch === '[') {
      multiply.push(tempNum);
      tempNum = "";
      repeatStr.push(res);
      res = "";
    } else if(ch === ']') {
      res = repeatStr.pop() + res.repeat(multiply.pop());
    } else {
      res += ch;
    }
  }
  
  return res;
};
// @lc code=end

