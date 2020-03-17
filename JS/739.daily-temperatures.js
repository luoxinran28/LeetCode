/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/*
使用递减栈记录元素的位置，遇到比栈顶大的元素就循环输出，更新输出位置的
*/
var dailyTemperatures = function(T) {
  if(T === null || T.length === 0) return [];
  let st = [];
  let res = Array(T.length).fill(0);
  for(let i = 0; i < T.length; i++) {
    while(st.length > 0 && T[st[st.length - 1]] < T[i]) {
      let idx = st.pop();
      res[idx] = i - idx; // 这个距离就是idx需要的距离
    }
    st.push(i);
  }
  return res;
};
// @lc code=end

