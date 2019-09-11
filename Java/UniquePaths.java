import java.util.ArrayList;


public class UniquePaths {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println(uniquePaths(3,7));
		
		
	}

	
	public static int uniquePaths(int m, int n) {
        // Start typing your Java solution below
        // DO NOT write main() function
        int[][] table = new int[m][n];
        table[0][0] = 1;
        for (int i = 1; i < m; i ++){
            table[i][0] = table[i - 1][0];
        }
        for (int j = 1; j < n; j ++){
            table[0][j] = table[0][j - 1];
        }
        for (int i  = 1; i < m; i ++){
            for (int j = 1; j < n; j ++){
                table[i][j] = table[i][j - 1] + table[i - 1][j];
            }
        }
        return table[m - 1][n - 1];
        
        
        
    }
}
