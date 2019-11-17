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

// Lint code:
const longestConsecutive = function(num) {
  if (num === null || num.length === 0) return 0;
  let len = num.length;
  let set = new Set();
  let max = Number.MIN_VALUE;

  num.forEach(n => set.add(n));

  for (let i = 0; i < len; i++) {
    if (set.has(num[i])) {
      set.delete(num[i]);
      let left = num[i] - 1;
      let right = num[i] + 1;
      while (set.has(left)) {
        set.delete(left);
        left--;
      }
      while (set.has(right)) {
        set.delete(right);
        right++;
      }
      max = Math.max(max, right - left - 1); // Because l anr r moved one extra step
    }
  }
  return max;
};
