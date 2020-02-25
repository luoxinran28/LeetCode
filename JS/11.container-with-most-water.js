/**
 * @param {number[]} height
 * @return {number}
 */
/*

双指针，左右找短的木板，然后计算面积，再移动短的木板向中间靠拢，重复此步骤。
*/
var maxArea = function(height) {
  if(height === null || height.length === 0) return 0;
  let l = 0, r = height.length - 1;
  let max = 0;
  while(l < r) {
    let h = Math.min(height[l], height[r]);
    max = Math.max(max, h * (r - l));
    if(height[l] < height[r]) l++;
    else r--;
  }
  return max;
};