/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  if(A === null || A.length === 0 || B === null || B.length === 0) return [];
  let i = 0; j = 0;
  let res = [];
  while(i < A.length && j < B.length) {
    let lo = Math.max(A[i][0], B[j][0]);
    let hi = Math.min(A[i][1], B[j][1]);
    if(lo <= hi) res.push([lo, hi]);
    if(A[i][1] < B[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return res;
};