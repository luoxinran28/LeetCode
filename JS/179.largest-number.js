/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  let sorted = nums;
  sorted.sort((a, b) => parseInt(`${b}${a}`) - parseInt(`${a}${b}`));
  return nums[0] === 0 ? '0' : sorted.join("");
};