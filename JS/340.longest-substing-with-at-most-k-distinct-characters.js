/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let left = 0, right = 0;
    let map = new Map();
    let res = 0, counter = 0;
    while(right < s.length) {
      map.set(s[right], (map.get(s[right]) || 0) + 1);
      if(map.get(s[right]) === 1) counter++;
      while(counter > k && left <= right) { // Move left pointer to thrink the window
        if(map.get(s[left]) === 1) counter--;
        map.set(s[left], map.get(s[left]) - 1);
        left++;
      }
      res = Math.max(res, right - left + 1);
      right++;
    }
    return res;
  };