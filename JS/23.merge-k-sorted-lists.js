/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/*
可以用merge sort的算法divide & conquer，分到最小两个数组再合并起来，follow up 可以用
heap存lists.length个头结点
*/
var mergeKLists = function(lists) {
  if(lists === null || lists.length === 0) return null;
  return merge(lists, 0, lists.length - 1);
  
  function merge(lists, left, right) {
    if(left === right) {
      return lists[left];
    } else if(left < right) {
      let mid = (left + right) >>> 1;
      let l = merge(lists, left, mid);
      let r = merge(lists, mid + 1, right);
      return mergeTwoSortedLists(l, r);
    } else {
      return null;
    }
  }
  
  function mergeTwoSortedLists(l1, l2) {
    let dummy = { next: null };
    let cur = dummy;
    while(l1 !== null && l2 !== null) {
      if(l1.val < l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }
      cur = cur.next;
    }
    if(l1 !== null) cur.next = l1;
    if(l2 !== null) cur.next = l2;
    return dummy.next;
  }
};
// @lc code=end

