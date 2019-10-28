/*
 * @lc app=leetcode id=3 lang=rust
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        use std::collections::HashMap;
        use std::cmp::max;
        let mut map: HashMap<char, i32> = HashMap::with_capacity(s.len());
        let (mut left, mut right, mut maxLen) = (0, 0, 0);
        for c in s.chars() {
            if(map.contains_key(&c)) {
                if let Some(j) = map.get(&c) {
                    left = max(left, j+1);
                }
            }
            maxLen = max(right - left + 1, maxLen);
            map.insert(c, right);
            right+=1;
        } 
        
        maxLen
    }
}
// @lc code=end

