# Binary Search

二分搜索模板：

```javascript
function binarySearch(nums, target) { 
    if (nums === null || nums.length === 0) {
        return -1;
    }
    let start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] == target) {
            end = mid;
        } else if (nums[mid] < target) {
            start = mid;
            // or start = mid + 1
        } else {
            end = mid;
            // or end = mid - 1
        }
    }
    
    if (nums[start] === target) {
        return start;
    }
    if (nums[end] === target) {
        return end;
    }
    return -1;
}
```

