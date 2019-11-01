/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let res = [];
  if (!intervals || intervals.length === 0) return res;
  intervals.sort((a, b) => a[0] - b[0]);
  // console.log(intervals);
  let sol = intervals[0];
  res.push(sol);
  for (let interval of intervals) {
    if (sol[1] < interval[0]) {
      sol = interval;
      res.push(sol);
    } else {
      // merge
      sol[1] = Math.max(sol[1], interval[1]); // also update the result
    }
  }
  return res;
};
// @lc code=end
