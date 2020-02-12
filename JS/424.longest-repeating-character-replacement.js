/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 用数组map存储每个字符在window里面的数量，end - start + 1 - maxCount表示window的大小，
// 如果大于k，说明window不满足操作条件，向右移动一个window的位置，并更新map[start]，
// 比如xxxyzx且k=1，当前end在4，4 - 0 + 1 - 3 = 2，所以end移动到5，start到1，map[start]--。
// 这个题不需要缩小window的长度。
var characterReplacement = function(s, k) {
  let start = 0;
  let map = {};
  let max_count = 0, max_len = 0;
  
  for(let end = 0; end < s.length; end++) {
    map[s[end]] = (map[s[end]] || 0) + 1;
    max_count = Math.max(max_count,  map[s[end]]);
    if(end - start + 1 - max_count > k) {
      map[s[start]]--;
      start++;
    }
  }
  return s.length - start;
};