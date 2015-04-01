import java.util.Stack;


public class LargestRectangleinHistogram {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] heights = {2,1,5,6,2,3};
		System.out.println(maxHistoArea(heights));
	}
	
	
	public int maximalRectangle(char[][] matrix) {
        // Start typing your Java solution below
        // DO NOT write main() function
        
    	if (matrix.length == 0) {
			return 0;
		}
		int m = matrix.length, n = matrix[0].length, max = 0;
		int[] heights = new int[n];
		for (int i = 0; i < m; i++) {
			for (int j = 0; j < n; j++) {
				if (matrix[i][j] == '1') {
					heights[j]++;
				}
				else {
					heights[j] = 0;
				}
			}

			max = Math.max(max, maxHistoArea(heights));
		}

		return max;
    }
	
	

	public static int maxHistoArea(int[] height) {
		
		int[] heights = new int[height.length+1];
		for(int i = 0; i<height.length;i++){
			heights[i] = height[i];
		}
		heights[height.length] = 0;
		
		Stack<Integer> st = new Stack<Integer>();
		int max = 0;

		int i = 0;
		while (i < heights.length) {
			if (st.empty() || heights[i] >= heights[st.peek()]) {
				st.push(i++);
			}
			else{
				int t = st.pop();
				max = Math.max(max, heights[t] * (st.empty()?i:(i - st.peek()-1)));
			}
		}


		return max;
	}
	
	
}
