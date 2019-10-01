/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.map = new Map(); // Hashtable
  this.head = { value: undefined, next: null, prev: null };
  this.tail = { value: undefined, next: null, prev: null };
  this.capacity = capacity;

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    let node = this.map.get(key);

    /* Remove from current position */
    node = this.map.get(key);
    node.prev.next = node.next;
    node.next.prev = node.prev;

    /* Put the node after the head */
    this.head.next.prev = node;
    node.next = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    return node.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node;
  if (this.get(key) === -1) {
    node = {
      key: key, // Used to delete
      value: value,
      prev: null,
      next: null
    };
    if (this.map.size === this.capacity) {
      this.map.delete(this.tail.prev.key);
      /* Remove the node before the tail */
      this.tail.prev = this.tail.prev.prev;
      this.tail.prev.next = this.tail;
    }
    this.map.set(key, node);
  } else {
    // Existed, remove from current position.
    node = this.map.get(key);
    node.value = value; // Update the value
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  /* Put the node after the head */
  this.head.next.prev = node;
  node.next = this.head.next;
  this.head.next = node;
  node.prev = this.head;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
