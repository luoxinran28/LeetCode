/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
/*
快慢指针找到交点，在慢指针和start指针相遇返回位置。
*/
var detectCycle = function(head) {
  if(head === null || head.next === null) return null;
  let slow = head;
  let fast = head;        
  let start = head;

  while(fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if(slow == fast) { // 找到之后slow和start的指针开始走，他们相遇就是需要的点
        while(slow !== start) {
          slow = slow.next;
          start = start.next;
        }
        return slow;
      }
  }
  return null;
};
// @lc code=end

