/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(matrix === null || matrix.length === 0 || matrix[0].length === 0) return false;
  let m = matrix.length, n = matrix[0].length;
  let left = 0, right = m * n - 1;
  let _flr = Math.floor.bind(Math);
  while(left + 1 < right) {
    let mid = _flr((left + right) / 2);
    let r = _flr(mid / n);
    let c = mid % n;
    if(matrix[r][c] === target) {
      return true;
    } else if(matrix[r][c] < target) {
      left = mid;        
    } else {
      right = mid;
    }
  }
  if(matrix[_flr(left / n)][left % n] === target) return true;
  if(matrix[_flr(right / n)][right % n] === target) return true;
  return false;
};