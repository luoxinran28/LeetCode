/**
 * @param {number[]} heights
 * @return {number}
 */
/*
总的思路是用单调栈记录递增的模块，当遇到递减的时候，计算之前递增模块的最大面积，最后再对整个数组计算一次st中
剩下的面积，使用单调递增栈记录数组元素的index。算法：
1. 将栈首先添加-1表示起点的位置。
2. 对数组遍历，如果当前值大于等于栈顶idx所在元素，入栈
3. 否则，不断pop并在pop的过程中计算面积，面积 = heights[st.pop] * ( i * heights[st.peek] - 1)，
这里pop出来是当前高度最大的值，peek是左边最高元素的idx，更新面积最大值，这里要多减一的原因是st.peek到st.pop
之间的元素都是大于两边所在元素，都不能被包括。
4. 返回最大值。
*/
var largestRectangleArea = function(heights) {
  if(heights === null || heights.length === 0) return 0;
  let st = [-1];
  let n = heights.length;
  let max = -1;
  for(let i = 0; i < n; i++) {
    // 如果当前比较小，持续pop并计算面积
    while(st[st.length - 1] !== -1 && heights[i] < heights[st[st.length - 1]]) {
      max = Math.max(max, heights[st.pop()] * (i - st[st.length - 1] - 1));
    }
    st.push(i);
  }
  // 最后计算整个长度的可能最大面积，先pop退到前一个元素，再peek
  // 参考例子[3,3,3,1,3]，长度还是5 - (-1) - 1，高度是1，这里-(-1)是第一个3之前的idx
  while(st[st.length - 1] !== -1) {
    max = Math.max(max, heights[st.pop()] * (n - st[st.length - 1] - 1));
  }
  return max;
};