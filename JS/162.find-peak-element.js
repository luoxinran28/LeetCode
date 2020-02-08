/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0, right = nums.length - 1;
  while(left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if(nums[mid] < nums[mid + 1]) {
      left = mid; // Choose right side
    } else {
      right = mid;
    }
  }
  if(nums[left] < nums[right]) {
    return right
  } else {
    return left;
  }
};