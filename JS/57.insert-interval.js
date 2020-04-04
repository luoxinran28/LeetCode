/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
/*
三部分，前半部分不需要merge，找到merge那部分，剩下的部分，在merge那部分，要注意可能
有连续的intervals被merge，当前interval的开始小于等于newInterval的结束，都是需要
被merge的
*/
var insert = function(intervals, newInterval) {
  let i = 0;
  let n = intervals.length;
  let res = [];
  
  while(i < n && intervals[i][1] < newInterval[0]) { // 不需要merge的前半部分
    res.push(intervals[i]);
    i++;
  }
  /*
  当前i已经指向了需要merge的intervals[i]，如果接下来的interval开始小于等于newInterval的结束，
  都需要merge
  */ 
  while(i < n && intervals[i][0] <= newInterval[1]) { // 找到需要merge的部分
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  res.push(newInterval);
  while(i < n) { // 剩下的
    res.push(intervals[i]);
    i++;
  }
  
  return res;
};
// @lc code=end

