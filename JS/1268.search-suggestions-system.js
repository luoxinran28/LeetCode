/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
/*
最基本的方法是用Trie构建所有products的字典树，然后搜索searchWord的前缀，
前缀完了后如果当前节点还有其他的字符，用dfs返回所有结果，再排序输出前三个。
这样做遍历效率很低，时间复杂度是O(len * (log(len) + len))。解决方法是先排序
products，然后把前3的字符串放入每一个trie节点里面的数组。
*/
// var suggestedProducts = function(products, searchWord) {
//   let root = buildTrie(products);
//   let res = [];
//   let prefix = "";
//   for(let ch of searchWord) {
//     prefix += ch;
//     let ret = search(prefix, root);
//     ret.sort((a, b) => {
//       return a.localeCompare(b);
//     });
//     res.push(ret.slice(0, 3));
//   }
//   return res;
    
//   function buildTrie(arr) {
//     let root = {};
//     for(let str of arr) {
//       let node = root;
//       for(let ch of str) {
//         node[ch] = node[ch] || {is_word: false};
//         node = node[ch];
//       }
//       node.is_word = true;
//     }
//     return root;
//   }
  
//   function search(word, root) {
//     let cur = root;
//     let prefix = "";
//     for(let ch of word) {
//       if(!cur) break;
//       prefix += ch;
//       cur = cur[ch];
//     }
//     let dfs_res = [];
//     if(!cur) return dfs_res;
    
//     dfs(cur, dfs_res, prefix, []);
//     return dfs_res;
//   }
  
//   function dfs(root, res, prefix, sol) {
//     if(!root || root.is_word) {
//       res.push(prefix + sol.join(""));
//       if(!root) return;
//     }
    
//     for(let key of Object.keys(root)) {
//       if(root[key]) {
//         sol.push(key);
//         dfs(root[key], res, prefix, sol);
//         sol.pop();
//       }

//     }
//   }
// };

var suggestedProducts = function(products, searchWord) {
  products.sort();
  let root = buildTrie(products);  
  let res = [];
  let node = root;
  for(let ch of searchWord) {
    if(node) node = node[ch]; // 'suggest'在当前节点下一层
    res.push(node ? node["suggest"] : []); // 如果下一层是空的，就返回[]
  }
  return res;
    
  function buildTrie(arr) {
    let root = {};
    for(let str of arr) {
      let node = root;
      for(let ch of str) {
        node[ch] = node[ch] || { "suggest": [] };
        if(node[ch]["suggest"].length < 3) node[ch]["suggest"].push(str);
        node = node[ch];
      }
    }
    return root;
  }

};