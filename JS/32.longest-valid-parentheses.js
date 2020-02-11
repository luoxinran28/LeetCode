/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let res = 0;
  let st = [];
  let max = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '(') {
      st.push(i);
    } else {
      if(st.length === 0 || s[st[st.length - 1]] === ')') {
        st.push(i);
      } else if(s[st[st.length - 1]] === '(') {
        st.pop();
        max = Math.max(max, i - ((st.length > 0) ? st[st.length - 1] : -1));
      }
    }
  }
  return max;
};