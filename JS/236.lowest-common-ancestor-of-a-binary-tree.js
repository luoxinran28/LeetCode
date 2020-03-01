/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/*
回溯法，找到p或者q的点之后返回，如果左右子树都有返回接点，说明找到了目标，立马返回当前节点作为
共同祖先。
*/
var lowestCommonAncestor = function(root, p, q) {
  if(!root) {
    return null;
  }
  if(root === p || root === q) {
    return root;
  }
  
  let left = lowestCommonAncestor(root.left, p, q); // 返回左子树的目标
  let right = lowestCommonAncestor(root.right, p, q); // 返回右子树的目标
 
  if(left !== null && right !== null) return root;
  if(left !== null) return left;
  if(right !== null) return right;
  return null;
};