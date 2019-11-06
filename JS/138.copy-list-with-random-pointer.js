/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head === null) return head;
  let map = new Map();
  let cur_head = head;
  let new_head = new Node(head.val, null, null);
  let cur_new_head = new_head;
  map.set(cur_head, cur_new_head);
  while (cur_head.next !== null) {
    cur_new_head.next = new Node(cur_head.next.val, null, null);
    map.set(cur_head.next, cur_new_head.next);
    cur_head = cur_head.next;
    cur_new_head = cur_new_head.next;
  }
  cur_head = head;
  cur_new_head = new_head;
  while (cur_head !== null && cur_new_head !== null) {
    cur_new_head.random = map.get(cur_head.random) || null;
    cur_head = cur_head.next;
    cur_new_head = cur_new_head.next;
  }
  return new_head;
};
// @lc code=end
