/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  let graph = new Map();
  let indegree = new Map();
  
  for(let word of words) {
    for(let i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      if(!indegree.has(char)) {
        indegree.set(char, 0);
        graph.set(char, []);
      }
    }
  }

  for(let i = 0; i < words.length - 1; i++) {
    let cur = words[i];
    let next = words[i+1];
    let min_len = Math.min(cur.length, next.length);
    for(let j = 0; j < min_len; j++) {
      let c1 = cur.charAt(j);
      let c2 = next.charAt(j);
      if(c1 !== c2) {
        let neighbors = graph.get(c1);
        if(!neighbors.includes(c2)) {
          indegree.set(c2, indegree.get(c2) + 1);
          graph.get(c1).push(c2);
        }
        break;
      } 
    }
  }
  
  
  let q = [];
  let count_v = 0;
  indegree.forEach((value, key) => {
    if(value === 0) {
      q.push(key);
      count_v++;
    }
  });
  let res = "";
  while(q.length > 0) {
    let cur = q.shift();
    res += cur;
    let neighbors = graph.get(cur);
    for(let neighbor of neighbors) {
      indegree.set(neighbor, indegree.get(neighbor) - 1);
      if(indegree.get(neighbor) === 0) {
        q.push(neighbor);
        count_v++;
      }
    }
  }
  if(count_v !== graph.size) return "";
  
  return res;
  
};