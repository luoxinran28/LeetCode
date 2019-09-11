import java.util.ArrayList;
import java.util.Iterator;


public class Combinations {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(combine(4,2));
	}
	
    private static void dfs(ArrayList<ArrayList<Integer>> res,
		 ArrayList<Integer> cand,
		 int st, int ed, ArrayList<Integer> lr){
    	if (lr.size()==ed){
        	ArrayList<Integer> storeTmp = new ArrayList<Integer>();
        	Iterator<Integer> iter = lr.iterator();
        	while(iter.hasNext()){
        		storeTmp.add((Integer)iter.next());
        	}
            res.add(storeTmp);
//            System.out.println("add itme: "+storeTmp);
            return;
        }
        for (int i = st; i< cand.size();i++){
        	lr.add(cand.get(i));
        	dfs(res,cand,i+1,ed,lr);
        	lr.remove(lr.indexOf(cand.get(i)));
        	
        }
         
         
    }

  public static ArrayList<ArrayList<Integer>> combine(int n, int k) {

	  	ArrayList<ArrayList<Integer>> res = new ArrayList<ArrayList<Integer>>();
	  	ArrayList<Integer> cand = new ArrayList<Integer>();

        if ((k<1)||(n<1)||(k>n)){return res;}
        for (int i = 1; i<=n;i++){
            cand.add(i);
        }
        ArrayList<Integer> lr = new ArrayList<Integer>();
        dfs(res, cand,0,k,lr);
        return res;
    }
	
	
	
	
	
	

//    private static void DFS(ArrayList<ArrayList<Integer>> res,
//				    		ArrayList<Integer> now,
//				    		int n, int ith, int sum, int k)
//    {
//    	if(sum == k)
//        {
//        	ArrayList<Integer> storeTmp = new ArrayList<Integer>();
//        	Iterator<Integer> iter = now.iterator();
//        	while(iter.hasNext()){
//        		storeTmp.add((Integer)iter.next());
//        	}
//            res.add(storeTmp);
//            System.out.println("add itme: "+storeTmp);
//            return;
//        }
//        if(sum + n - ith + 1 > k)
//        {
////        	System.out.println("sum: "+sum+" n: "+n+" ith: "+ith+" k: "+k);
//            DFS(res, now, n, ith + 1, sum, k);
//        }
//        System.out.println("sum: "+sum+" ith: "+ith);
//        
//        now.add(ith);
//        DFS(res, now, n, ith + 1, sum + 1, k);
//        now.remove(now.indexOf(ith));
//    }
//    
//    public static ArrayList<ArrayList<Integer>> combine(int n, int k) {
//    	ArrayList<ArrayList<Integer>> res = new ArrayList<ArrayList<Integer>>();
//    	ArrayList<Integer> now = new ArrayList<Integer>();
//        DFS(res, now, n, 1, 0, k);
//        return res;
//    }

}
