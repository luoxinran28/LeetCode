/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//   let set = new Set(nums1);
//   let res = new Set();
//   for(let num of nums2) {
//     if(set.has(num)) res.add(num);
//   }
//   return Array.from(res);
// };

var intersection = function(nums1, nums2) {
  
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let res = new Set();
    
    for(let i = 0, j = 0; i < nums1.length && j < nums2.length;) {
      if(parseInt(nums1[i]) < parseInt(nums2[j])) {
        i++;
      } else if(parseInt(nums2[j]) < parseInt(nums1[i])) {
        j++;
      } else {
        res.add(nums1[i]);
        i++;
        j++
      }
    }
    return Array.from(res);
  };