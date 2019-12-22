/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  
  let carry = 0;
  let res = [];
  let i = a.length - 1
  let j = b.length - 1;
  while(i >= 0 || j >= 0) {
    carry += i >= 0 ? parseInt(a[i]) : 0;
    carry += j >= 0 ? parseInt(b[j]) : 0;
    res.unshift(carry % 2);
    carry = Math.floor(carry / 2);
    i--;
    j--;
  }
  if(carry) res.unshift(carry);
  
  return res.join("");
};