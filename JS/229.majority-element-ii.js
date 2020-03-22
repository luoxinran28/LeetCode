/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
用两个count来记录两个candidates，不断删除非candidates的数量剩下的两个candidates就是
数组中最多的数，再进行一次扫描确定candidates超过n/2个数。如果有两个candidates，这两个
的数量占了总数的2/3以上，所以最多只有两个数为结果。
*/
var majorityElement = function(nums) {
  if(nums === null || nums.length === 0) return [];
  
  let count1 = 0, count2 = 0, can1 = 0, can2 = 1;
  
  for(let n of nums) {
    if(can1 === n) {
      count1++;
    } else if(can2 === n) {
      count2++;
    } else if(count1 === 0) {
      can1 = n;
      count1 = 1;
    } else if(count2 === 0) {
      can2 = n;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
  
  let target = Math.floor(nums.length / 3), res = [];
  count1 = 0;
  count2 = 0;
  for(let n of nums) {
    if(can1 === n) count1++;
    if(can2 === n) count2++;
  }
  if(count1 > target) res.push(can1);
  if(count2 > target) res.push(can2);
  return res;
};
// @lc code=end

