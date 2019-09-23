/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

var reverseBetween = function(head, m, n) {
  const dum = { next: head };
  let pre = dum;
  let start = dum;
  while (--m) {
    pre = pre.next;
    n--;
  }
  let cur = pre.next;

  // 1 -> 2 -> 3 -> 4 -> 5
  // 1 -> 3 -> 2 -> 4 -> 5
  // 1 -> 4 -> 3 -> 2 -> 5
  // 1 -> 5 -> 4 -> 3 -> 2
  // pre -> start -> next -> next.next
  // pre -> next -> start -> next.next
  while (--n) {
    let next = cur.next;
    cur.next = next.next;
    next.next = pre.next; // it has too be pre.next because pre is fixed at begining
    pre.next = next; // update the pointer so pre is pointing to the inserted value
  }
  return dum.next;
};
