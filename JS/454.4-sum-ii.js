/*
 * @lc app=leetcode id=454 lang=javascript
 *
 * [454] 4Sum II
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let res = 0;
  let map = new Map();

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let sum = A[i] + B[j];
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }

  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      let sum = C[i] + D[j];
      res += map.get(-sum) || 0; // get the additive inverse number in the map
    }
  }
  return res;
};
