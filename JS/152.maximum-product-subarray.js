/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
和 maximum subarray相似，区别在于两个负数相乘也可能得到最大的数，所以需要
两个变量记录到当前的最大值和最小值。maxToCur由nums[i], maxToCur * nums[i],
minToCur * nums[i]最大值得到，同理对于minToCur。初始化使用nums[0]。
*/

var maxProduct = function(nums) {
  if(nums === null || nums.length === 0) return 0;
  let maxToCur = nums[0];
  let minToCur = nums[0];
  let res = nums[0];
  for(let i = 1; i < nums.length; i++) {
    let nextMax = maxToCur * nums[i];
    let nextMin = minToCur * nums[i];
    maxToCur = Math.max(nums[i], nextMax, nextMin);
    minToCur = Math.min(nums[i], nextMax, nextMin);
    res = Math.max(maxToCur, res);
  }
  return res;
};
// @lc code=end

