import java.util.ArrayList;
import java.util.Iterator;

public class Permutations {

	public static void main(String[] args) {
		// TODO Auto-generated method stub		
		int[] num = {1,2,3,4};
		Permutations perm = new Permutations();
		System.out.println(perm.permute(num));
	}
	
    private void DFS(ArrayList<ArrayList<Integer>> result, int cur, ArrayList<Integer> listNum)
    {
        if(cur == listNum.size())
        {
        	result.add(listNum);
            return;
        }
        else{
            for(int i = cur; i < listNum.size(); i++)
            {

            	ArrayList<Integer> swapTmp = new ArrayList<Integer>();
            	Iterator<Integer> iter = listNum.iterator();
            	while(iter.hasNext()){
            		swapTmp.add((Integer)iter.next());
            	}
            	// swap
            	int a, b;
    			a = listNum.get(cur);
    			b = listNum.get(i);
    			swapTmp.set(cur, b);
    			swapTmp.set(i, a);
            	
            	if(!result.contains(swapTmp)){
            		DFS(result, cur + 1, swapTmp);
            	}
                
                
            	
            }
        	
        	
        }

    }
    
    public ArrayList<ArrayList<Integer>> permute(int[] num) {
    	
    	ArrayList<ArrayList<Integer>> result = new ArrayList<ArrayList<Integer>>();
    	ArrayList<Integer> listNum = new ArrayList<Integer>();
    	for(int i=0;i<num.length;i++){
    		listNum.add(num[i]);
    	}
    	
        DFS(result, 0, listNum);
        return result;
    }
    

	
//	public static ArrayList<ArrayList<Integer>> permute(int[] num) {
//        // Start typing your Java solution below
//        // DO NOT write main() functiona
//         
//        //assume no duplicates
//        ArrayList<ArrayList<Integer>> result = new ArrayList<ArrayList<Integer>>();
//        int[] perm = new int[num.length];
//        boolean[] used = new boolean[num.length];
//        for (int i = 0; i < used.length; i++) {
//            used[i] = false;
//        }
//         
//        permute(num, 0, perm, used, result);
// 
//        return result;
//        
//  
//        
//    }
 
//    private static void permute(int[] num, int level, int[] perm, boolean[] used, ArrayList<ArrayList<Integer>> result){
//        if (num.length == level) {
//            ArrayList<Integer> x = new ArrayList<Integer>();
//            for (int i = 0; i < perm.length; i++) {
//                x.add(perm[i]);
//            }
//             result.add(x);
//            return;
//        }
// 
//        //used[i] = true means num[i] is used
//        for (int i = 0; i < num.length; i++) {
//            if (!used[i]) {
//                used[i] = true;
//                perm[level] = num[i];
//                permute(num, level+1, perm, used, result);
//                used[i] = false;
//            }
//        }
//    }
}
