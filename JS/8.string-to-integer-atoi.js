/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
/*
要考虑以下几种情况：
1. 数字前后是空格
2. 正负号
3. 超过整型边界
*/
var myAtoi = function(str) {
  let i = 0, sign = 1, res = 0, MIN = -2147483648, MAX = 2147483647;
  
  while(str[i] === " ") i++;
  if(str[i] === '-' || str[i] === '+') { // 包括'+'是为了i++
    if(str[i] === '-') sign = -1;
    i++;
  }
  while(i < str.length && 
        str.charCodeAt(i) - 48 <= 9 && 
        str.charCodeAt(i)-48 >= 0) {
    res = res * 10 + (str.charCodeAt(i) - 48);
    i++;
  }
  res *= sign;
  if(res < MIN) return MIN;
  if(res > MAX) return MAX;
  return res;
};
// @lc code=end

