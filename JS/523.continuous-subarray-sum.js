/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  if(nums === null || nums.length <= 1) return false;
  // Two continuous "0" will form a subarray which has sum = 0. 0 * k == 0 will always be true.
  for(let i = 0; i < nums.length - 1; i++) {
    if(nums[i] === 0 && nums[i + 1] === 0) return true; 
  }
  if(k === 0) return false;
  let map = new Map();
  map.set(0, -1); // When found the remain equals 0, return true
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let remain = sum % k;
    if(map.has(remain)) {
      if(i - map.get(remain) > 1) return true;
    } else {
      map.set(remain, i);
    }
  }
  return false;
};