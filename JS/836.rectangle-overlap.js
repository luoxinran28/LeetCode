/*
 * @lc app=leetcode id=836 lang=javascript
 *
 * [836] Rectangle Overlap
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
// https://leetcode.com/problems/rectangle-overlap/discuss/132340/C%2B%2BJavaPython-1-line-Solution-1D-to-2D
var isRectangleOverlap = function(rec1, rec2) {
  return rec1[0] < rec2[2] && rec2[0] < rec1[2] && rec1[1] < rec2[3] && rec2[1] < rec1[3];
};
// @lc code=end

