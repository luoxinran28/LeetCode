/**
 * @param {number[]} nums
 * @return {number}
 */
// Map length
var longestConsecutive = function(nums) {
  let map = new Map();
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) continue;
    let left = map.has(nums[i] - 1) ? map.get(nums[i] - 1) : 0;
    let right = map.has(nums[i] + 1) ? map.get(nums[i] + 1) : 0;
    let sum = left + right + 1;
    map.set(nums[i], sum);
    map.set(nums[i] - left, sum); // update left boundry
    map.set(nums[i] + right, sum); // right boundry
    max = Math.max(max, sum);
  }
  return max;
};

// Set
var longestConsecutive = function(nums) {
  let set = new Set(nums);
  let max = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      // left boundry
      let next = num + 1;
      while (set.has(next)) {
        next++;
      }
      max = Math.max(max, next - num);
    }
  }
  return max;
};
