/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let begin = { next: head };
  let pre = begin;
  let cur = pre.next;
  while (cur !== null && cur.next !== null) {
    let next = cur.next;
    if (cur.val === next.val) {
      while (next !== null && cur.val === next.val) {
        cur = next;
        next = next.next;
      }
      pre.next = next;
      cur = next;
    } else {
      pre = cur;
      cur = next;
    }
  }
  return begin.next;
};
