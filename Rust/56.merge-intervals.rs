/*
 * @lc app=leetcode id=56 lang=rust
 *
 * [56] Merge Intervals
 */

// @lc code=start
impl Solution {
    pub fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        use std::cmp;
        let mut result = Vec::new();
        if intervals.len() == 0 {
            return result;
        }
        let mut new_intervals = intervals;
        new_intervals.sort_by(|a, b| a[0].cmp(&b[0]));
        let mut sol = new_intervals[0].clone();
        for interval in new_intervals {
            if(sol[1] < interval[0]) {
                result.push(sol.clone());
                sol = interval;
                // result.push(sol.clone()); // Some algorithms on leetcode have the push here because the value in result can be modified by reference. 
            } else { // merge
                sol[1] = cmp::max(sol[1],interval[1]);
            }
        }
        result.push(sol.clone());
        result
    }
}
// @lc code=end

