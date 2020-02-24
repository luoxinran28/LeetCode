/**
 * @param {character[][]} matrix
 * @return {number}
 */
/*
参考84. Largest Rectangle in Histogram这个题，将matrix数组转换成heights数组，
通过累计每一行的1得到一个新的数组，这个数组每行的数代表了当前这一行的1的综合，逐行求
条形图的最大矩形。
*/
var maximalRectangle = function(matrix) {
  if(matrix === null || matrix.length === 0 || matrix[0].length === 0) return 0;
  let m = matrix.length, n = matrix[0].length;
  
  /* 建立heights数组 */
  let heights = [...Array(m)].map(() => [...Array(n)].fill(0));
  
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(i === 0) {
        heights[i][j] = matrix[i][j] === '1' ? 1 : 0;
      } else {
        heights[i][j] = matrix[i][j] === '1' ? heights[i - 1][j] + 1: 0
      }
    }
  }
  let max = -1;
  for(let i = 0; i < m; i++) {
    max = Math.max(max, largestRectangleArea(heights[i]));
  }
  
  return max;
  
  function largestRectangleArea(heights) {
    let st = [-1];
    let max = -1;
    let n = heights.length;
    for(let i = 0; i < n; i++) {
      while(st[st.length - 1] !== -1 && heights[i] < heights[st[st.length - 1]]) {
        max = Math.max(max, heights[st.pop()] * (i - st[st.length - 1] - 1));
      }
      st.push(i);
    }
    while(st[st.length - 1] !== -1) {
      max = Math.max(max, heights[st.pop()] * (n - st[st.length - 1] - 1));
    }
    return max;
  }
  
};