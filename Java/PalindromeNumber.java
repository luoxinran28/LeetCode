
public class PalindromeNumber {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int x = 123;
		System.out.println(isPalindrome(x));
	}

//	private static boolean check(int x, int y){
//        if (x==0) {return true;}
//        if (check(x/10,y)){
//            if (x%10==y%10){
////                y=y/10;
//                return true;
//            }
//        }
//        return false;
//    }
//    public static boolean isPalindrome(int x) {
//        // Start typing your C/C++ solution below
//        // DO NOT write int main() function
//        if (x<0){return false;}
//        return check(x,x);
//    }
	
	public static boolean isPalindrome(int x) {
        // Start typing your Java solution below
        // DO NOT write main() function
        if (x < 0) return false;
        return x == reverseInt(x);
    }
    public static int reverseInt(int i){
        int reversedNum = 0;
        while (i != 0){    
            int last_digit = i % 10;
            reversedNum = reversedNum * 10 + last_digit;
            i = i / 10; 
        }
        return reversedNum;
    }
	
	
}
