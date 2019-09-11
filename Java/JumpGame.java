
public class JumpGame {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	
		int[] A = {3,1,5,1,1,1,1,4};
		System.out.println(canJump(A));
		System.out.println(jump(A));
	}
	
	/**
	 * In Jump Game, we can save the farthest position we can reach 
	 * when we go through the array. Every time we move, 
	 * we will decrease the step.
	 * 
	 * **/
    public static boolean canJump(int A[]) {
        if(A.length == 0) return false;
        int i, jumpdis;
        for(i = jumpdis = 0; i < A.length && jumpdis >= 0; i ++, jumpdis --)
            jumpdis = Math.max(A[i], jumpdis);
        return i == A.length;
    }

    
    /**
     * 维护一步最远到达的位置，到达这个位置之前的位置需要的步数都是一样的，
     * 到达这个位置的时候，下一步的最远位置已经更新完毕。
     * **/
    public static int jump(int[] A) {
    	int nex = 0, steps = 0, far = 0;
        for(int i = 0; i <= nex && i < A.length - 1; i ++)
        {
            far = Math.max(far, A[i] + i);
            if(i == nex)
            {
            	steps++;
                nex = far;
            }
        }
        return steps;
    }
    
}
