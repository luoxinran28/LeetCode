/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
/*
从后向前的进行BFS，计算每个单词到最后一个单词的步数并用map记录(word, count)，期间也记录从前往后单词能到的其他单词的wordMap，用(next, [...cur])记录下来，第二步用DFS从begin到end递归，因为有了步数的map，我们只递归步数相差为1的单词，这样可以节省大量时间，并且因为有wordMap，就不许要再计算一次nextWords了。因为要取得所有解，这里的dict(wordList)不能删掉元素。
*/
var findLadders = function(beginWord, endWord, wordList) {
  
  let dist = new Map();
  dist.set(endWord, 0);
  let dict = new Set(wordList);
  dict.add(beginWord);
  if (!dict.has(endWord)) return [];
  
  let q = [endWord];
  let v = new Set([endWord]);

  let wordMap = new Map();
  
  let count = 0;
  let found = false;
  while(q.length > 0) {
    count++;
    let size = q.length;
    for(let i = 0; i < size; i++) {
      let cur = q.shift();
      for(let next of getNext(cur, dict)) {
        if(!wordMap.has(next)) wordMap.set(next, new Set());
        wordMap.get(next).add(cur)
        if(v.has(next)) continue; // 要在wordMap后面，因为wordMap要记录能到哪些单词

        if(next === beginWord) found = true;
        dist.set(next, count);
        v.add(next);
        q.push(next);
      } 
    }
  }
  if(!found) return [];
  
  let res = [];
  dfs(wordMap, beginWord, endWord, dist, [beginWord]);
  return res;
  
  
  function dfs(wordMap, beginWord, endWord, dist, sol) {
    if(beginWord === endWord) {
      res.push([...sol]);
      return;
    }
    for(let next of wordMap.get(beginWord)) {
      if(dist.get(beginWord) !== dist.get(next) + 1) continue;  // 如果和下一步不是一步之遥，就不走
      sol.push(next);
      dfs(wordMap, next, endWord, dist, sol);
      sol.pop();
    }
  }
  
  
  function getNext(word, wordSet) {
    let ret = [];
    for(let i = 0; i < word.length; i++) {
      let begin_arr = word.split("");
      for(let c = 0; c < 26; c++) {
        let char = String.fromCharCode(97+c);
        if(char === begin_arr[i]) continue;
        begin_arr[i] = char;
        let begin_str = begin_arr.join("");
        if(wordSet.has(begin_str)) {
          ret.push(begin_str);
        }
      }
    }
    return ret;
  }
};



// /*
//  * @lc app=leetcode id=126 lang=javascript
//  *
//  * [126] Word Ladder II
//  */

// // @lc code=start
// /**
//  * @param {string} beginWord
//  * @param {string} endWord
//  * @param {string[]} wordList
//  * @return {string[][]}
//  */
// var findLadders = function(beginWord, endWord, wordList) {
//   let diffMap = new Map();
//   let wordSet = new Set(wordList);
//   let res = [];
//   let limit = 0;

//   for (let word of wordList) {
//     diffMap.set(word, getDiff(beginWord, word));
//   }
//   while (res.length === 0) {
//     dfs(beginWord, endWord, wordSet, 1, [beginWord]);
//     limit++;
//   }
//   return res;

//   function dfs(begin, end, wordSet, depth, sol) {
//     if (limit == depth + 1) {
//       if (begin === end) {
//         res.push(sol.slice());
//         return;
//       }
//     }

//     if (depth - 1 + diffMap.get(begin) > limit) return;

//     for (let begin_str of getNext(begin, wordSet)) {
//       sol.push(begin_str);
//       dfs(begin_str, end, wordSet, depth + 1, sol);
//       sol.pop();
//     }

//     if (res.length === 0) {
//       diffMap.set(begin, Math.max(diffMap.get(begin), limit - (depth - 1) + 1));
//     }
//   }
//   function getDiff(a, b) {
//     let ret = 0;
//     for (let i = 0; i < a.length; i++) {
//       if (a.charAt(i) !== b.charAt(i)) {
//         ret++;
//       }
//     }
//     return ret;
//   }

//   function getNext(word, wordSet) {
//     let ret = [];
//     for (let i = 0; i < word.length; i++) {
//       let begin_arr = word.split("");
//       for (let c = 0; c < 26; c++) {
//         let char = String.fromCharCode(97 + c);
//         if (char === begin_arr[i]) continue;
//         begin_arr[i] = char;
//         let begin_str = begin_arr.join("");
//         if (wordSet.has(begin_str)) {
//           ret.push(begin_str);
//         }
//       }
//     }
//     return ret;
//   }
// };

// // @lc code=end
