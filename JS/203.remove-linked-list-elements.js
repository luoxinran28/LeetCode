/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function(head, val) {
  if (!head) return null;
  let begin = { next: head };
  begin.next = head;
  let pre = begin;
  let cur = pre.next;
  while (cur !== null) {
    if (cur.val === val) {
      pre.next = cur.next;
    } else {
      pre = pre.next;
    }
    cur = cur.next;
  }
  return begin.next;
};
