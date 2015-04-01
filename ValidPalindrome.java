
public class ValidPalindrome {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s = "A man, a plan, a canal: Panama";
		System.out.println(isPalindrome(s));
	}

	public static boolean isPalindrome(String s) {
//        if (s.length() < 2)
//		    return true;
//
//        s = s.replaceAll("[^a-zA-Z0-9]", "");
//        
//        // System.out.println(s);
//        
//        for(int i = 0; i < s.length() ; i++){
//        
//            if(s.charAt(i) != s.charAt(s.length() - 1 - i)){
//            
//                return false;
//            
//            }
//        }
//        return true;
		
		if(s == null) return true;
        int lth = s.length();
        int head=0;
        int end=lth-1;

        while(head < end ){
            
            while(head < lth && !Character.isLetterOrDigit(s.charAt(head)))
                head++;
            while(end >0 && ! Character.isLetterOrDigit(s.charAt(end)))
                end--;
            
            if(head >= end) break;
            if( Character.toLowerCase(s.charAt(head)) != 
		            Character.toLowerCase(s.charAt(end)) )
		                return false;
            
            head++;
            end--;
        }
        return true;
    }
	
	
}
