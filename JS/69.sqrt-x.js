/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let _floor = Math.floor.bind(Math);
  let _abs = Math.abs.bind(Math);
  let left = 0, right = x;
  let diff = 1;
  // let diff = 1e-12;
  while(left + diff < right) {
    let mid = _floor((left + right) / 2);
    if(mid * mid < x) {
      left = mid;
    } else {
      right = mid;
    }
  }
  if(right * right === x) return _floor(right);
  else
    return _floor(left);
};
// @lc code=end

