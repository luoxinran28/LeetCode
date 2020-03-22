/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
最基本的就是用map记录有多少个重复的，超过n/2之后直接返回nums[i]，
follow up的话可以只用一个变量，如果是nums[i]，count++，不是就count--，
当count=0的时候，更换记录的主要数值到当前数。
*/
var majorityElement = function(nums) {
  let map = new Map();
  let target = nums.length >> 1;
  for(let n of nums) {
    if(!map.has(n)) map.set(n, 0);
    if(map.get(n) > target + 1) continue;
    let c = map.get(n);
    map.set(n, c + 1);
    if(c + 1 > target) return n;
  }
  return -1;
};

var majorityElement = function(nums) {
  let count = 1;
  let major = nums[0];
  for(let n of nums) {
    if(major === n) {
      count++;
    } else {
      count--;
    }
    if(count === 0) {
      major = n;
      count++;
    } 
  }
  return major;
};
// @lc code=end

