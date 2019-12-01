// The method with Array in JS is 24% faster and 20% less space. Too bad.
// class TrieNode {
// 	constructor() {
// 		this.children = new Array(26) //can be a map, can be of different length based on requirement.
// 		this.isWord = false;
// 	}
// }

// const traverse = (root, str) => {
//   let cur = root;
//   for(let i = 0; i < str.length; i++) {
//     let ch = str.charCodeAt(i) - 'a'.charCodeAt();
//     if(!cur.children[ch]) {
//       return null;
//     }
//     cur = cur.children[ch];
//   }
//   return cur;
// }


// class Trie {
//   constructor() {
//     this.root = new TrieNode();
//   }
  
//   insert(word) {
//     let cur = this.root;
//     for(let i = 0; i < word.length; i++) {
//       let ch = word.charCodeAt(i) - 'a'.charCodeAt();
//       if(!cur.children[ch]) {
//         cur.children[ch] = new TrieNode();
//       }
//       cur = cur.children[ch];
//     }
//     cur.isWord = true;
//   }
    
//   search(word) {
//     let cur = traverse(this.root, word);
//     return cur !== null && cur.isWord;
//   }
  
//   startsWith(prefix) {
//     return traverse(this.root, prefix) !== null;
//   }
// }

// Without the array[26], 64% faster and 100% less space
const traverse = (root, word) => {
  let cur = root;
  for(let ch of word) {
    if(!cur[ch]) return null;
    cur = cur[ch];
  }
  return cur;
}

class Trie {
  constructor() {
    this.root = {};
  }
  insert(word) {
    let cur = this.root;
    for(let ch of word) {
      cur[ch] = cur[ch] || { isWord: false };
      cur = cur[ch];
    }
    cur.isWord = true;
  }
  search(word) {
    let cur = traverse(this.root, word);
    return cur !== null && cur.isWord;
  }
  startsWith(prefix) {
    return traverse(this.root, prefix) !== null;
  }
}


/**
 * Initialize your data structure here.
 */
// var Trie = function() {
//   let root = {};
// };

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
// Trie.prototype.insert = function(word) {

// };

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
// Trie.prototype.search = function(word) {
// };

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
// Trie.prototype.startsWith = function(prefix) {
// };

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */