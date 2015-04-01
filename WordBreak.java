import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;


public class WordBreak {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String s = "leetcode";
		Set<String> dict = new TreeSet<String>();
		dict.add("leet");
		dict.add("code");
		System.out.println(wordBreak(s,dict));
	}
	
	
	/**
	 * 
	 * The idea is pretty similar to other DP solution. 1)keep all positions 
	 * which could form substring contained in the set in a linkedlist 2) Iterate 
	 * the target string, check substring between current position and stored 
	 * positions. If new sub string hits the dictionary,add it the front of linkedlist 
	 * 3)After iteration, check if the front element of linkedlist equals 
	 * to the length of string.
	 * 
	 * **/
	public static boolean wordBreak(String s, Set<String> dict) {
        if (s==null||s.length()==0) return false;
        else if (dict.contains(s)) return true;

        List<Integer> starts = new LinkedList<Integer>();
        starts.add(0);

        for (int end=1;end<=s.length();end++){
            boolean found=false;
            for (Integer start:starts)
                if (dict.contains(s.substring(start,end))){
                    found=true;
                    break;
                }
            if(found)  starts.add(0,end);
        }

        return (starts.get(0)==s.length());
    }

}
