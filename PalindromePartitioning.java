import java.util.ArrayList;



/**
 * 
 * When face the "return all", "get all ", "find all possible", "find the total number of", 
 * an idea is to use the RECURSION. Same as this problem!

	To get the all the partitions of a string s:
	1. find all the palindromes in substring s[0], and all the palindromes in substring s[1:end]
	2. find all the palindromes in substring s[0:1], and all the palindromes in substring s[2:end]
	...
	find all the palindromes in substring s[1:end-1], and all the palindromes in substring s[end]
	
	So the problem is quite clear, when we do recursion, two things should be considered:
	1. stop condition:  when the search goes to the last position in the string
	2. for loop or while loop:   for position=current start position to the end.
	
	This problem is not complex, see the code below and you will understand the idea:
 * 
 * 
 * 
 * */


public class PalindromePartitioning {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(partition("aabhjgg"));
	}
	
	public static ArrayList<ArrayList<String>> partition(String s) {  
        ArrayList<ArrayList<String>> res = new ArrayList<ArrayList<String>>();  
        ArrayList<String> tmp = new ArrayList<String>();  
        dfs(res,tmp,s);
        return res;  
    }  
      
    private static void dfs(ArrayList<ArrayList<String>> res, ArrayList<String> tmp, String s){  
        if (s.length()==0) res.add(new ArrayList<String>(tmp));  
        for(int i=1;i<=s.length();i++){  
            String substr = s.substring(0,i);  
            if(isPalindrome(substr)){  
                tmp.add(substr);  
                dfs(res,tmp,s.substring(i));  
                tmp.remove(tmp.size()-1);  
            }  
        }      
    }  
      
    public static boolean isPalindrome(String s){  
        int i = 0;  
        int j = s.length()-1;  
        while(i<j){  
            if (s.charAt(i++) != s.charAt(j--)) return false;  
        }  
        return true;  
    }  
	
	

}
