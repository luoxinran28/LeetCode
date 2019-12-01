class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false; 
  }
}

const dfs = (root, word, start) => {
  if(!root || (word.length === start && !root.isWord)) {
    return false;
  }
  
  if(word.length === start && root.isWord) {
    return true;
  }
  
  let cur_char = word.charAt(start);
  if(cur_char === '.') {
    for(let i = 0; i < 26; i++) {
      let ch = String.fromCharCode(97 + i);
      if(!root.children[ch]) continue;
      if(dfs(root.children[ch], word, start + 1)) {
        return true;
      }
    }
    return false;
  }
  return dfs(root.children[cur_char], word, start + 1);
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }
  
  addWord(word) {
    let cur = this.root;
    for(let ch of word) {
      if(!cur.children[ch]) {
        cur.children[ch] = new TrieNode();
      }
      cur = cur.children[ch];
    }
    cur.isWord = true;
  }
  search(word) {
    return dfs(this.root, word, 0);
  }
}



/**
 * Initialize your data structure here.
 */
// var WordDictionary = function() {
    
// };

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
// WordDictionary.prototype.addWord = function(word) {
    
// };

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
// WordDictionary.prototype.search = function(word) {
    
// };

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */