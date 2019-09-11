
public class RotateImage {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
		rotate(matrix);
	}
	public static void rotate(int[][] matrix) {
        // Start typing your Java solution below
        // DO NOT write main() function
//        int size = matrix.length;
//        for (int i = 0; i < size/2; i++)
//            for (int j = 0; j < (size + 1)/2; j++){
//               int temp = matrix[i][j];
//                matrix[i][j] = matrix[size - j - 1][i];
//                matrix[size -j - 1][i] = matrix[size - i - 1][size - j - 1];
//                matrix[size - i - 1][size - j - 1] = matrix[j][size - i - 1];
//                matrix[j][size - i - 1] = temp;
//        }
        
        
        int n = matrix.length;
        for (int layer=0; layer<n/2; layer++){
            int first = layer;
            int last  = n-1-layer; 
            for (int i=first;i<last;i++){
                int offset = i-first;
                int top = matrix[first][i];
                //left->top            
                matrix[first][i]=matrix[last-offset][first];
                //bottom->top
                matrix[last-offset][first] = matrix[last][last-offset];
                //right->bottom
                matrix[last][last-offset] = matrix[i][last];
                //top->right
                matrix[i][last] = top;
            }
        }
        
    }
}
