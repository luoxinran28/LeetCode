
public class LongestPalindromicSubstring {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s = "a";
		System.out.println(longestPalindrome(s));
	}

	private static String prePorcess(String s){
		
		if(s.length() == 0) return "^$";
        String tmp = "^#";
        for(int i = 0; i < s.length(); i ++)
        {
        	tmp += s.charAt(i)+"#";
        }
            
        tmp += "$";
		return tmp;
	}
	
	public static String longestPalindrome(String s) {
		int center = 0, reach = 0, ansstart = 0, anslength = 0;
		String tmp = prePorcess(s);
        int tmpLength = tmp.length();
        int[] r = new int[tmpLength];
        
        for(int i = 1; i < tmpLength-1; i ++)
        {
            int mirror_i = center * 2 - i;
            r[i] = (reach > i) ? Math.min(r[mirror_i], reach - i) : 0;
            while(tmp.charAt(i + 1 + r[i]) == tmp.charAt(i - 1 - r[i])){
            	r[i]++;
            }
            if(i + r[i] > reach){
            	reach = i + r[i];
            	center = i;
            } 
            if(r[i] > anslength)
            {
                ansstart = i - r[i] >> 1;
                anslength = r[i];
            }
        }
        return s.substring(ansstart, ansstart+anslength);
    }
	
	
	
	
}
