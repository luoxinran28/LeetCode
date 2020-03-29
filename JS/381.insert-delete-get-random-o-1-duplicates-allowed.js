/*
 * @lc app=leetcode id=381 lang=javascript
 *
 * [381] Insert Delete GetRandom O(1) - Duplicates allowed
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
/*
用map存储位置，key是当前val，而value是一个数组用来存储duplicates，
用数组data存储数据，每个元素是一个pair，第一个值是val，
第二个值是在map中所在数组的index，可以用来更新被置换后新的val所在位置。
*/
var RandomizedCollection = function() {
  this.data = [];
  this.map = new Map();
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  if(!this.map.has(val)) this.map.set(val, []);
  let arrInMap = this.map.get(val);
  arrInMap.push(this.data.length);
  this.map.set(val, arrInMap);
  this.data.push([val, arrInMap.length - 1]);
  
  return true;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  if(!this.map.has(val)) return false;
  
  let targetIdx = this.map.get(val).pop(); // 删掉map中val所在数组最后一个
  if(this.map.get(val).length === 0) this.map.delete(val); // 如果是空的就要删除
  
  let lastIdx = this.data.length - 1;
  if(targetIdx === lastIdx) { // 如果是最后一个，不需要去完成后面的步骤，避免map添加多一个元素
    this.data.pop();
    return true;
  }
  
  let swappedVal = this.data[lastIdx][0];
  let swappedIdx = this.data[lastIdx][1];
  
  swap(this.data, targetIdx, lastIdx);
  
  this.data.pop();
  this.map.get(swappedVal)[swappedIdx] = targetIdx; // 更新被置换的val在map中数组所在位置
  
  return true;
  
  function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  let idx = Math.floor(Math.random() * this.data.length);
  return this.data[idx][0];
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

