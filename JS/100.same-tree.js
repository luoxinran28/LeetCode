/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 类似于101. Symmetric Tree，对比当前两棵树接点，如果都是空，true，有一个不为空，false
// 比较当前节点val，相同就去下一层，不同返回false
var isSameTree = function(p, q) {
  if(p === null || q === null) {
    return p === null && q === null;
  }
  if(p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return false;
};