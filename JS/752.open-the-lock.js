/*
 * @lc app=leetcode id=752 lang=javascript
 *
 * [752] Open the Lock
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  let det = [1, -1];
  let deads = new Set(deadends);
  let visited = new Set();
  let queue = ["0000"];
  visited.add("0000");
  let level = 0;
  while (queue.length !== 0) {
    level++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      if (current === target) {
        return level - 1;
      }
      if (deads.has(current)) {
        continue;
      }
      for (let c = 0; c < current.length; c++) {
        for (let d = 0; d < 2; d++) {
          let next =
            current.substring(0, c) +
            ((current.charAt(c) - "0" + det[d] + 10) % 10) +
            current.substring(c + 1);
          if (!visited.has(next)) {
            visited.add(next);
            queue.push(next);
          }
        }
      }
    }
  }
  return -1;
};
// @lc code=end
