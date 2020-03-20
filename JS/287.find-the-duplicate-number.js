/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*和Linked List Cycle 一样的做法*/
var findDuplicate = function(nums) {
  if(nums === null || nums.length === 0) return -1;
  if(nums.length === 1) return nums[0];
  let slow = nums[0], fast = nums[nums[0]];
  
  while(slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  
  let start = 0;
  while(start !== slow) {
    slow = nums[slow];
    start = nums[start];
  }
  return start;
};
// @lc code=end

