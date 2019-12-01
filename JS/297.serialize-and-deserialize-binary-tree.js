/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if(root === null) return "";
  let q = [root];
  let res = "";
  while(q.length > 0) {
    let cur = q.shift();
    if(cur === null) {
      res += "null ";
    } else {
      res += cur.val + " ";
      q.push(cur.left);
      q.push(cur.right);
    }
  }
  return res;
};



/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if(data === "") return null;
  let data_arr = data.split(" ");
  let q = [];
  let root = new TreeNode(data_arr[0]);
  q.push(root);
  for(let i = 1; i < data_arr.length; i++) {
    let cur = q.shift();
    if(!cur) continue;
    if(data_arr[i] !== "null") {
      let left = new TreeNode(data_arr[i]);
      cur.left = left;
      q.push(left);
    }
    i++;
    if(i < data_arr.length && data_arr[i] !== "null") {
      let right = new TreeNode(data_arr[i]);
      cur.right = right;
      q.push(right);
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */