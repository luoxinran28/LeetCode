/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/*
最简单直接的思路就是进行三次DFS, 分别把左边界, 叶子, 右边界放到答案序列中.

  左边界: 从根的左子节点开始, 优先向左, 没有左子节点就向右, 直到叶子节点, 沿路的所有节点放入答案序列
  叶子节点: 遍历整棵树, 为了保证逆时针顺序, 需要先访问左子节点, 碰到叶子就放入答案序列
  右边界: 与左边界类似, 只不过将节点放入答案序列的时机要延后 -- 在递归结束时放入
  
root.left === null && right.right === null 表明是叶子。
*/
var boundaryOfBinaryTree = function(root) {
  let res = [];
  if(root === null) return res;
  res.push(root.val);
  if((root.left === null && root.right === null)) {
    return res;
  }
  dfsLeft(root.left);
  dfsLeaves(root);
  dfsRight(root.right);
  return res;
  
  function dfsLeft(root) {
    if(root === null || (root.left === null && root.right === null)) return;
    res.push(root.val);
    if(root.left !== null) dfsLeft(root.left);
    else dfsLeft(root.right);
  }
  
  function dfsLeaves(root) {
    if(root === null) return;
    if((root.left === null && root.right === null)) {
      res.push(root.val);
      return;
    }
    dfsLeaves(root.left);
    dfsLeaves(root.right);
  }
  
  function dfsRight(root) {
    if(root === null || (root.left === null && root.right === null)) return;
    if(root.right !== null) dfsRight(root.right);
    else dfsRight(root.left);
    res.push(root.val);
  }
};