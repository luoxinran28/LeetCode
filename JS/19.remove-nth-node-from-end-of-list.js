/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (n === 0) return head;
  let begin = { next: head };
  let fast = begin,
    slow = begin;
  for (let i = n; i > 0; i--) {
    if (fast === null) break;
    fast = fast.next;
  }
  while (fast !== null && fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  console.log(slow.next.val);
  slow.next = slow.next.next;
  return begin.next;
};
