/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
// 类似于100. Same Tree，先判断s和t是否相同，不同则分别递归判断左子树或者右子树，
// 时间复杂度是O(m * n)，m和n是s、t的大小。
var isSubtree = function(s, t) {
  if(s === null) return false;
  if(isSameTree(s, t)) return true;
  return isSubtree(s.left, t) || isSubtree(s.right, t);
  
  function isSameTree (p, q) {
    if(p === null || q === null) {
      return p === null && q === null;
    }
    if(p.val === q.val) {
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    return false;
  };
};