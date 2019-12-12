/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  
  let left = 0, right = s.length - 1;
  while(left < right) {
    if(s.charAt(left) !== s.charAt(right)) {
      return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
    
  function isPalindrome(s, i, j) {
    while(i < j) {
      if(s.charAt(i) !== s.charAt(j)) return false;
      i++;
      j--;
    }
    return true;
  }
};