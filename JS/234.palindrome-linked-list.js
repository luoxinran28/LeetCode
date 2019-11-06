/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
var isPalindrome = function(head) {
  if (head === null) return true;
  let mid = locateMiddle(head);
  let rev_head = reverseList(mid.next);
  return compareLists(head, rev_head);

  function compareLists(l1, l2) {
    while (l1 !== null && l2 !== null) {
      if (l1.val !== l2.val) return false;
      l1 = l1.next;
      l2 = l2.next;
    }
    return true;
  }

  function locateMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  function reverseList(head) {
    let cur = head;
    let pre = null;
    while (cur !== null) {
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    return pre;
  }
};
// @lc code=end
