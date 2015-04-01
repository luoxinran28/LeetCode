/**
 * 
 * For the small test, we can look at the bar graph from level to level. 
 * For each level, scan from the 1st to the last, count 0s between two 1's. 
 * Add all the valid 0s for all the levels. However, if the highest and 
 * lowest bar is too much different, say 0, 100000, the loop while 100000*n, 
 * which is not efficient.

	An O(n) solution is to consider each bar at a time, we can see that, 
	for each bar, the water itself can trap depends on the max height on its 
	left and right, e.g.  if current bar is of height 2, the max height on its 
	left is 4, max height on its right is 3,   then water can be trapped in this 
	bar is min(4,3)-2 = 1.
	
	Thus, we can scan the whole map twice to get the max height on right and left, 
	respectively. Finally scan the map again to get the water trapped of all.
 * 
 * **/



public class TrappingRainWater {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] A = {0,1,0,2,1,0,1,3,2,1,2,1};
		System.out.println(trap(A));
	}
	
	public static int trap(int[] A) {

        int n = A.length;
        if (n < 3) return 0;
        int[] lmax = new int[n];
        int[] rmax = new int[n];
        lmax[0] = A[0];
        for (int i = 1; i < n; i++){
            lmax[i] = (lmax[i - 1] > A[i]) ? lmax[i - 1] : A[i];
        }
        rmax[n - 1] = A[n - 1];
        for (int i = n - 2; i >= 0; i--){
            rmax[i] = (rmax[i + 1] > A[i]) ? rmax[i + 1] : A[i];
        }
        int total = 0;
        for (int i = 1; i < n - 1; i++){
            int low = (lmax[i - 1] < rmax[i + 1]) ? lmax[i - 1] : rmax[i + 1];
            total += (low > A[i]) ? (low - A[i]) : 0;
        }
        return total;
    }

}
