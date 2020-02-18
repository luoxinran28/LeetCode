/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*
这题可以通过最小堆或者桶排实现：

最小堆
因为最终需要返回前 k 个频率最大的元素，通过维护一个元素数目为 k 的最小堆，每次都将新的元素与堆顶端的元素（堆中频率最小的元素）进行比较，如果新的元素的频率比堆顶端的元素大，则弹出堆顶端的元素，将新的元素添加进堆中。最终，堆中的 k 个元素即为前 k 个高频元素。如果k=n，时间复杂度就还是O(nlog(n))

桶排 https://www.youtube.com/watch?v=lm6pBga98-w
将数组中的元素按照出现频次进行分组，即出现频次为 i 的元素存放在第 i 个桶。最后，从桶中逆序取出前 k 个元素。时间复杂度O(n)
*/
var topKFrequent = function(nums, k) {
  let map = {};
  let bucket = [...Array(nums.length + 1)].map(() => []);
  // [1,1,1,2,2,3] 变成{1:3, 2:2, 3:1}
  for(let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  
  // {1:3, 2:2, 3:1} 变成 [ [], [ 3 ], [ 2 ], [ 1 ], [], [], [] ]
  for(let key in map) {
    bucket[map[key]].push(parseInt(key));
  }

  let res = [];
  let i = bucket.length - 1;
  // 从后往前找k个数
  while(i >= 0) {
    while(bucket[i].length > 0 && k > 0) {
      res.push(bucket[i].shift());
      k--;
    }
    i--;
  }
  return res;
};