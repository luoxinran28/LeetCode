
public class PermutationSequence {

//	public static void main(String[] args) {
//		// TODO Auto-generated method stub
//
//	}

	
	public static void main(String[] args) {  
        System.out.println(getPermutation(3, 3));  
    }  
      
    // 数学方法  
    public static String getPermutation(int n, int k) {  
        int[] nums = new int[n+10];  
        int permCount = 1;  
          
        for(int i=0; i<n; i++){  
            nums[i] = i+1;              // nums装有1,2,3,4,...,n  
            permCount *= (i+1);     // 最后计算出permCount = n!  
        }  
          
        k--;        // 对k减一，因为现在index是从[0,n-1]而不是[1,n]  
        StringBuilder sb = new StringBuilder();  
        for(int i=0; i<n; i++){  
            permCount = permCount / (n-i);  
            int idx = k / permCount;    // 该位应该选择的下标  
            sb.append(nums[idx]);  
            // 重建nums，左移一位  
            for(int j=idx; j<n-i; j++){  
                nums[j] = nums[j+1];  
            }  
            k %= permCount;  
        }  
        return sb.toString();  
    }  
	
}
