import java.util.ArrayList;
import java.util.Arrays;


public class Sum_4Sum {
    private ArrayList<ArrayList<Integer>> list;  
    
    public ArrayList<ArrayList<Integer>> fourSum(int[] num, int target) {  
        list = new ArrayList<ArrayList<Integer>>();  
        Arrays.sort(num);  
          
        int i = 0;  
        int j = 0;  
        for (i = 0; i <= num.length - 4; i++) {  
            if (i != 0 && num[i] == num[i - 1]) {  
                continue;  
            }  
              
            for (j = i + 1; j <= num.length - 3; j++) {  
                if (j != i + 1 && num[j] == num[j - 1]) {  
                    continue;  
                }  
                judgeAndPut(num, i, j, j + 1, num.length - 1, target);  
            }  
              
        }  
         
        return list;              
    }  
  
    private void judgeAndPut(int[] num, int i, int j, int p, int q, int target) {  
        while (p < q) {  
            int sum = num[i] + num[j] + num[p] + num[q];  
            if (sum < target) {  
                p++;  
            } else if (sum > target){  
                q--;  
            } else if (sum == target) {  
                ArrayList<Integer> tmpList = new ArrayList<Integer>();  
                tmpList.add(num[i]);  
                tmpList.add(num[j]);  
                tmpList.add(num[p]);  
                tmpList.add(num[q]);  
                list.add(tmpList);  
                p++;  
                q--;  
                while (p < q && num[p] == num[p - 1]) {  
                    p++;  
                }  
                while (p < q && num[q] == num[q + 1]) {  
                    q--;  
                }  
            }  
        }  
          
    }  
      
    public static void main(String[] args) {  
        int num[] = {-1,0,1,0,-2,2};  
        System.out.println(new Sum_4Sum().fourSum(num, 0));  
  
    }  
}
