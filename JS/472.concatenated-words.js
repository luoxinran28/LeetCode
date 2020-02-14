/**
 * @param {string[]} words
 * @return {string[]}
 */
// 这题是word break的变种，将words按照长度排序，长的肯定由短的组成，长的排后面。
// 那么能链接的单词可以看做是在前面短词字典里面来进行word break的判断。
// 比如[a,b,c,d,ab,cd]，wordBreak("ab", [a,b,c,d])是true，
// wordBreak("cd"，[a,b,c,d,ab])是true
var findAllConcatenatedWordsInADict = function(words) {
  if(words === null || words.length === 0) return true;
  words.sort((a, b) => a.length - b.length);
  let res = [];
  let pre_words = new Set();
  for(let i = 0; i < words.length; i++) {
    if(wordBreak(words[i], pre_words)) {
       res.push(words[i]);
    }
    pre_words.add(words[i]);
  }
  return res;
      
  function wordBreak(s, dict) {
    if(s.length === 0 || dict.length === 0 || dict.length === 0) return false;
    let dp = [...Array(s.length + 1)].fill(false);
    let len = s.length;
    dp[0] = true;
    for(let i = 1; i < len + 1; i++) {
      for(let j = 0; j < i; j++) {
        if(dp[j] && dict.has(s.substring(j, i))) {
          dp[i] = true;
          break;
        }  
      }
    }
    return dp[len];
  }
};