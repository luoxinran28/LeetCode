
public class PalindromePartitioningII {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s = "svaabaadf";
		System.out.println(new PalindromePartitioningII().minCut(s));
	}
	
	
	// http://blog.csdn.net/yutianzuijin/article/details/16850031?reload#t3
	public int minCut(String s) {  
        int[][] dp=new int[s.length()][s.length()];  
        int[] count=new int[s.length()+1];  
          
        for(int i=s.length()-1;i>=0;i--)
        {  
            count[i]=Integer.MAX_VALUE;  
            for(int j=i;j<s.length();j++)  
            {  
                if(s.charAt(i)==s.charAt(j)&&(j-i<2||dp[i+1][j-1]==1))  
                {
                    dp[i][j]=1;  
                    count[i]=Math.min(1+count[j+1],count[i]);  
                }  
            }  
        }  
          
        return count[0]-1;         
	}
}
