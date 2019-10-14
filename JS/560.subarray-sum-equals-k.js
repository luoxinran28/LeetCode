/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function(nums, k) {
//   let res = 0;
//   let len = nums.length;
//   let prefix = Array.from({length: len}).fill(0);
//   for(let i = 1; i < len; i++) {
//     prefix[i] = nums[i-1] + prefix[i-1];
//   }

//   for(let start = 0; start < len; start++) {
//     for(let end = start; end < len; end++) {
//       let i = start;
//       let subarray = [];

//       /* Brute force: */
//       // for(i=start; i <= end; i++) {
//       //   subarray.push(nums[i]);
//       // }
//       // let sum = 0;
//       // for(let s of subarray) sum += s;
//       // if(sum === k) res++;

//       /* Use prefix_sum array: */
//       let sum = (end + 1 < len) ? prefix[end+1] - prefix[start] : prefix[end] - prefix[start] + nums[len-1];
//       if(sum === k) res++;
//     }
//   }
//   return res;
// };

// Prefix_sum + hash map:
// sum[i, j] = sum[0, j] - sum[0, i - 1] (hashed)
var subarraySum = function(nums, k) {
  let res = 0;
  let sum = 0;
  let len = nums.length;
  let preSum = new Map();
  preSum.set(0, 1);
  // console.log(preSum);
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    res += preSum.get(sum - k) || 0;
    preSum.set(sum, (preSum.get(sum) || 0) + 1);
  }

  // console.log(preSum);
  return res;
};
// @lc code=end
