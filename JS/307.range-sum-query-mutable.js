/**
 * @param {number[]} nums
 */

var NumArray = function(nums) {
  this.n = nums.length;
  this.tree = buildTree(nums, this.n);
  function buildTree(nums, n) {
    let tree = [...Array(n * 2)].fill(0);
    for (let i = n, j = 0;  i < 2 * n; i++,  j++)
      tree[i] = nums[j];
    for (let i = n - 1; i > 0; --i)
      tree[i] = tree[i * 2] + tree[i * 2 + 1];
    return tree;
  }
  console.log(this.tree);
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  i += this.n;
  this.tree[i] = val;
  while(i > 0) { // Update the sum
    let left = i;
    let right = i;
    if(i % 2 === 0) { // if it's even, it means the current should be left
      right = i + 1;
    } else {
      left = i - 1;
    }
    this.tree[Math.floor(i / 2)] = this.tree[left] + this.tree[right];
    i = Math.floor(i / 2);
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  i += this.n;
  j += this.n;
  let sum = 0;
  while(i <= j) {
    if((i % 2) === 1) {
      sum += this.tree[i];
      i++;
    }
    if((j % 2) === 0) {
      sum += this.tree[j];
      j--;
    }
    i = Math.floor(i / 2);
    j = Math.floor(j / 2);
  }
  return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */