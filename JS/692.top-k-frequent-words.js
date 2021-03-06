/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// 想统计出词频放在map里面，key是单词，val是词频，然后根据词频排序所有key，
// 时间复杂度是O(n + mlog(m))，m是不重复单词数量
var topKFrequent = function(words, k) {
  let map = {};
  
  for(let word of words) {
    map[word] = (map[word] || 0) + 1;
  }
  
  let res = Object.keys(map).sort((a, b) => {
    return map[a] === map[b] ? a.localeCompare(b) : map[b] - map[a];
  });
  // console.log(res);
  return res.slice(0, k);
};