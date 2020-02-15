/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 要达到O(n)的时间复杂度，就要用双端队列实现，队列中保持递减的特性，头部就是window最大值，例如：
// nums = [1, 3, -1, -3, 5, 3, 6, 7], and k = 3
// Monotonic queue  max
// [1]              -
// [3]              -
// [3, -1]          3
// [3, -1, -3]      3
// [5]              5
// [5, 3]           5
// [6]              6
// [7]              7
var maxSlidingWindow = function(nums, k) {
  if(nums === null || nums.length === 0) return [];
  let res = [];
  let deq = [];
  for(let right = 0; right < nums.length; right++) {
    // console.log(deq);
    while(deq.length - 1 >= 0 && (nums[right] > deq[deq.length - 1])) deq.pop(); // Descending order
    deq.push(nums[right]);
    let left = right - k + 1; // left bound of the window
    if(left >= 0) {
      res.push(deq[0]); // the first element of deque is always the max
      if(deq[0] === nums[left]) deq.shift(); // when window left is the max
    }
  }
  return res;
};