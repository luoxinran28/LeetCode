/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let map = new Map();
  let left = 0, right = 0, min_len = Infinity, min_start = 0;
  let counter = t.length, t_len = t.length, s_len = s.length;
  t.split("").forEach(c => map.set(c, (map.get(c) || 0) + 1));
  while(right < s_len) {
    let right_char = s[right];
    if(map.has(right_char)) {
      if(map.get(right_char) > 0) counter -= 1;
      map.set(right_char, map.get(right_char) - 1);
    }
    while(counter === 0) { // window contains t, shrink window from left bound
      if(right - left + 1 < min_len) {
        min_len = right - left + 1;
        min_start = left;
      }
      let left_char = s[left];
      map.set(left_char, map.get(left_char) + 1);
      if(map.get(left_char) > 0) counter += 1; // If there is duplicates in the window, it's negative
      left += 1;
    }
    right += 1; // Expand right bound
  }
  return (min_len === Infinity) ? "" : s.substr(min_start, min_len);
};

// var minWindow = function(s, t) {
//   let map = {};
//   let left = 0, right = 0, min_len = Infinity, min_start = 0;
//   let counter = t.length, t_len = t.length, s_len = s.length;
//   t.split("").forEach(c => map[c] = (map[c] || 0) + 1);
//   // console.log(map);
//   while(right < s_len) {
//     const right_char = s[right];
//     if(map[right_char] > 0) counter--;
//     map[right_char]--;
    
//     while(counter === 0) { // window contains t, shrink window from left bound
//       if(right - left + 1 < min_len) {
//         min_len = right - left + 1;
//         min_start = left;
//       }
//       const left_char = s[left];
//       map[left_char]++;
//       if(map[left_char] > 0) counter++; // If there is duplicates in the window, it's negative
//       left++;
//     }
//     right++; // Expand right bound
//   }
//   return (min_len === Infinity) ? "" : s.substr(min_start, min_len);
// };
// @lc code=end

