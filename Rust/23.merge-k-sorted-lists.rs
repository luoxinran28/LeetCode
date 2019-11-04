/*
 * @lc app=leetcode id=23 lang=rust
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
use std::cmp::Ordering;
use std::collections::BinaryHeap; // BinaryHeap is Max Heap in default

impl PartialOrd<ListNode> for ListNode {
    fn partial_cmp(&self, other: &ListNode) -> Option<Ordering> {
        other.val.partial_cmp(&self.val)
    }
}

impl Ord for ListNode {
    fn cmp(&self, other: &Self) -> Ordering {
        other.val.cmp(&self.val)
    }
}

impl Solution {
    pub fn merge_k_lists(lists: Vec<Option<Box<ListNode>>>) -> Option<Box<ListNode>> {
        let mut res = Box::new(ListNode::new(0));
        if lists.len() == 0 {
            return None;
        }
        let mut minHeap = BinaryHeap::new();
        for mut list in lists {
            if list.is_some() {
                minHeap.push(list.take()?); // Storing as Option<Box<ListNode>>
            }
        }
        let mut cur = &mut res;
        while !minHeap.is_empty() {
            cur.next = minHeap.pop(); // Return as Option<Box<ListNode>>
            cur = cur.next.as_mut()?;
            if cur.next.is_some() {
                minHeap.push(cur.next.take()?);
            }
        }
        res.next
    }
}
// @lc code=end

