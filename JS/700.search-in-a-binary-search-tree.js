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
var searchBST = function(root, val) {
  let res = null;
  function dfs(root, val) {
    if(root === null) return ;
    if(root.val == val){
      res = root;
      return;
    }
    if(res === null && root.left){
        dfs(root.left, val);    
    }
    if(res === null  && root.right){
        dfs(root.right, val);    
    }
  }
  dfs(root, val);
  return res;
};