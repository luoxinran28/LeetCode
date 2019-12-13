/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  let order_idx = Array.from({len: 26}).fill(0);
  for(let i = 0; i < order.length; i++) {
    order_idx[order.charCodeAt(i) - "a".charCodeAt()] = i;
  }
  for(let i = 0; i < words.length - 1; i++) {
    if(bigger(words[i], words[i + 1], order_idx)) {
       return false;
    }
  }
  return true;
  
  function bigger(word1, word2, order_idx) {
    let len = word2.length;
    for (let i = 0;i < word1.length && i < word2.length; i++) {
      if(word1[i] !== word2[i]) {
        return  order_idx[word1.charCodeAt(i) - "a".charCodeAt()] >
                order_idx[word2.charCodeAt(i) - "a".charCodeAt()];
      }
    }
    return word1.length > word2.length;
  }
};