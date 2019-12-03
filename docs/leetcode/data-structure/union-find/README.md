# 并查集 Union Find

并查集\(Union Find\)，用于判定无向图是否链接，主要有find和union连个函数，find的过程中要注意压缩子节点的深度，union过程中，rank值小的要接到大的下面，这样可以减少overhead。

```javascript
var UnionFindSet = function (n) { 
  this.parents = [];
  this.ranks = [];
  for (let i = 0; i < n; i++) { 
    this.parents[i] = i;
    this.ranks = i;
  }
}

UnionFindSet.prototype.find = function(u) { 
  while (this.parents[u] !== u) { 
    this.parents = this.parents[this.parents[u]]; // Compression
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
```



