/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
// Fast & slow
// var hasCycle = function(head) {
//     if(head === null) return false;
//     let slow = head;
//     let fast = head;
//     while(fast.next !== null && fast.next.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;
//         if(slow == fast) return true;
//     }
//     return false;
// };

// Visited
var hasCycle = function(head) {
  if (head === null) return false;
  let visited = new Set();
  while (head !== null) {
    if (visited.has(head)) return true;
    visited.add(head);
    head = head.next;
  }
  return false;
};
// @lc code=end
