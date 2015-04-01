import java.util.ArrayList;
import java.util.List;


public class UniqueBinarySearchTrees {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n=3;
		System.out.println(numTrees(n));
	}

	private static int numTrees(int n) {
		// TODO Auto-generated method stub

        if (n==0){return 1;}
        if (n==1){return 1;}
        int sum=0;
        for (int i=1;i<=n;i++){
            sum += numTrees(i-1)*numTrees(n-i);
        }
        

        Integer[] d = new Integer[n+1];
        
        return sum;
	}

	
	
	
}
