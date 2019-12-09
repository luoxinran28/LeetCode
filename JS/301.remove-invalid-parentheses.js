
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  
  let L = 0, R = 0; // record how many parenthesises we need to remove
  
  for(let ch of s) {
    if(ch === '(') {
      L++;
    } else {
      if(ch === ')') {
        if(L > 0) L--;
        else R++;
      }
    }
  }
  let res = [];
  dfs(s, L, R, res, 0, new Set());
  return res;
  
  function dfs(s, L, R, res, start, v) {
    // if(L < 0 || R < 0) return;
    if(L === 0 && R === 0 && isValid(s)) {
      if(!res.includes(s)) {
        res.push(s);
      } 
      return ;   
    }
    if(v.has(s)) return;
    
    for(let i = start; i < s.length; i++) {
      if(i !== start && s.charAt(i) === s.charAt(i - 1)) continue;
      let ch = s.charAt(i);
      if(ch === '(' || ch ===')') {
        let sub = s.substring(0, i) + s.substring(i+1);
        if(ch === ')' && R > 0) dfs(sub, L, R - 1, res, start, v); // delete right ) first
        else if(ch === '(' && L > 0) dfs(sub, L - 1, R, res, start, v);
        v.add(sub);
      }
      
    }
  }
  
  function isValid(s) {
    let count = 0;
    for(let ch of s) {
      if(ch === '(') count++;
      if(ch === ')') count--;
      if(count < 0) return false;
    }
    return count === 0;
  }
};