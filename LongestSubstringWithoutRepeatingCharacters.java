
public class LongestSubstringWithoutRepeatingCharacters {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(lengthOfLongestSubstring("abcabcbb"));
	}
	
	
	/**
	 * 
	 * Set two pointers, i,j, scan the string from the start to the end. 
	 * Set a table to store if the character has occurred.
	 * If s[j] has occurred in S[i..j-1],  compute current length and 
	 * compare to the max length. Then table[s[i]]=false; i++; 
	 * If s[j] has not occurred in S[i..j-1], table[s[j]]=true; j++; 
	 * **/
	public static int lengthOfLongestSubstring(String s) {
		int length = s.length();
		if(length==0){return 0;}
        if(length==1){return 1;}
        int i=0;
        int j=0;
        int maxl = 0;
        boolean[] table = new boolean[256];
        while ( (i<length) && (j<length) ){
            if (table[s.charAt(j)]==false){ 
                table[s.charAt(j)]=true;
                maxl = Math.max(maxl,j-i+1);
                j++; 
            }else if (table[s.charAt(j)]==true){
                maxl = Math.max(maxl,j-i);
                table[s.charAt(i)]=false;
                i++;
            }
        }
        return maxl;
    }

}
