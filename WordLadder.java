import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Set;


public class WordLadder {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String start = "hit";
		String end = "cog";
		Set<String> dict = new HashSet<String>();
		dict.add("dit");
		dict.add("hip");
		dict.add("sit");
		dict.add("hot");
		dict.add("got");
		dict.add("dot");
		dict.add("dog");
		dict.add("lot");
		dict.add("log");
		System.out.println(new WordLadder().ladderLength(start, end, dict));
		
	}

	public int ladderLength(String start, String end, Set<String> dict) {
//	        Set<String> set=new HashSet<String>();
//	        Queue<String> queue=new LinkedList<String>();
//	        queue.offer(start);
//	        int distance=1;
//	        int count=1;
//	        set.add(start);
//	        
//	        while(count>0){
//	            while(count>0){
//	                char[] curr=queue.poll().toCharArray();
//	                for(int i=0; i<curr.length;i++){	// for each letter of current string
//	                    char tmp=curr[i];	// store the current i letter
//	                    for(char c='a';c<='z';c++){	// loop every letter and find the matched one.
//	                        if(c==tmp) continue;
//	                        curr[i]=c;
//	                        String str=new String(curr);
//	                        if(str.equals(end)) return distance+1;
//	                        if(dict.contains(str) && !set.contains(str)){
//	                            queue.offer(str);
//	                            set.add(str);
//	                        }
//	                    }
//	                    curr[i]=tmp;	// recover the current string
//	                }
//	                count--;
//	            }
//	            distance++;
//	            count=queue.size();
//	        }
//	        return 0;
		
		
		if (start == null || end == null) return 0;  
        HashMap<String, Integer> visited = new HashMap<String, Integer>();  
        visited.put(start,1);  
        int size = start.length();  
        String alph = "abcdefghijklmnopqrstuvwxyz";  
          
        for (int i = 0; i < size; i++) {  
            for (int j = 0; j < 26; j++) {  
                String tmp = start.substring(0,i) + alph.substring(j, j + 1) + start.substring(i + 1,size);  
                if (tmp.equals(end))  
                    return 2;  
            }  
        }  
          
        //使用queue BFS  
        Queue<String> queue = new LinkedList<String>();  
        queue.offer(start);  
        while (!queue.isEmpty()) {  
            String top = queue.poll();  
            int step = visited.get(top);  
              
            for (int i = 0; i < size; i++) {  
                for (int j = 0; j < 26; j++) {  
                    //每次更换一个字符，然后比较是与end相同 或者 是否在dict里面  
                    String tmp = top.substring(0,i) + alph.substring(j, j + 1) + top.substring(i + 1,size);  
                    //如果与end相同，就返回。  
                    if (tmp.equals(end))  
                        return step + 1;  
                        //  
                    else if (dict.contains(tmp) && !visited.containsKey(tmp)) {  
                        visited.put(tmp, step + 1);  
                        queue.offer(tmp);
                    }  
                }  
            }  
        }  
        return 0;  
		
		
	    }
	
}
