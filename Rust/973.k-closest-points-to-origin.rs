/*
 * @lc app=leetcode id=973 lang=rust
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
impl Solution {
    pub fn k_closest(points: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
        let K = k as usize;
        let mut res = points.clone();
        Self::quick_select(&mut res, K);
        res = res[..K].to_vec();
        return res;
    }
    
    fn quick_select(arr: &mut Vec<Vec<i32>>, K: usize) {
        let mut lo:usize = 0;
        let mut hi:usize = arr.len() - 1;
        while(lo < hi) {
            let mut pivotIdx = Self::partition(arr, lo, hi);
            if(pivotIdx == K) {
                break;
            } else if(pivotIdx < K) {
                lo = pivotIdx + 1;
            } else {
                hi = pivotIdx - 1;
            }
        }
    }
    
    fn partition(arr: &mut Vec<Vec<i32>>, low: usize, high: usize) -> usize {
        let pivot = arr[high].clone();
        println!("Pivot: {:?}", pivot);
        let mut pivotIdx = low;
        let mut lo = low;
        let mut hi = high;
        for lo in lo..hi {
            if(Self::cmp(&arr[lo], &pivot) < 0) {
                arr.swap(pivotIdx, lo);
                pivotIdx += 1;
            }
        }
        arr.swap(pivotIdx, hi);
        pivotIdx
    }
    
    fn cmp(p1: &Vec<i32>, p2: &Vec<i32>) -> i32{
        return p1[0]*p1[0] + p1[1]*p1[1] - p2[0] * p2[0] - p2[1]*p2[1];
    }
}
// @lc code=end

