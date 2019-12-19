/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices === null || prices.length <= 1) return 0;
  let len = prices.length;
  let min_price = prices[0];
  let max_profit = Array.from({length: len}).fill(0);
  for(let i = 1; i < len; i++) {
    min_price = Math.min(prices[i], min_price);
    max_profit[i] = Math.max(prices[i] - min_price, max_profit[i - 1]);
  }
  return max_profit[len - 1];
};

var maxProfit = function(prices) {
  let nums = [prices[0]];
  for(let i = 1; i < prices.length; i++) {
    nums.push(prices[i] - prices[i - 1]);
  }
  return Math.max(0, maxSubArray(nums));
  
  function maxSubArray(nums) {
    let maxCur = 0;
    let maxSoFar = 0;
    for(let i = 1; i < nums.length; i++) {
      maxCur = Math.max(maxCur + nums[i], nums[i]);
      maxSoFar = Math.max(maxSoFar, maxCur);
    }
    return maxSoFar;
  }
};
