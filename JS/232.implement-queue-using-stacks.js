/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.push_st = [];
  this.pop_st = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.push_st.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if(this.peek()) return this.pop_st.pop();
  return null;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if(this.pop_st.length === 0) {
    while(this.push_st.length > 0) {
      this.pop_st.push(this.push_st.pop());      
    }
  }
  return this.pop_st[this.pop_st.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.push_st.length === 0 && this.pop_st.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */