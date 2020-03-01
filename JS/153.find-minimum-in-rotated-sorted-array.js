/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let start = 0, end = nums.length - 1, mid;
  let target = nums[end];
  
  while(start + 1 < end) {
    mid = start + Math.floor((end - start) /2);
    if(nums[mid] < target) end = mid;
    else start = mid;
  }
  return Math.min(nums[start], nums[end]);
};