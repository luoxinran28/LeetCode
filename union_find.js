var UnionFindSet = function (n) { 
  this.parents = [];
  this.ranks = [...Array(n)].fill(0);
  for (let i = 0; i < n; i++) { 
    this.parents[i] = i;
  }
}

UnionFindSet.prototype.find = function(u) { 
  while (this.parents[u] !== u) { 
    this.parents[u] = this.parents[this.parents[u]]; // Compression
    u = this.parents[u];
  }
  return u;
}

UnionFindSet.prototype.union = function(u, v) { 
  let pu = this.find(u);
  let pv = this.find(v);

  if (pu === pv) return false;
  if (this.ranks[pu] < this.ranks[pv]) {
    this.parents[pu] = pv;
  } else if (this.ranks[pu] > this.ranks[pv]) {
    this.parents[pv] = pu;
  } else { 
    this.parents[pv] = pu;
    this.ranks[pu]++;
  }
  return true;
}