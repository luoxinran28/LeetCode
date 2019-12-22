/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let cur = 0; // pointing to non-zero elements
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) continue;
    swap(nums, cur++, i);
  }
  return nums;
  
  function swap(nums, a, b) {
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  }
};