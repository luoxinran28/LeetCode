/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
/*
直接插入到合适的BST的尾接点，注意如果root.va < val，应该走右边
*/
var insertIntoBST = function(root, val) {
  if(!root) return new TreeNode(val);
  if(root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};