import java.util.ArrayList;


public class SpiralMatrix {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
		System.out.println(spiralOrder(matrix));
		generateMatrix(4);
	}
	
    public static ArrayList<Integer> spiralOrder(int[][] matrix) {
        // Start typing your Java solution below
        // DO NOT write main() function
        if (matrix.length == 0) {
        	return new ArrayList<Integer>();
		}
		return spiralOrder(matrix, 0, matrix.length, matrix[0].length);
    }
    
//	Spiral Matrix I
	public static ArrayList<Integer> spiralOrder(int[][] matrix, int k, int m, int n) {
		ArrayList<Integer> seq = new ArrayList<Integer>();
		if (m <= 0 || n <= 0) {
			return seq;	
		}
		
		// when still have last one.
		if( m == 1){
			for (int j = 0; j < n; j++) {
				seq.add(matrix[k][k+j]);
			}
			return seq;
		}
		if( n == 1){
			for (int i = 0; i < m; i++) {
				seq.add(matrix[k+i][k]);
			}
			return seq;
		}

		//be careful of the 4 corners, do not duplicate them
		// from top left to top right
		for (int j = 0; j < n-1; j++) {
			seq.add(matrix[k][k+j]);
		}
		// from top right to bottom right
		for (int i = 0; i < m-1; i++) {
			seq.add(matrix[k+i][k+n-1]); // k+n-1 means the last column
		}

		// from bottom right to bottom left
		for (int j = 0; j < n - 1; j++) {
			seq.add(matrix[k+m-1][k+n-1-j]);	// k+m-1 means the last row
		}

		// from bottom left to top left
		for (int i = 0; i < m-1; i++) {
			seq.add(matrix[k+m-1-i][k]);
		}

		seq.addAll(spiralOrder(matrix, k + 1, m - 2, n - 2));

		return seq;
	}
	
	
//	Spiral Matrix II
	public static int[][] generateMatrix(int n) {
		int[][] res = new int[n][n];
        for(int i =0;i<n;i++){
            for(int j = 0; j<n; j++){
                res[i][j] = 0;
            }
        }
        if (n==0){return res;}
        int i=1;
        int x = 0;
        int y = 0;
        res[0][0]=i++;
        while (i<=n*n){
            while (y+1<n && res[x][y+1]==0){   // keep going right
                res[x][++y]=i++;
            }
            while (x+1<n && res[x+1][y]==0){   // keep going down
                res[++x][y]=i++;
            }
            while (y-1>=0 && res[x][y-1]==0){  // keep going left
                res[x][--y]=i++;
            }
            while (x-1>=0 && res[x-1][y]==0){  // keep going up
                res[--x][y]=i++;
            }
        }
        return res;
    }

}
