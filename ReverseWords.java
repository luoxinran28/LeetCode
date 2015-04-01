/*
	 * Reverse Words in a String
	 *
	 *
	Given an input string, reverse the string word by word.

	For example,
	Given s = "the sky is blue",
	return "blue is sky the".

	click to show clarification.

	Clarification:
	What constitutes a word?
	A sequence of non-space characters constitutes a word.
	Could the input string contain leading or trailing spaces?
	Yes. However, your reversed string should not contain leading or trailing spaces.
	How about multiple spaces between two words?
	Reduce them to a single space in the reversed string.
*/




public class ReverseWords {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Reverse Words in a String
		String s = "je  sd!";
		System.out.println(reverseWords(s));

	}

	
	public static String reverseWords(String s) {
		if(s.isEmpty()) return s;
        int curt = 0;
        int countWords = 0;
        String rtString = "";
        String newWord = "";
        while(curt!=s.length()){

            if(s.charAt(curt)==' '){
            	if(!newWord.isEmpty()){
	            	if(rtString.isEmpty()) rtString = newWord;
	            	else
	            		rtString = newWord + " " + rtString;
	                newWord="";
	                countWords++;
            	}

            }
            else{
                newWord +=s.charAt(curt);
            }
            curt++;
        }
        if(!newWord.isEmpty()) countWords++;
        if(countWords==1 && !newWord.isEmpty()) 
        	rtString = newWord;
        else if(!newWord.isEmpty())
        	rtString = newWord + " " + rtString;
        return rtString;
    }

}
