/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let cur = 0; // pointing to the target val elements
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === val) continue;
    swap(nums, cur++, i);
  }
  return cur;
  
  function swap(nums, a, b) {
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  }
};