
public class EditDistance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String word1 = "abcd123";
		String word2 = "123";
		System.out.println(minDistance(word1,word2));
		System.out.println(numDistincts(word1,word2));
	}

	/**
	 * 
	 * table[i+1][j+1] = 
	 * 		min[	table[i][j]+1 
	 * 					or 0 (+1 if word1[i+1]==word2[j+1], else +0),   
	 * 				table[i][j+1]+1, 
	 * 				table[i+1][j]+1 
	 * 		   ]
	 * **/
	public static int minDistance(String word1, String word2) {
//		int s1Length = word1.length();
//        int s2Length = word2.length();
//        
//        if (s1Length==0){return s2Length;}
//        if (s2Length==0){return s1Length;}
//        
//        int[][] words = new int[s1Length+1][s2Length+1];
//        for (int i=0;i<=s1Length;i++){words[i][0]=i;}
//        for (int i=0;i<=s2Length;i++){words[0][i]=i;}
//         
//        for (int i=1;i<=s1Length;i++){
//            for (int j=1;j<=s2Length;j++){
				// delete or insert
//            	words[i][j] = Math.min(words[i-1][j]+1, words[i][j-1]+1);
				
//            	if(word1.charAt(i-1)==word2.charAt(j-1)){
//            		words[i][j] = Math.min(words[i-1][j-1], words[i][j]);
//            	}
				// replace
//            	else{
//            		words[i][j] = Math.min(words[i-1][j-1]+1, words[i][j]);
//            	}
//
//            }
//        }
//        return words[s1Length][s2Length];
		
		
		/**
		 * There is a relation between dp[i][j] and dp[i-1][j-1]. Let's say we transform 
		 * from one string to another. The first string has length i and it's last character 
		 * is "x"; the second string has length j and its last character is "y". 
		 * 
		 * 	if x == y, then dp[i][j] == dp[i-1][j-1]
			if x != y, and we insert y for word1, then dp[i][j] = dp[i][j-1] + 1
			if x != y, and we delete x for word1, then dp[i][j] = dp[i-1][j] + 1
			if x != y, and we replace x with y for word1, then dp[i][j] = dp[i-1][j-1] + 1
			When x!=y, dp[i][j] is the min of the three situations.
		 * 
		 * **/
		
		int len1 = word1.length();
		int len2 = word2.length();
	 
		// len1+1, len2+1, because finally return dp[len1][len2]
		int[][] dp = new int[len1 + 1][len2 + 1];
	 
		for (int i = 0; i <= len1; i++) {
			dp[i][0] = i;
		}
	 
		for (int j = 0; j <= len2; j++) {
			dp[0][j] = j;
		}
	 
		//iterate though, and check last char
		for (int i = 0; i < len1; i++) {
			char c1 = word1.charAt(i);
			for (int j = 0; j < len2; j++) {
				char c2 = word2.charAt(j);
	 
				//if last two chars equal
				if (c1 == c2) {
					//update dp value for +1 length
					dp[i + 1][j + 1] = dp[i][j];
				} else {
					int replace = dp[i][j] + 1;
					int insert = dp[i][j + 1] + 1;
					int delete = dp[i + 1][j] + 1;
	 
					int min = replace > insert ? insert : replace;
					min = delete > min ? min : delete;
					dp[i + 1][j + 1] = min;
				}
			}
		}
	 
		return dp[len1][len2];
    }
	
	/**
	 * 
	 *  Let W(i, j) stand for the number of subsequences of S(0, i) in T(0, j). 
	 *  If S.charAt(i) == T.charAt(j), W(i, j) = W(i-1, j-1) + W(i-1,j); 
	 *  Otherwise, W(i, j) = W(i-1,j).
	 * 
	 * 
	 * 遇到这种两个串的问题，很容易想到DP。但是这道题的递推关系不明显。可以先尝试做一个二维的表int[][] dp，用来记录匹配子序列的个数（以S ="rabbbit",T = "rabbit"为例）：
		    r a b b b i t
		  1 1 1 1 1 1 1 1
		r 0 1 1 1 1 1 1 1
		a 0 0 1 1 1 1 1 1
		b 0 0 0 1 2 3 3 3
		b 0 0 0 0 1 3 3 3
		i 0 0 0 0 0 0 3 3
		t 0 0 0 0 0 0 0 3  
		从这个表可以看出，无论T的字符与S的字符是否匹配，dp[i][j] = dp[i][j - 1].就是说，
		假设S已经匹配了j - 1个字符，得到匹配个数为dp[i][j - 1].现在无论S[j]是不是和T[i]匹配，
		匹配的个数至少是dp[i][j - 1]。除此之外，当S[j]和T[i]相等时，我们可以让S[j]和T[i]匹配，
		然后让S[j - 1]和T[i - 1]去匹配。所以递推关系为：
		dp[0][0] = 1; // T和S都是空串.
		dp[0][1 ... S.length() - 1] = 1; // T是空串，S只有一种子序列匹配。
		dp[1 ... T.length() - 1][0] = 0; // S是空串，T不是空串，S没有子序列匹配。
		dp[i][j] = dp[i][j - 1] + (T[i - 1] == S[j - 1] ? dp[i - 1][j - 1] : 0).1 <= i <= T.length(), 1 <= j <= S.length()
	 * 
	 * 
	 * **/
	public static int numDistincts(String S, String T) {
		int[][] table = new int[S.length() + 1][T.length() + 1];
	 
		for (int i = 0; i < S.length(); i++)
			table[i][0] = 1;
	 
		for (int i = 1; i <= S.length(); i++) {
			for (int j = 1; j <= T.length(); j++) {
				if (S.charAt(i - 1) == T.charAt(j - 1)) {
					
					table[i][j] += table[i - 1][j] + table[i - 1][j - 1];
				} else {
					table[i][j] += table[i - 1][j];
				}
			}
		}
	 
		return table[S.length()][T.length()];
	}
	
	
}
