/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
/*
状态机，三个状态rest, hold, and sold。
hold：取最大值：之前如果是继续持有，或者买入股票 - price。
sold：之前持有的股票套现
rest：取最大值，之前什么都没做，或者已经把股票卖掉。
*/
var maxProfit = function(prices) {
    
  let rest = 0;
  let sold = 0;
  let hold = -Infinity; // 因为没有买进，手中持有是负无穷大
  
  for(let price of prices) {
    let preSold = sold;
    let preHold = hold;
    hold = Math.max(preHold, rest - price);
    sold = preHold + price;
    rest = Math.max(rest, preSold);    
  }
  return Math.max(rest, sold);
};
// @lc code=end

