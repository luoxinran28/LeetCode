/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  let q1 = [beginWord]; // From begin
  let q2 = [endWord]; // From end
  let dict = new Set(wordList);
  let count = 0;
  let done = false;

  while (q1.length && q2.length) {
    count++;
    if (q1.length > q2.length) [q1, q2] = [q2, q1]; // BFS from the smaller queue
    let q = [];
    for (let i = q1.length; i > 0; i--) {
      let cur = q1.shift();
      let curArr = cur.split("");
      for (let c = 0; c < curArr.length; c++) {
        for (let l = 0; l < 26; l++) {
          let char = String.fromCharCode(97 + l);
          if (cur[c] === char) continue;
          curArr[c] = char;
          let newWord = curArr.join("");
          if (q2.includes(newWord)) return count + 1; // Found the solution
          if (dict.has(newWord)) {
            q.push(newWord); // Add new word into a new queue
            dict.delete(newWord); // Remove after visited
          }
        }
        curArr[c] = cur[c];
      }
    }
    q1 = q; // Assign the new queue to next level
  }
  return 0;
};
