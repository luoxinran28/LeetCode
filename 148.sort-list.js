/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
 * @return {ListNode}
 */
var sortList = function(head) {
  if(head === null || head.next === null) return head;
  
  let slow = head, fast = head.next; // 需要先走一步，原因是，对于偶数长度，mid 可以在一半的地方分割
  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let mid = slow.next;
  slow.next = null; // 注意割断
    
  let l1 = sortList(head);
  let l2 = sortList(mid);
  return mergeTwoLists(l1, l2);
  
  function mergeTwoLists(L1, L2) {
    let dummy = new ListNode(0);
    let cur = dummy;    
    while(L1 !== null && L2 !== null) {
      if(L1.val < L2.val) {
        cur.next = L1;
        L1 = L1.next;
      } else {
        cur.next = L2;
        L2 = L2.next;
      }
      cur = cur.next;
    }
    if(L1 !== null) cur.next = L1;
    if(L2 !== null) cur.next = L2;
    return dummy.next;
  }
};
// @lc code=end

