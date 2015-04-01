import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;


public class Subsets {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] num = {1,2,3,4};
//		System.out.println(subsetsWithDup(num));
		System.out.println(subsets(num));
	}
	
	
	/**
	 * Analysis:
		The easiest idea is using the binary numbers.
		e.g.
		set [a,b,c], write the binary numbers of length 3.
		000    []
		001    [a]
		010    [b]
		011    [ab]
		100    [c]
		101    [ac]
		110    [bc]
		111    [abc]
		
		Then the problem is pretty easy, just have to implement 
		the int binary to string part.
	 * **/
//	private static String getbinary(int d,int len){
//        String str="";
//        int strLength = str.length();
//        while (d>0){
//            str=str+(char) ((d%2)+'0');
//            d=d/2;
//        }   
//        for(int i=0;i<len-strLength;i++){
//        	str=str+'0';   
//        }
//        return str;
//    }
	
	public static ArrayList<ArrayList<Integer>> subsetsWithDup(int[] num) {

//		Arrays.sort(num);
//		ArrayList<ArrayList<Integer>> result = new ArrayList<ArrayList<Integer>>();
//        int n = num.length;
//        for (int i=0;i<Math.pow(2,n);i++){
//            String str = getbinary(i,n);
//            ArrayList<Integer> ss = new ArrayList<Integer>();
//            for (int j=0;j<n;j++){
//                if (str.charAt(j)=='1'){
//                    ss.add(num[j]);
//                }
//            }
//            result.add(ss);
//        }
//        return result;
		
		
		
        ArrayList<ArrayList<Integer>> result = new ArrayList<ArrayList<Integer>>();
        int n = num.length;
        if (n == 0) {
			return result;
		}
    	Arrays.sort(num);
        int max = (int) Math.pow(2, n);
        for (int i = 0; i < max; i++){
            int k = i;
            int j = 0;
            ArrayList<Integer> subset = new ArrayList<Integer>();
            while (k > 0){
                if((k & 1) == 1){
                    subset.add(num[j]);
                }
                k /= 2;
                j++;
            }
            if(!result.contains(subset))
                result.add(subset);
            /*  This while will skip uncessary computation.
                But will mess up the output order. */
            /*
            while(i + 1 < n && num[i + 1] == num[i]){
                i++;
            }
            */
        }
		return result;
		
		
    }
	
///////////////////////////////////////////////////
// recursive way
///////////////////////////////////////////////////
	

    private static void DFS(	ArrayList<ArrayList<Integer>> res, 
		    					ArrayList<Integer> now,
		    					int[] S, int ith)
    {
    	/* 
    	 * {}
    	 * {3}
    	 * {2}, {2,3}
    	 * {1}, {1,3}, {1,2}, 
    	 * 		{1,2,3}
    	 * */
        if(ith == S.length)
        {
        	ArrayList<Integer> storeTmp = new ArrayList<Integer>();
        	
        	Iterator<Integer> iter = now.iterator();
        	while(iter.hasNext()){
        		storeTmp.add(iter.next());
        	}
            res.add(storeTmp);
            return;
        }
        DFS(res, now, S, ith + 1);
        now.add(S[ith]);
        DFS(res, now, S, ith + 1);
        now.remove(now.indexOf(S[ith]));
    }
    
    public static ArrayList<ArrayList<Integer>> subsets(int[] S) {
    	
    	ArrayList<Integer> now = new ArrayList<Integer>();
    	ArrayList<ArrayList<Integer>> res = new ArrayList<ArrayList<Integer>>();
    	
        Arrays.sort(S);
        DFS(res, now, S, 0);
        return res;
    }
	
//	public static ArrayList<ArrayList<Integer>> subsetsWithDup(int[] num) {
//
//		//almost the same backtrack algorithm of combination sum II
//		if (num.length == 0) {
//			return null;
//		}
//		Arrays.sort(num);
//		int[] backtrack = new int[num.length+1];
//		backtrack[0] = -1;
//		ArrayList<ArrayList<Integer>> result = new ArrayList<ArrayList<Integer>>();
//		ss(num, result, 0, backtrack);
//		return result;
//	}
//
//	//backtrack array contains the indexes
//	private static void ss(	int[] num, 
//							ArrayList<ArrayList<Integer>> result, 
//							int pos, 
//							int[] backtrack) {
//		ArrayList<Integer> x = new ArrayList<Integer>();
//		for (int i = 1; i <= pos; i++) {
//			x.add(num[backtrack[i]]);
//		}
//		result.add(x);
//		for (int i = backtrack[pos] + 1; i < num.length; i++) {
//			backtrack[pos + 1] = i;
//			ss(num, result, pos + 1,  backtrack);
//			while (i + 1 < num.length && num[i] == num[i + 1]) {
//				i++;
//			}
//		}
//	}

}
