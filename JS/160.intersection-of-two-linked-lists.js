/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/*
两个指针从两条list开始走，走到头之后跳到对方的那头开始走，每次走一步，
它们会在交集点相遇。
*/
var getIntersectionNode = function(headA, headB) {
  if(headA === null || headB === null) return null;
  let a = headA, b = headB;
  while(a !== b) {
    a = (a === null) ? headB : a.next;
    b = (b === null) ? headA : b.next;
  }
  return a;
};
// @lc code=end

