/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*

Numbers:     2    3    4     5
Lefts:       1    2  2*3 2*3*4
Rights:  3*4*5  4*5    5     1


*/
var productExceptSelf = function(nums) {
  let len = nums.length;
  let lefts = [1];

  for (let i = 1; i < len; i++) {
    lefts[i] = lefts[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let i = len - 1; i >= 0; i--) {
    lefts[i] = right * lefts[i];
    right = right * nums[i];
  }
  return lefts;
};
