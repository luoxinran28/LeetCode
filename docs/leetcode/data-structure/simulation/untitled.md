# 31. Next Permutation

题目要求下一个排列的数组是递增的，意味着下一个数比当前数大。例如下面例子，从右往左开始扫描，找到第一个没有递增的数就是3，因为”6，5，4，1“是递减的，意味着下一个排列已经到头了，”6，5，4，1“会被洗掉。

```text
2,3,6,5,4,1
  ^
```

将3跟第一个比它大的数就是4交换，得到“2，4，6，5，3，1”，这是因为下一个递增排列一定是从比3大的最小数开始重新排列的，这里从右往左扫描找到第一个比3大的数就可以了。注意如果从右往左扫描到整个数组是递增的，说明已经是最大的值了，只需要把整个数组反转就行了。3和4交换后，将4后面的数反转就是需要的下一个排列“2，4，1，3，5，6”

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if(nums === null || nums.length <= 1) return;
  let len = nums.length;
  let piv = -1;
  for(let i = len - 2; i >=0; i--) {
    if(nums[i + 1] > nums[i]) {
      piv = i;
      break;
    }
  }
  
  if(piv === -1) {
    reverse(nums, 0, len - 1);
    return;
  }
  
  for(let i = len - 1; i > piv; i--) {
    
    if(nums[i] > nums[piv]) {
      swap(nums, i, piv);
      break;
    }
  }
  reverse(nums, piv + 1, len - 1);
  
  
  function swap(nums, a, b) {
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  }
  
  function reverse(nums, start, end) {
    while(start < end) {
      swap(nums, start, end);
      start++;
      end--;
    }
  }
};
```

