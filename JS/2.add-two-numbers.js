/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let sum = 0;
  const begin = new ListNode();
  let cur = begin;
  while (l1 !== null || l2 !== null) {
    sum = Math.floor(sum / 10);
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
  }
  if (Math.floor(sum / 10) > 0) cur.next = new ListNode(1);
  return begin.next;
};
// @lc code=end
