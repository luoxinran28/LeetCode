/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// Set
// var isHappy = function (n) {
//   let res = n;
//   let set = new Set();
//   while(res !== 1) {
//     let tmp = res;
//     res = 0;
//     while(tmp > 0) {
//       res += Math.pow(tmp % 10, 2);
//       tmp = Math.floor(tmp / 10);
//     }
//     if(set.has(res)) return false;
//     set.add(res);
//   }
//   return true;
// }

// Slow and fast
var isHappy = function(n) {
  let slow = n;
  let fast = getNextHappyNumber(n);
  while(slow !== fast) {
    slow = getNextHappyNumber(slow);
    fast = getNextHappyNumber(getNextHappyNumber(fast));
  }
  return slow === 1;
  
  function getNextHappyNumber(n) {
    let tmp = n;
    let res = 0;
    while(tmp > 0) {
      res += Math.pow(tmp % 10, 2);
      tmp = Math.floor(tmp / 10);
    }
    return res;
  }
};
// @lc code=end

