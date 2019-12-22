/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let dec = false, inc = false;
  for(let i = 1; i < A.length; i++) {
    if(A[i - 1] < A[i]) {
      inc = true;
    }
    if(A[i - 1] > A[i]) {
      dec = true;
    }
  }
  return inc && dec ? false : true;
};