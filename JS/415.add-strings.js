/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let res = [];
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;
  while(i >= 0 || j >= 0) {
    carry += (i >= 0) ? parseInt(num1[i--]) : 0;
    carry += (j >= 0) ? parseInt(num2[j--]) : 0;
    res.unshift(carry % 10);
    carry = parseInt(carry / 10);
  }
  if(carry) res.unshift(carry);
  return res.join('');
};