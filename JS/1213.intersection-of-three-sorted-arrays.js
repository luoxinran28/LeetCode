/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
  if (arr1 === null || arr1.length === 0 ||
      arr2 === null || arr2.length === 0 ||
      arr3 === null || arr3.length === 0) return [];
  let res = [];
  
  let i = 0, j = 0, k = 0;
  while(i < arr1.length && j < arr2.length && k < arr3.length) {
    let min = Math.min(arr1[i], arr2[j], arr3[k]);
    if(arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      res.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if(arr1[i] === min) {
      i++;
    } else if(arr2[j] === min) {
      j++;
    } else if(arr3[k] === min){
      k++;
    }
  }
  return res;
};