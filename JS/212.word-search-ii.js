/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// 和word search类似，用dfs进行回溯，区别在于当找到一个单词的时候，如果有前缀相同的单词如何去重，
// 这里用到了前缀树Trie，时间复杂度就降到了O(n^2 * log(word_len))。
// 当找到一个单词之后，需要将Trie的当前节点isWord改成false以去重。
var findWords = function(board, words) {
  if(board === null || board.length === 0 || words.length === 0) return [];
  
  let trie_node = buildTrie(words);
  // console.log(trie_node);
  let res = [];
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      // console.log("starts at: ", board[i][j]);
      dfs(trie_node, i, j, []);
    }
  }
  return res;
  
  function buildTrie(words) {
    let root = {};
    for(let word of words) {
      let cur = root;
      // console.log("new word: ");
      for(let ch of word) {
        cur[ch] = cur[ch] || { isWord: false };
        // console.log(cur, ch);
      
        cur = cur[ch];
      }
      cur.isWord = true;
      // console.log(cur);

    }

    return root;
  }
  
  function dfs(trie_node, i, j, sol) {
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) { // out of boundry
       return;
    }
    let cur_ch = board[i][j];
    if(cur_ch === "#" || !trie_node[cur_ch]) { // invalid char or no such char in Trie
      return;   
    }
    
    sol.push(cur_ch);
    board[i][j] = "#";
    if(trie_node[cur_ch].isWord) {
      res.push(sol.slice().join(""));
      trie_node[cur_ch].isWord = false; // remove the duplicated results
    }
    dfs(trie_node[cur_ch], i + 1, j, sol);
    dfs(trie_node[cur_ch], i - 1, j, sol);
    dfs(trie_node[cur_ch], i, j + 1, sol);
    dfs(trie_node[cur_ch], i, j - 1, sol);
    sol.pop(cur_ch);
    board[i][j] = cur_ch;
    
  }
  
};
