
public class RegularExpressionMatching {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(isMatch("aa","a"));
		System.out.println(isMatch("aa","aa"));
		System.out.println(isMatch("aaa","aa"));
		System.out.println(isMatch("aaaaaaa","a*"));
		System.out.println(isMatch("aa",".*"));
		System.out.println(isMatch("ab",".*"));
		System.out.println(isMatch("aab","c*a*b"));
		
		System.out.println("----------------");
		System.out.println(matches("aa","a"));
		System.out.println(matches("aa","aa"));
		System.out.println(matches("aaa","aa"));
		System.out.println(matches("aaaaaaa","a*"));
		System.out.println(matches("aa",".*"));
		System.out.println(matches("ab",".*"));
		System.out.println(matches("aab","c*a*b"));
	}
	
	
	public static boolean matches(String text, String pattern) {
		// if pattern is empty - whole string should be empty to match
		if (pattern.length() == 0) return text.length() == 0;

		// retrieve 2nd character of the pattern
		String nextChar = (pattern.length() > 1) ? String.valueOf(pattern.charAt(1)) : "";
		char t = (text.length() > 0) ? text.charAt(0) : 0;
		char p = pattern.charAt(0);

		// if 2nd char is not '*' - it means that we are checking if next char in text matches with next char in pattern
		// and recursively run the code starting from +1 char in both pattern/text
		if (!nextChar.equals("*")) {
			return ((t == p) || (p == '.' && t != 0)) &&
					matches(text.substring(1), pattern.substring(1));
		} else {
			// We need some kind of backtracking mechanism such that when a matching fails, 
			// we return to the last successful matching state and attempt to match 
			// more characters in s with ‘*’.
			//
			// If the next character of p is ‘*’, then we do a brute force 
			// exhaustive matching of 0, 1, or more repeats of current 
			// character of p… Until we could not match any more characters.
			while ((t == p) || (p == '.' && t != 0)) {
				// check if current text matches tail part of the pattern (+2 symbols)
				if (matches(text, pattern.substring(2))) return true;
				// cut first symbol in original text and repeat the check in the loop
				text = text.substring(1);
				t = (text.length() > 0) ? text.charAt(0) : 0;
			}
			return matches(text, pattern.substring(2));
		}
	}
	
	
	
	public static boolean isMatch(String s, String p) {
        //Java note: s.substring(n) will be "" if n == s.length(), but if n > s.length(), index oob error
 
        //you don't have to construct a state machine for this problem
        if (s.length() == 0) {
            return checkEmpty(p);
        }
 
        if (p.length() == 0) {
            return false;
        }
 
        char c1 = s.charAt(0);
        char d1 = p.charAt(0), d2 = '0'; //any init value except '*'for d2 will do
 
        if (p.length()>1){
            d2 = p.charAt(1);
        }
 
        if (d2 == '*') {
            if (compare(c1, d1)) {
                //fork here: 1. consume the character, and use the same pattern again.
                //2. keep the character, and skip 'd1*' pattern
                 
                //Here is also an opportunity to use DP, but the idea is the same
                return isMatch(s.substring(1), p) || isMatch(s, p.substring(2)); 
            }
            else {
                return isMatch(s, p.substring(2)); 
            }
        }
        else {
            if (compare(c1, d1)) {
                return isMatch(s.substring(1), p.substring(1));
            }
            else {
                return false;
            }
        }
    }
    
    private static boolean compare(char c1, char d1){
        return d1 == '.' || c1 == d1;
    }
 
    private static boolean checkEmpty(String p) {
        if (p.length()%2 != 0) {
            return false;   
        }
 
        for (int i = 1; i < p.length(); i+=2) {
            if (p.charAt(i) != '*') {
                return false;
            }
        }
        return true;
    }

}
