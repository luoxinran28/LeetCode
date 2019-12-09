//当前单元能装多少水是取决于左右两边挡板最小值与当前值之差
var trap = function(height) {
  if(height.length < 3) return 0;
  let max_left = 0, max_right = 0;
  let left = 0, right = height.length - 1;
  let res = 0;
  while(left < right) {
    if(height[left] < height[right]) {
      max_left = Math.max(max_left, height[left]);
      res += max_left - height[left];
      left++;
    } else {
      max_right = Math.max(max_right, height[right]);
      res += max_right - height[right];
      right--;
    }
  }
  return res;
};