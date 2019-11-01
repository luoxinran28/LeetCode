/*
 * @lc app=leetcode id=1143 lang=rust
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start

impl Solution {
    pub fn longest_common_subsequence(text1: String, text2: String) -> i32 {
        use std::cmp;
        let len1 = text1.len();
        let len2 = text2.len();
        let s:Vec<char> = text1.chars().collect();
        let t:Vec<char> = text2.chars().collect();
        let mut dp = vec![vec![0; len2+1]; 2];        
        for i in 1..len1 + 1 {
            for j in 1..len2 + 1 {
                if(s[i-1] == t[j-1]) {                    
                    dp[i%2][j] = dp[(i-1)%2][j-1] + 1;
                } else {
                    dp[i%2][j] = cmp::max(dp[(i-1)%2][j], dp[i%2][j-1]);
                }
            }
        }
        dp[len1%2][len2]
    }
}
// @lc code=end

