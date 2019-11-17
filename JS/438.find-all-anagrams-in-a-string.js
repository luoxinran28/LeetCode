/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (p.length > s.length) return [];
  let _abs = Math.abs.bind(Math);
  let det = new Array(128).fill(0); // The count difference between s and t
  let res = [];
  let p_len = p.length;

  for (let i = 0; i < p_len; i++) {
    det[s.charCodeAt(i)]++; // s is positive
    det[p.charCodeAt(i)]--;
  }
  let sum = 0;
  det.forEach(ele => (sum += _abs(ele)));
  if (sum === 0) res.push(0);

  let r = p_len;
  while (r < s.length) {
    let l = r - p_len; // Original left and right
    let l_char = s.charCodeAt(l);
    let r_char = s.charCodeAt(r);
    sum = sum - _abs(det[l_char]) - _abs(det[r_char]);

    det[l_char]--;
    det[r_char]++;

    sum = sum + _abs(det[l_char]) + _abs(det[r_char]);
    if (sum === 0) res.push(l + 1); // The left bound is one larger than affected pos
    r++;
  }
  return res;
};
// @lc code=end
