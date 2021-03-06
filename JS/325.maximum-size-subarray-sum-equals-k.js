/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 用map记录前i个元素的前缀和presum以及和对应的最大终点位置，如果curSum - k等于prevSum，
// 说明找到了目标
var maxSubArrayLen = function(nums, k) {
  let sum = 0;
  let map = new Map();
  let max = Number.MIN_VALUE;
  map.set(0, -1);
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if(map.has(sum - k)) {
      max = Math.max(max, i - map.get(sum - k));
    }
    if(!map.has(sum)) {
      map.set(sum, i);
    }
  }
  return max;
};