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

// // Traversal: DFS
var preorderTraversal = function(root) {
  let result = [];
  if (_.isEmpty(root)) return result;
  dfs(root, result);

  function dfs(root, result) {
    if (_.isEmpty(root)) {
      return;
    }
    result.push(root.val);
    dfs(root.left, result);
    dfs(root.right, result);
  }
  return result;
};

// // Traversal: Divide & Conquer
var preorderTraversal = function(root) {
  let result = [];
  if (_.isEmpty(root)) return result;
  let left = preorderTraversal(root.left);
  let right = preorderTraversal(root.right);
  result = result.concat(root.val, left, right);
  return result;
};

// Stack in while loop
var preorderTraversal = function(root) {
  let stack = [root],
    result = [];
  if (!root) return result;
  while (stack.length) {
    let node = stack.pop();
    result.push(node.val);
    if (node.right !== null) stack.push(node.right);
    if (node.left !== null) stack.push(node.left);
  }
  return result;
};

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
var inorderTraversal = function(root) {
  if (!root) return [];
  let stack = [];
  let result = [];
  while (root !== null || stack.length > 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
};

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

// Recursion
var postorderTraversal = function(root) {
  let result = [];
  dfs(root);
  function dfs(root) {
    if (root === null) return;
    dfs(root.left);
    dfs(root.right);
    result.push(root.val);
  }
  return result;
};

var postorderTraversal = function(root) {
  if (!root) return [];
  let result = [];
  let stack = [root];

  while (stack.length > 0) {
    root = stack.pop();
    result.splice(0, 0, root.val);
    if (root.left !== null) stack.push(root.left);
    if (root.right !== null) stack.push(root.right);
  }
  return result;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// Compare with the root value
var isValidBST = function(root) {
  function dfs(root, min, max) {
    if (!root) return true;
    if (
      (min !== null && root.val <= min) || // right tree
      (max !== null && root.val >= max)
    )
      // left tree
      return false;
    return (
      dfs(root.left, min, root.val) && dfs(root.right, root.val, max) // go to left
    ); // go to right
  }
  return dfs(root, null, null);
};

// In order
var isValidBST = function(root) {
  let prev = null;
  function dfs(root) {
    if (!root) return true;
    if (!dfs(root.left)) return false;
    if (prev && prev.val >= root.val) return false;
    prev = root;
    return dfs(root.right);
  }
  return dfs(root);
};

var isValidBST = function(root) {
  if (!root) return true;
  let stack = [];
  let prev = null;
  while (root !== null || stack.length > 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (prev !== null && prev.val >= root.val) return false;
    prev = root;
    root = root.right;
  }
  return true;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// BFS
var isSymmetric = function(root) {
  if (!root) return true;
  let qLtr = [root];
  let qRtl = [root];
  while (qLtr.length > 0 || qRtl.length > 0) {
    let n1 = qLtr.shift();
    let n2 = qRtl.shift();
    if (!n1 && !n2) continue;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    qLtr.push(n1.left);
    qLtr.push(n1.right);
    qRtl.push(n2.right);
    qRtl.push(n2.left);
  }
  return true;
};

// DFS: divide & conquer
var isSymmetric = function(root) {
  if (!root) return true;

  function dfs(l, r) {
    if (!l && !r) return true;
    if (!l || !r || l.val !== r.val) return false;
    return dfs(l.left, r.right) && dfs(l.right, r.left);
  }

  return dfs(root.left, root.right);
};
