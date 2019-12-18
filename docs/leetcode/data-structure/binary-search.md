# Binary Search

九章模板，通过改变nums\[mid\] &lt;= target 的等于条件来找到左右边界bound，等号在右边就是左边界，在左边就是右边界。结果如果是左边界，先判断left。

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let res = [];
  let left = 0, right = nums.length - 1;
  while(left + 1 < right) {
    let mid = Math.floor((right + left) / 2);
    if(nums[mid] >= target) { // 说明target在左边
      right = mid;
    } else {
      left = mid;
    }
  } 
  
  if(nums[left] === target) { // 先判断左边
    res.push(left); 
  } else if(nums[right] === target) {
    res.push(right);
  } else {
    return [-1, -1];
  }

  left = 0, right = nums.length - 1;
  while(left + 1 < right) {
    let mid = Math.floor((right + left) / 2);
    if(nums[mid] <= target) { // 说明target在右边
      left = mid;
    } else {
      right = mid;
    }
  } 
  
  if(nums[right] === target) { // 先判断右边
    res.push(right); 
  } else if(nums[left] === target) {
    res.push(left);
  } else {
    return [-1, -1];
  }
  return res;

};
```

