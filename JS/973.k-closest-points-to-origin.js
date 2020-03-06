/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
/*
利用quick sort快排的原理，当pivotIdx等于K的时候，pivotIdx左边的都是
较小的数，右边都是较大的数。
*/
var kClosest = function(points, K) {
  if(points === null || points.length === 0) return [];
  quickSelect(points);
  return points.slice(0, K);
  
  function quickSelect(points) {
    let len = points.length;
    let lo = 0, hi = len - 1;

    while(lo < hi) {
      let pivotIdx = partition(points, lo, hi);
      if(pivotIdx === K) {
        break;
      } else if(pivotIdx < K) {
        lo = pivotIdx + 1;
      } else {
        hi = pivotIdx - 1;
      }
    }
  }
  
  function partition(arr, low, high) {
    let pivot = arr[high];
    let pivotIdx = low;
    for(let i = low; i < high; i++) {
      if(cmp(arr[i], pivot) < 0) {
        swap(arr, i, pivotIdx);
        pivotIdx++;
      }
    }
    swap(arr, pivotIdx, high);
    return pivotIdx;
  }
  
  
  function swap(arr, p, q) {
    let tmp = arr[p];
    arr[p] = arr[q];
    arr[q] = tmp;
  }
  
  function cmp(p1, p2) {
    return p1[0] * p1[0] + p1[1] * p1[1] - p2[0] * p2[0] - p2[1] * p2[1];
  }
};
// @lc code=end

