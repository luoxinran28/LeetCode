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
/*
用counter记录还有多少个字符需要匹配，如果是0的话更新min_len并收缩left，map记录
当前还需要match哪些字符，right移动的时候更新map - 1，left收缩的时候更新map + 1

counter: 记录还需要满足多少个t里的字符
map: 记录当前t里面每个字符还需要满足多少
min_len: 最小的window长度
min_start: 最小字符串从哪里开始的
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

