/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// https://www.youtube.com/watch?v=LPFhl65R7ww
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return search(nums2, nums1);
  } else {
    return search(nums1, nums2);
  }

  function search(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;
    let odd = (len1 + len2) & 1;
    let median;

    // Binray Search the smaller array
    let left = 0,
      right = len1;

    while (left <= right) {
      let midArr1 = ((left + right) / 2) | 0;
      let midArr2 = ((len1 + len2 + 1) / 2 - midArr1) | 0; // median_arr1 = (len1 + len2) / 2 - median_arr2

      let maxLeftArr1 = midArr1 === 0 ? -Infinity : arr1[midArr1 - 1];
      let minRightArr1 = midArr1 === len1 ? Infinity : arr1[midArr1];

      let maxLeftArr2 = midArr2 === 0 ? -Infinity : arr2[midArr2 - 1];
      let minRightArr2 = midArr2 === len2 ? Infinity : arr2[midArr2];

      if (maxLeftArr1 <= minRightArr2 && maxLeftArr2 <= minRightArr1) {
        // Found the median pos
        // console.log(even);
        if (!odd) {
          median =
            (Math.min(minRightArr1, minRightArr2) +
              Math.max(maxLeftArr1, maxLeftArr2)) /
            2;
        } else {
          median = Math.max(maxLeftArr1, maxLeftArr2);
        }
        return median;
      } else if (maxLeftArr1 > minRightArr2) {
        // Array_2 move left pos.
        right = midArr1 - 1;
      } else {
        left = midArr1 + 1;
      }
    }
  }
  return median;
};
// @lc code=end
