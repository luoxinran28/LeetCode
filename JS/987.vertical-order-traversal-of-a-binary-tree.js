/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/discuss/301653/javascript-solution
// 要注意的是层级之间的交错，比如例子[0,2,1,3,null,null,null,4,5,null,7,6,null,10,8,11,9]，
// 输出可以是 [[4,10,11],[3,7,6],[2,5,8,9],[0],[1]] 或者 [[4,11,10],[3,6,7],[2,5,9,8],[0],[1]]
// 但不能交叉在一起，所以需要纵向的一个排序
// 时间复杂度近似于O(nlogn)
var verticalTraversal = function(root) {
  if(root === null || root.length === 0) return [];
  let q = [[root, 0, 0]];
  let map = {};
  while(q.length > 0) {
    let [cur, x, y] = q.shift();
    if(!(x in map)) map[x] = [];

    map[x].push([cur.val, y]);
    if(cur.left !== null) {
      q.push([cur.left, x - 1, y + 1]);
    }
    if(cur.right !== null) {
      q.push([cur.right, x + 1, y + 1]);
    }
  }
  
  return Object.keys(map)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((key) => map[key]
            .sort(compare)
            .map(([val, y]) => val));
  
  
  function compare([val1, y1], [val2, y2]) {
    if (y1 !== y2) {
      return y1 - y2;
    }
    return val1 - val2;
  }
};