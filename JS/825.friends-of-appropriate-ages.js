/*
 * @lc app=leetcode id=825 lang=javascript
 *
 * [825] Friends Of Appropriate Ages
 */

// @lc code=start
/**
 * @param {number[]} ages
 * @return {number}
 */
/*
记录每个年龄有用的人数，用map存入，key是年龄，value是人数。对于每个年龄段，
如果age[a]满足age[b]的要求，那么人数就是count(age[a]) * count(age[b])，
但要注意如果两个年级相同的人，要多排除掉一个自己，因为不可能对自己发出请求。
*/
var numFriendRequests = function(ages) {
  if(ages === null || ages.length === 0) return 0;
  let map = new Map();
  let res = 0;
  
  for(let age of ages) { // [age: count(age)]
    map.set(age, (map.get(age) || 0) + 1);
  }
  for(let [age1, count1] of map.entries()) {
    for(let [age2, count2] of map.entries()) {
      if(isValid(age1, age2)) {
        if(age1 !== age2) {
          res += count1 * count2;
        } else {
          res += count1 * (count2 - 1);
        }
      }
    }
  }
  return res;
  
  function isValid(a, b) {
    return !(b > a || (b <= 0.5 * a + 7) || (b > 100 && a < 100));
  }
};
// @lc code=end

