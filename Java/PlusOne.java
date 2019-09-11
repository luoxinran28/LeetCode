/**
 * 
 * Plus One
	Given a number represented as an array of digits, plus one to the number.
	Analysis:
	This problem is pretty easy.
	Just consider two special cases:
	(1) last digit is 9: need a carry
	(2) All the digits are 9 just return 100000... number of 0s is the length of the vector.
 * 
 * **/


public class PlusOne {

	public static int[] plusOne(int[] digits) {
        // Start typing your Java solution below
        // DO NOT write main() function
        int len = digits.length;
        int carry = 1;
        for (int i = len - 1; i >=0; i--){
            int digit = digits[i] + carry;
            digits[i] = digit % 10;
            carry = digit / 10;
            if (carry == 0) return digits;
        }
        int[] result = new int[len + 1];
        result[0] = 1;
        for (int i = 0; i < len; i++){
            result[i + 1] = digits[i];
        }
        return result;
    }
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] digits = {9,8};
		System.out.println(plusOne(digits));
	}
}
