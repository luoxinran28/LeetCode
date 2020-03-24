/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let results = [];
  let visited = [];
  dfs(nums.slice(), [], 0);
  
  function dfs(nums, subset) {
    if(nums.length === subset.length) {
      results.push(subset.slice());
      return ;
    }
    for(let i = 0; i < nums.length; i++) {
      if(visited[i]) continue;
      subset.push(nums[i]);
      visited[i] = true;
      dfs(nums, subset);
      subset.pop();
      visited[i] = false;
    }
  }
  return results;
};
// @lc code=end

