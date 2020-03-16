/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/*
经典双指针，左指针指到1应该的位置，右指针指向2应该的位置
*/
var sortColors = function(nums) {
  if(nums === null || nums.length === 0) return [];
  let left = 0, right = nums.length - 1;
  for(let i = 0; i <= right;) {
    if(nums[i] === 0) {
      swap(nums, i, left);
      left++;
      i++;
    } else if(nums[i] === 2) {
      swap(nums, i, right);
      right--; // 这里i不增加，比如[2,0,1,2]这种情况，
    } else {
      i++;
    }
  }
  return nums;
  
  function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp
  }
};
// @lc code=end

