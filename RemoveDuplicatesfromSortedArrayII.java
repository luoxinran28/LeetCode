
public class RemoveDuplicatesfromSortedArrayII {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] A = {1,1,1,1,1,2,2,3};
		System.out.println(removeDuplicates(A));
	}

	
    private static int removeDuplicates(int A[]) {
        int i, j, cnt;  // j stays at the third one, i keep moving forward
        for(i = j = cnt = 0; i < A.length; i++)
        {
            if(j != 0 && A[j - 1] == A[i]) cnt++;
            else cnt = 0;
            if(cnt < 2) A[j++] = A[i];
        }
        return j;
    }
}
