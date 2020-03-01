/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
/*

这题做法有些取巧，并不是真正意义上在内存里面删除不符合区间的Node，只是将Node的指向进行的更改，大致思路：

每一层的Condition有三种：

1. root.val小于区间的lower bound L，则返回root.right subtree传上来的root，这里就变相的'删除'掉了当前root和所有root.left的node
2. root.val大于区间的upper bound R，则返回root.left subtree传上来的root
3. 满足区间，则继续递归

当递归走到叶子节点的时候，我们向上返回root，这里return root的定义是：
返回给parent一个区间调整完以后的subtree

Time Complexity O(N)
Space Complexity O(1)
*/
var trimBST = function(root, L, R) {

  if(root === null || L > R) return res;  
  return dfs(root);
  
  function dfs(root) {
    // 每一层的Condition
    if(root === null) return null;
    if(root.val < L) {
      return dfs(root.right, L, R)
    } else if(root.val > R) {
      return dfs(root.left, L, R);
    } else { // 在区间内，正常的Recursion
      root.left = dfs(root.left, L, R);
      root.right = dfs(root.right, L, R);
    }
    return root; // 返回给parent一个区间调整完以后的subtree
  }
  
};