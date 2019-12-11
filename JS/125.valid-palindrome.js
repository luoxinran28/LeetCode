/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^A-Z^a-z^0-9]/g,'');
  let left = 0, right = s.length - 1;
  while(left < right) {
    if(s.charAt(left++) !== s.charAt(right--)) {
      return false;
    }
  }
  return true;
};