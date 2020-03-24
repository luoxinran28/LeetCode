/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let results =[];

  helper([],nums, 0);
  return results;
  function helper(subset, nums, startIdx) {
    results.push(subset.slice());
    for(let i = startIdx; i < nums.length; i++) {
      subset.push(nums[i]);
      helper(subset, nums, i+1);
      subset.pop();      
    }

  }
};
// @lc code=end

