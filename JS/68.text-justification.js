/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
/*
参考：https://www.youtube.com/watch?v=qrZLQmL6fyI
变量解释：
cur: 当前words的index
last：应该放到下一行的word的index，也就是下一行的第一个word
totalWordsChars：当前行有的单词字符数量
gaps：一行中有多少个单词间空隙
spaces：间隙中even的分配应该有多少个空格
rest：分配后还剩余多少个空格应该放到最左
*/
var fullJustify = function(words, maxWidth) {
  if(words === null || words.length === 0 || maxWidth === 0) return [];
  let res = [];
  
  let cur = 0;
  let n = words.length;
  while(cur < n) {
    let str = "";
    
    // 首先，根据totalWordsChars移动last的位置到下一行的第一个单词，
    // totalWordsChars不能超过maxWidth
    let totalWordsChars = words[cur].length; // 第一个单词
    let last = cur + 1;
    while(last < n) { // last 不断找下个单词
      if(totalWordsChars + words[last].length + 1 > maxWidth) break;
      totalWordsChars += 1 + words[last].length; // 空格加下一个单词
      last++;
    }
    // totalWordsChars -= 1; // remove the last space
    
    /* 第一种情况，如果是最后一行或者这一行只有一个单词，那就放下单词后往后面填满空格 */
    let gaps = (last - cur) - 1;

    if(last === n || gaps === 0) {
      for(let i = cur; i < last; i++) {
        str += words[i] + " ";
      }
      str = str.substring(0, str.length - 1); // 删掉多余的空格
      while(str.length < maxWidth) {
        str += " ";    
      }
    } 
    /* 一般情况下，我们就需要计算单词之间需要多少空格了 */
    else {
      let spaces = Math.floor((maxWidth - totalWordsChars) / gaps);
      let rest = (maxWidth - totalWordsChars) % gaps;
      for(let i = cur; i < last - 1; i++) { // 最后一个暂时不添加
        str += words[i] + " ";
        // 添加空格，每个gap最多加一个rest，i - cur < rest是为了让剩余空格均匀分布
        for(let s = 0; s < spaces + ((i - cur < rest) ? 1 : 0); s++) {
          str += " ";
        }
      }
      str += words[last - 1];
    }
    res.push(str.slice());
    cur = last;
  }
  return res;
};




