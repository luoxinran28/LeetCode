import java.util.Arrays;



/**
 * 
 * 
 * 3. threeSumClosest: Given an array S of n integers, find three 
 * integers in S such that the sum is closest to a given number, target. 
 * Return the sum of the three integers. 
 * You may assume that each input would have exactly one solution.
 * 
 * **/


public class Sum_3SumClosest {

    public static void main(String[] args) {  
		int[] data = {3,6,9,12,15};
        System.out.println(new Sum_3SumClosest().threeSumClosest(data, 20));  
    }  
	
	
	private int closest;  
    private boolean needInit;  
      
    public int threeSumClosest(int[] num, int target) {  
        closest = 0;  
        needInit = true;  
        Arrays.sort(num);  
          
        int i = 0;  
        for (i = 0; i <= num.length - 3; i++) {  
            if (i != 0 && num[i] == num[i - 1]) {  
                continue;  
            }  
            judgeAndPut(num, i, i + 1, num.length - 1, target);  
        }  
        return closest;  
    }  
  
    private void judgeAndPut(int[] num, int i, int p, int q, int target) {  
          
        while (p < q) {  
            int sum = num[i] + num[p] + num[q];  
            if (needInit || Math.abs(sum - target) < Math.abs(closest - target)) {  
                closest = sum;  
            }  
            needInit = false;  
              
            if (sum <= target) {  
                p++;  
                while (p < q && num[p] == num[p - 1]) {  
                    p++;  
                }  
            } else if (sum > target){  
                q--;  
                while (p < q && num[q] == num[q + 1]) {  
                    q--;  
                }  
            }  
        }  
          
    }  
      

	
	

}
