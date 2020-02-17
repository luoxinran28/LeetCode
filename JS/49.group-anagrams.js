/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};
  for(let str of strs) {
    let sorted = str.split('').sort().join('');
    if(!(sorted in map)) map[sorted] = [];
    map[sorted].push(str);
  }
  let res = [];
  for(let key in map) {
    res.push(map[key]);
  }
  return res;
};