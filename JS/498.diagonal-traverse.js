/*
 * @lc app=leetcode id=498 lang=javascript
 *
 * [498] Diagonal Traverse
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/*
如果row + col是偶数就往右斜上方走，如果是奇数就往左斜下方走，注意边界判断，
当往上走得时候，一定要先判断col === n-1，因为如果实在右上方端点的时候，我们
首先要考虑往下row++而不是col++，不然就会越界。同理往下走的时候到了左下方端点，
先判断row === m - 1，col++往右走而不是row++。
*/
var findDiagonalOrder = function(matrix) {
  if(matrix === null || matrix.length === 0) return [];
  let row = 0, col = 0;
  let m = matrix.length, n = matrix[0].length;
  let res = [];

  for(let i = 0; i < m * n; i++) {
    res.push(matrix[row][col]);
    if((row + col) % 2 === 0) { // 偶数
      if(col === n - 1) row++; // 右边界
      else if(row === 0) col++; // 上边界
      else { row--; col++; } // 往右斜上方走
    } else {
      if(row === m - 1) col++; // 下边界
      else if(col === 0) row++; // 左边界
      else { row++; col--; }// 往左斜下方走
    }
  }
  
  return res;
};
// @lc code=end

