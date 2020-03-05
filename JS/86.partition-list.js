/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let l1_dum = { next: null };
  let l2_dum = { next: null };
  let cur = head;
  
  let l1 = l1_dum;
  let l2 = l2_dum;
  while(cur !== null) {
    if(cur.val < x) {
      l1.next = new ListNode(cur.val);
      l1 = l1.next;
    } else {
      l2.next = new ListNode(cur.val);
      l2 = l2.next;
    }
    cur = cur.next;
  }
  l1.next = l2_dum.next;
  return l1_dum.next;
};
// @lc code=end

