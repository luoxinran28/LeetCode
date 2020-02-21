/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/*
模拟，用四个方向的变量改变for循环，直到res.length = m * n。
*/
var spiralOrder = function(matrix) {
  if(matrix === null || matrix.length === 0 || matrix[0].length ===0) return [];
  let m = matrix.length, n = matrix[0].length;
  let res = [];
  let left = 0, right = n - 1, top = 0, bottom = m - 1;
  
  while(res.length < m * n) {
    // Going right
    for(let j = left; j <= right && res.length < m * n; j++) {
      res.push(matrix[top][j]);
    }
    
    // Going down， 这里top+1是为了不重复左到右的最后一个元素
    for(let i = top + 1; i <= bottom - 1 && res.length < m * n; i++) { 
      res.push(matrix[i][right]);
    }
    
    // Going left
    for(let j = right; j >= left && res.length < m * n; j--) {
      res.push(matrix[bottom][j]);
    }
    
    // Going up，同理，bottom+1不重复右到左最后一个元素
    for(let i = bottom - 1; i >= top + 1 && res.length < m * n; i--) {
      res.push(matrix[i][left]);
    }
    left++; right--; top++; bottom--;
  }
  
  return res;
  
};