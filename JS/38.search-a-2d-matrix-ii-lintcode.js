/**
 * @param matrix: A list of lists of integers
 * @param target: An integer you want to search in matrix
 * @return: An integer indicate the total occurrence of target in the given matrix
 */
// LintCode
const searchMatrix = function (matrix, target) {
  // write your code here
  if(matrix === null || matrix.length === 0 || matrix[0].length === 0) return 0;
  let row = matrix.length, col = matrix[0].length;
  let r = row - 1, c = 0;
  let res = 0;
  while(r >= 0 && c < col) {
    if(matrix[r][c] === target) {
      res++;
      r--;
      c++;
    } else if(matrix[r][c] > target) {
      r--;
    } else {
      c++;
    }
  }
  return res;
}

// LeetCode:
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(matrix === null || matrix.length === 0 || matrix[0].length === 0) return 0;
  let row = matrix.length, col = matrix[0].length;
  let r = row - 1, c = 0;
  while(r >= 0 && c < col) {
    if(matrix[r][c] === target) {
      return true;
    } else if(matrix[r][c] > target) {
      r--;
    } else {
      c++;
    }
  }
  return false;
};