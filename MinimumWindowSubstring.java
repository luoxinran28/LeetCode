import java.util.HashMap;


public class MinimumWindowSubstring {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String S = "ADOBECODEBANC";
		String T = "ABC";
		System.out.println(new MinimumWindowSubstring().minWindow(S, T));
	}
	
	public String minWindow(String S, String T) {
		
		int sLen=S.length();  
        int tLen=T.length();  
        if(tLen==0 || sLen<tLen) return "";  
          
        //stores the total count of a character in T 
        int[] needFind = new int[256];
        // stores the total count of a character met so far
        int[] hasFound = new int[256];
          
        for(int i=0;i<tLen;i++)  
        {  
            needFind[T.charAt(i)]++;  
        }  
          
        int minWindowLength=Integer.MAX_VALUE;  
        int minBegin=0;  
//        int minEnd=sLen-1;  
        int begin=0;  
        int end=0;  
        // store the total characters in T that’s met so far 
        // (not counting characters where hasFound[x] exceeds needToFind[x])
        int count = 0;
        for(;end<sLen;end++)  
        {  
            //skip those not in T
            if(needFind[S.charAt(end)]==0) continue;  
            
            hasFound[S.charAt(end)]++;
            //update the total number of characters found(aaa only counts 2 for aa in T) 
            if(hasFound[S.charAt(end)]<=needFind[S.charAt(end)]) count++;
                  
            //a window exists from begin to end
            if(count==tLen)  
            {  
                //move begin pointer to find the minimum window  
                while(begin<end)  
                {  
                    if(needFind[S.charAt(begin)]==0){// if it's not targets.
                        begin++;  
                        continue;
                    }  
                    // if hasFound is larger than need find, shrink the begin and end.
                    if(hasFound[S.charAt(begin)] > needFind[S.charAt(begin)]){  
                    	hasFound[S.charAt(begin)]--;
                        begin++;  
                        continue;  
                    }  
                    else  
                        break;  
                }  
                  
                int tmpWindowLength=end-begin+1;  
                  
                if(tmpWindowLength < minWindowLength)  
                {  
                    minBegin=begin;
                    minWindowLength=tmpWindowLength;  
                }  
            }  
        }  
          
        if(minWindowLength==Integer.MAX_VALUE)  
            return "";  
        return S.substring(minBegin,minBegin+minWindowLength);
		
		
		
//		// save the number of each characters in string T
//        HashMap<Character, Integer> dict = new HashMap<>();
//        for (int i = 0; i < T.length(); i++) {
//            char c = T.charAt(i);
//            if (!dict.containsKey(c))
//                dict.put(c, 1);
//            else
//                dict.put(c, dict.get(c) + 1);
//        }
//        //used to save the number of characters we found
//        HashMap<Character, Integer> found = new HashMap<>();
//        int foundCounter = 0;
//        int start = 0;
//        int end = 0;
//        int min = Integer.MAX_VALUE;
//        String minWindow = "";
//        while (end < S.length()) {
//            char c = S.charAt(end);
//            if (dict.containsKey(c)) {
//                if (found.containsKey(c)) {
//                    if (found.get(c) < dict.get(c))
//                        foundCounter++;
//                    found.put(c, found.get(c) + 1);
//                } else {
//                    found.put(c, 1);
//                    foundCounter++;
//                }
//            }
//            if (foundCounter == T.length()) {
//                //When foundCounter equals to T.length(), in other words, found all characters.
//                char sc = S.charAt(start);
//                while (!found.containsKey(sc) || found.get(sc) > dict.get(sc)) {
//                    if (found.containsKey(sc) && found.get(sc) > dict.get(sc))
//                        found.put(sc, found.get(sc) - 1);
//                    start++;
//                    sc = S.charAt(start);
//                }
//                if (end - start + 1 < min) {
//                    minWindow = S.substring(start, end + 1);
//                    min = end - start + 1;
//                }
//            }
//            end++;
//        }
//        return minWindow;
    }

}
