import java.util.ArrayList;
import java.util.Arrays;



/**
 * 
 * 2.threeSum: Given an array S of n integers, are there elements a, b, c 
 * in S such that a + b + c = 0? Find all unique triplets in the array 
 * which gives the sum of zero.
	Note:
	Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ? b ? c)
	The solution set must not contain duplicate triplets.


 * **/

public class Sum_3Sum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] data = {-1,0,1,2,-1,-4};
		System.out.println(new Sum_3Sum().threeSum(data));
	}
	
	private ArrayList<ArrayList<Integer>> list;  
    
    public ArrayList<ArrayList<Integer>> threeSum(int[] num) {  
        list = new ArrayList<ArrayList<Integer>>();  
        Arrays.sort(num);  
          
        int i = 0;  
        // 遍历每个元素
        for (i = 0; i <= num.length - 3; i++) {  
            if (i != 0 && num[i] == num[i - 1]) {  
                continue;  
            }  
            judgeAndPut(num, i, i + 1, num.length - 1);  
        }  
         
        return list;  
    }  
  
    private void judgeAndPut(int[] num, int i, int p, int q) {  
        while (p < q) {  
        	// 如果3个数加起来小于零，前指针后移
            if (num[p] + num[q] < -num[i]) {  
                p++;  
            // 如果3个数加起来大于零，后指针前移
            } else if (num[p] + num[q] > -num[i]){  
                q--;  
            // 加起来的数刚好等于0
            } else if (num[p] + num[q] == -num[i]) {  
            	// 返回
                ArrayList<Integer> tmpList = new ArrayList<Integer>();  
                tmpList.add(num[i]);  
                tmpList.add(num[p]);  
                tmpList.add(num[q]);  
                list.add(tmpList);  
                // 前后指针往中间移动
                p++;  
                q--;  
                // 如果有连续相同的情况
                while (p < q && num[p] == num[p - 1]) {  
                    p++;  
                }  
                while (p < q && num[q] == num[q + 1]) {  
                    q--;  
                }  
            }  
        }  
    }  

}
