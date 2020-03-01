var search = function(nums, target) {
  if(nums.length === 0) return -1;
  let start = 0, end = nums.length - 1, mid;
  while(start + 1 < end) {
    mid = Math.floor(start + (end - start) / 2);
    if(target === nums[mid]) return mid;
    else if(nums[start] < nums[mid]) {
      if(nums[start] <= target && target <= nums[mid]) end = mid;
      else start = mid;
    } else {
      if(nums[mid] <= target && target <= nums[end]) start = mid;
      else end = mid;
    }
  }
  if(nums[start] === target) return start;
  if(nums[end] === target) return end;
  return -1;
};