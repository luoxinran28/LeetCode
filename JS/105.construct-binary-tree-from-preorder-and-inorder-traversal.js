/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
Pre可以找到当前的根是什么，而In里面可以找到当前子树包含什么元素，如果
pre[0]是根，找到In里面pre[0]的元素比如in[5]，那么in[0...4]是左子树，
in[5...7]就是右子树。要注意右子树的根在pre里面是要跳过所有左子树节点的。
*/
var buildTree = function(preorder, inorder) {
  
  return dfs(0, 0, inorder.length - 1);
  
  function dfs(startPre, startIn, endIn) {
    if(startIn > endIn || startPre >  preorder.length - 1) {
      return null;
    }
    let root = new TreeNode(preorder[startPre]);
    let i = startIn;
    while(i <= endIn) {
      if(preorder[startPre] === inorder[i]) break;
      i++;
    }
    
    let sizeOfLeftTree = i - startIn; // 跳过所有左子树节点。
    root.left = dfs(startPre + 1, startIn, i - 1);
    root.right = dfs(startPre + sizeOfLeftTree + 1, i + 1, endIn);
    return root;
  }
};
// @lc code=end

