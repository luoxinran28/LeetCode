/**
 * 
 * Best time to buy ans sell stock I
 * Say you have an array for which the ith element is the price of a 
 * given stock on day i.
	If you were only permitted to complete at most one transaction 
	(ie, buy one and sell one share of the stock), design an algorithm 
	to find the maximum profit.
	
	Analysis:
	The idea is very simple: buy the stock at a lower price and sell it at 
	a higher price in the future.
	The easiest way is try to sell the stock from the 2nd day to the last 
	day, and get the highest profit. For each sell day, get the lowest price 
	before and compute the profit. The algorithm contains two loop, one from
	 the second day to the last, and one from the first day to the current sell day. The complexity is O(n^2).
	
	A better way. How to reduce the complexity ? Similar idea as above but 
	pre-compute the minimum value for each day, which means for each day, 
	compute and store the minimum price of the previous days. In this step 
	the complexity is O(n). Then scan all the days to get the max profit,  
	total complexity is still O(n).
 * 
 * *********************************************
 * 
 * Best time to buy ans sell stock II
 * Say you have an array for which the ith element is the price of a 
 * given stock on day i.
 * 
	Design an algorithm to find the maximum profit. 
	You may complete as many transactions as you like 
	(ie, buy one and sell one share of the stock multiple times). 
	However, you may not engage in multiple transactions at the 
	same time (ie, you must sell the stock before you buy again).
	
	Analysis:
	Scan the vector, add all the sub set which are non-decreasing order.
	e.g. 
	1 2 4 2 5 7 2 4 9 0 9
	(1 2 4) (2 5 7) ( 2 4 9) (0 9)  
	prof = 3 + 5 + 7 + 9  = 24.
 * 
 * 
 * 
 * 
 * 
 * 
 * **/


public class BestTimeToBuyAndSellStock {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int[] prices={1,2,4,2,5,7,2,4,9};
		System.out.println(maxProfit(prices));
	}

	private static int maxProfit(int[] prices) {
		// TODO Auto-generated method stub
		
//		// Best time to buy and sell stock I
//		int ans = 0;
//		
//		Integer[] mins = new Integer[prices.length];
//		
//		if (prices.length>1){
//			int min = prices[0];
//			for(int i=0; i<prices.length;i++){
//				if(prices[i]<min){
//					min = prices[i];
//				}
//				mins[i] = min;
//			}
//			for(int i=0; i<prices.length;i++){
//				int range = prices[i]-mins[i];
//				if(range>ans){
//					ans = range;
//				}
//			}
//			
//		}
//		return ans;


		
		
//		// BestTimeToBuyAndSellStock II
//        int ans = 0;
//        for(int i = 1; i < prices.length; i ++)
//        {
//            if(prices[i] > prices[i - 1])
//                ans += prices[i] - prices[i - 1];
//        }
//		return ans;
		
		
		// Best time to buy and sell stock III
		int ans = 0;
		Integer[] maxs = new Integer[prices.length];
		
		if (prices.length>1){
			int max = 0;
			int start = prices[0];
			for(int i=0; i<prices.length;i++){
				if(max<prices[i]-start){
					max = prices[i]-start;
				}
				if(prices[i]<start){
					start=prices[i];
				}
				maxs[i] = max;
//				System.out.println(max);
			}
			int end = prices[prices.length-1];
			
			for(int i=prices.length-2; i>=0;i--){
				
				int range = end - prices[i]+maxs[i];
				
				if(range>ans){
					ans = range;
//					System.out.println(end+"-"+prices[i]+"+"+maxs[i]);
//					System.out.println(ans);
				}
				if (prices[i]>end) {
					end = prices[i];
				}
			}
			
		}
		return ans;
		
        
	}
	
	
	

}
