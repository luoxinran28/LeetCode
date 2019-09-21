/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
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
 * @return {number}
 */

// var rob = function(root) {
//   // let map = new Map();
//   function dfs(root) {
//     if(root === null) return 0;
//     // if(map.has(root)) return map.get(root);
//     let val = 0;
//     if(root.left) val += dfs(root.left.left) + dfs(root.left.right);
//     if(root.right) val += dfs(root.right.left) + dfs(root.right.right);
//     // map.set(root, val);
//     return Math.max(val+root.val, dfs(root.left)+dfs(root.right));
//   }

//   return dfs(root);
// };

var rob = function(root) {
  function dfs(root) {
    if (root === null) return [0, 0];
    const [left_robbed, left_not_robbed] = dfs(root.left);
    const [right_robbed, right_not_robbed] = dfs(root.right);

    const robbed = root.val + left_not_robbed + right_not_robbed; // Rob the current root
    const not_robbed =
      Math.max(left_robbed, left_not_robbed) +
      Math.max(right_robbed, right_not_robbed);
    return [robbed, not_robbed];
  }

  return Math.max(...dfs(root));
};
