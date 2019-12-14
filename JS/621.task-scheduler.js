/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let c = Array.from({length: 26}).fill(0);
  for(let task of tasks) {
    c[task.charCodeAt() - "A".charCodeAt()]++;
  }
  c.sort((a, b) => a - b);  
  let i = 25;
  while(i >= 0 && c[i] === c[25]) { // 找到有多少个最大长度的任务
    i--;
  }
  return Math.max(tasks.length, (n + 1) * (c[25] - 1) + (25 - i));
};