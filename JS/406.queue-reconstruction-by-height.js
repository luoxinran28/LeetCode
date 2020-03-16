/*
 * @lc app=leetcode id=406 lang=javascript
 *
 * [406] Queue Reconstruction by Height
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
/*
扫面线，先理解题意，k代表前面有多少人，比如[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
中的[5,2]说明前面两个人[5,0]、[7,0]有两个人比自己高或一样高。首先想想这个list里面最高是多高，
从高到低进行一个排序，相同高度的根据k进行排序，这样排序后得到[[7,0], [7,1], [6,1], [5,0], 
[5, 2], [4,4]]，相同高度的相对位置在最后的输出中位置是不变的，那么我们就需要根据k的值不断插入
节点，由于高的已经排好序了，只要根据k插入就保证了有k个人在前面。
*/
var reconstructQueue = function(people) {
  if(people === null || people.length === 0) return [];
  people = people.sort( (a, b) => { return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0] });
  
  let res = [];
  for(let i = 0; i < people.length; i++) {
    res.splice(people[i][1], 0, people[i]); // 将当前people插入到k的位置
  }
  return res;
  
};
// @lc code=end

