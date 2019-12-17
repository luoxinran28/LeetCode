/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 九章模板，通过改变nums[mid] <= target 的等于条件来找到左右边界bound，等号在右边就是左边界，在左边就是右边界
var searchRange = function(nums, target) {
  let res = [];
  let left = 0, right = nums.length - 1;
  while(left + 1 < right) {
    let mid = Math.floor((right + left) / 2);
    if(nums[mid] >= target) {
      right = mid;
    } else {
      left = mid;
    }
  } 
  
  if(nums[left] === target) {
    res.push(left); 
  } else if(nums[right] === target) {
    res.push(right);
  } else {
    return [-1, -1];
  }

  left = 0, right = nums.length - 1;
  while(left + 1 < right) {
    let mid = Math.floor((right + left) / 2);
    if(nums[mid] <= target) {
      left = mid;
    } else {
      right = mid;
    }
  } 
  
  if(nums[right] === target) {
    res.push(right); 
  } else if(nums[left] === target) {
    res.push(left);
  } else {
    return [-1, -1];
  }
  return res;

};