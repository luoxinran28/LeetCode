/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (root === null) return 0;
  function dfs(root, sum) {
    if (root === null) return 0;
    // console.log(root.val,sum);

    return (
      (root.val === sum ? 1 : 0) +
      dfs(root.left, sum - root.val) +
      dfs(root.right, sum - root.val)
    );
  }
  return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};
