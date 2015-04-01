/***
 * 
 * Single Number
	Given an array of integers, every element appears twice except for one. Find that single one.
	Note:
	Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
	
	Analysis:
	
	The requirement is O(n) time and O(1) space.
	Thus, the  "first sort and then find " way is not working.
	Also the "hash map" way is not working.
	
	Since we can not sort the array, we shall find a cumulative way, which is not about the ordering.
	
	XOR is a good way, we can use the property that A XOR A = 0, and A XOR B XOR A = B.
	
	So, the code becomes extremely easy.
 * 
 * 
 * 
 * Single Number II
 * Given an array of integers, every element appears three times except for one. Find that single one.

	Note:
	Your algorithm should have a linear runtime complexity. 
	Could you implement it without using extra memory?
 * 
 * 
 * 现在的解法是比较普通的。因为题目已经说了，除了一个数字以外，其他的都出现了3次，
 * 如果我们把那个特殊的数剔除，并把剩下的数于每一位来加和的话，
 * 每一位上1出现的次数必然都是3的倍数。所以，解法就在这里，
 * 将每一位数字分解到32个bit上，统计每一个bit上1出现的次数。
 * 最后对于每一个bit上1出现的个数对3取模，剩下的就是结果。
 * 
 * 
 * 
 * 
 * **/


public class SingleNumber {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int[] A = {2, 1, 2, 2, 7, 6, 7, 6, 7, 6};
		
		System.out.println(singleNumber(A));
	}

	private static int singleNumber(int[] A) {
		// TODO Auto-generated method stub
		
//		// Single Number
//        int one = 0, two = 0;
//        for(int i = 0; i < A.length; i ++)
//        {
//            two |= one & A[i];
//            one ^= A[i];
//            int tmp = one & two;
//            two ^= tmp;
//            one ^= tmp;
//        }
//        return one;
        
        // Single Number II
        Integer cnt[] = new Integer[32];
        for(int i=0;i<cnt.length;i++){
        	cnt[i]=0;
        }
        for(int i = 0; i < A.length; i ++)
        {
            int tmp = A[i];
            for(int j = 0; j < 32; tmp >>= 1, j ++)
                cnt[j] += tmp & 1;
        }
        int ans = 0;
        for(int i = 0; i < 32; i ++){
        	cnt[i] = cnt[i] % 3;
        	cnt[i] = cnt[i] << i;
        	ans = ans | cnt[i];
//        	ans |= (cnt[i] % 3) << i;
        }
            
        return ans;
        

	}
	


}
