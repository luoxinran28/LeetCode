/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
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
var insertionSortList = function(head) {
  let begin = { val: -Number.MAX_VALUE, next: null };
  let cur = head;
  let pre = begin;
  let next = null;
  while (cur !== null) {
    /* Before insert, the prev is at the last node of the sorted list.
           Only the last node's value is larger than the current inserting node 
           should we move the temp back to the head*/

    if (pre.val >= cur.val) pre = begin;
    next = cur.next;
    //find the right place to insert
    while (pre.next !== null && pre.next.val < cur.val) {
      pre = pre.next;
    }
    //insert between pre and pre.next
    cur.next = pre.next;
    pre.next = cur;
    cur = next;
  }
  return begin.next;
};
