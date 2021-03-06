/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  let union_set = new UnionFindSet(M.length);
  for(let i = 0; i < M.length; i++) {
    for(let j = i + 1; j < M[0].length; j++) {
      if(M[i][j] === 1) {
        union_set.union(i, j);
      }
    }
  }
  return union_set.getCount();
};

class UnionFindSet {
  constructor(n) {
    this.parents = [];
    this.ranks = [];
    this.count = n;
    for(let i = 0; i < n; i++) {
      this.parents.push(i);
      this.ranks.push(i);
    }
  }
  
  union(u, v) {
    let pu = this.find(u);
    let pv = this.find(v);
    if(pu === pv) return ;
    if(this.ranks[pv] > this.ranks[pu]) {
      this.parents[pu] = pv;
    } else if(this.ranks[pv] < this.ranks[pu]) {
      this.parents[pv] = pu;
    } else {
      this.parents[pv] = pu;
      this.ranks[pu]++;
    }
    this.count--;
  }
  
  find(u) {
    while(u !== this.parents[u]) {
      this.parents[u] = this.parents[this.parents[u]]
      u = this.parents[u];
    }
    return u;
  }
  
  getCount() {
    return this.count;
  }
}