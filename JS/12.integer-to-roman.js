/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function(num) {
//   const _floor = Math.floor.bind(Math);
//   const I = ["", "I", "II", "III", "IV", "V", "VI","VII","VIII","IX"];
//   const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
//   const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
//   const M = ["", "M", "MM", "MMM"];
//   return M[_floor(num/1000)] + C[_floor(num%1000/100)] + X[_floor(num%100/10)] + I[num%10];
// };

var intToRoman = function(num) {
  const _floor = Math.floor.bind(Math);
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const chars = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let i = 0;
  let res = "";
  while (num > 0) {
    let times = _floor(num / nums[i]);
    num -= nums[i] * times;
    while (times > 0) {
      res += chars[i];
      times--;
    }
    i++;
  }
  return res;
};
// @lc code=end
