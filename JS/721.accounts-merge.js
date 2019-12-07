/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// 使用BFS 就是把所有点遍历一次建立无向图，这样所有有联系的点都会链接起来，然后把链接起来的点建立成list输出
// 并查集，可以把所有的email放在一个集合内，再用一个map绑定集合和名字
var accountsMerge = function(accounts) {
  
  let emailToName = new Map();
  let parents = {};
  let ranks = {};
  
  
  /*
  parents里面：
  "def": "def"
  "abc": "abc"
  "xyz": "xyz"
  
  */
  for(let acc of accounts) {
    for(let i = 1; i < acc.length; i++) {
      emailToName.set(acc[1], acc[0]);
      parents[acc[i]] = acc[i];// 对每个email初始化指向自己
    }
  }

  /*
    parents里面：
    "def": "def"
    "abc": "abc"
    "xyz": "xyz"
  
  */
  for(let acc of accounts) {
    for(let i = 1; i < acc.length; i++) {
      union(acc[1], acc[i]);
    }
  }
  /*
  emailSet里面：
  "def": ["def", "abc", "xyz"]
  */
  let emailSet = new Map();
  for(let email of Object.keys(parents)) {
    let p_email = find(parents[email]); // Get the root of each group
    if(!emailSet.has(p_email)) emailSet.set(p_email, new Set());
    emailSet.get(p_email).add(email);
  }
  
  let res = [];
  for(let email of emailSet.keys()) {
    res.push([emailToName.get(email), ...Array.from(emailSet.get(email)).sort()]);
  }
  
  return res;
  
  function union(u, v) {
    let pu = find(u);
    let pv = find(v);
    if(pu === pv) return ;    
    parents[pv] = pu;
  }
  
  function find(u) {
    while(parents[u] !== u) {
      parents[u] = parents[parents[u]];
      u = parents[u];
    }
    return u;
  }
  
};


