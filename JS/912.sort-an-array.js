/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
快排，选一个pivot，遍历每个元素跟它比较，小的放左边，用pivotIdx记录需要交换的位置
merge sort，递归分解两个数组，然后合并两个排好序的数组。
*/
var sortArray = function(nums) {
  
  function quickSort(nums, lo, hi) {
    
    // let lo = 0, hi = nums.length - 1;
    if(lo < hi) {
      let pivotIdx = partition(nums, lo, hi);
      quickSort(nums, lo, pivotIdx - 1);
      quickSort(nums, pivotIdx + 1, hi);
    }
    
    function partition(nums, lo, hi) {
      let pivot = nums[hi];
      let pivotIdx = lo;
      for(let i = lo; i < hi; i++) {
        if(nums[i] < pivot) {
          swap(nums, i, pivotIdx);
          pivotIdx++;
        }
      }
      swap(nums, pivotIdx, hi);
      return pivotIdx;
    }
    
    function swap(arr, p, q) {
      let tmp = arr[p];
      arr[p] = arr[q];
      arr[q] = tmp;
    }
  }
  
  
  function mergeSort(nums) {
    if(nums.length <= 1) return nums;
    let mid = nums.length >>> 1;
    let leftArr = mergeSort(nums.slice(0, mid));
    let rightArr = mergeSort(nums.slice(mid, nums.length));
    return merge(leftArr, rightArr);

    function merge(arr1, arr2) {
      let idx1 = 0;
      let idx2 = 0;
      let res = [];
      while(idx1 < arr1.length && idx2 < arr2.length) {
        if(arr1[idx1] < arr2[idx2]) {
          res.push(arr1[idx1++]);
        } else {
          res.push(arr2[idx2++]);
        }
      }
      
      while(idx1 < arr1.length) {
        res.push(arr1[idx1++]);
      }
      while(idx2 < arr2.length) {
        res.push(arr2[idx2++]);
      }
      
      return res;
    }
  }
  
  // quickSort(nums, 0, nums.length - 1);
  let newNums = mergeSort(nums, 0, nums.length - 1);
  
  return newNums;
};
// @lc code=end

