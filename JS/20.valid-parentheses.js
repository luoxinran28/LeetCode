/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let st = [];
  let map = new Map();
  map.set(")", "(");  
  map.set("]", "[");
  map.set("}", "{");
  
  for(let i = 0; i < s.length; i++) {
    if(s[i] === "(" || s[i] === "[" || s[i] === "{") {
       st.push(s[i]);
    } else {
      if(map.get(s[i]) !== st[st.length - 1]) {
        return false;
      }
      st.pop();
    }
  }
  return st.length === 0;
};