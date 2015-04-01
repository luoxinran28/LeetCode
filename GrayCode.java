import java.util.ArrayList;


public class GrayCode {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int num = 3;

		System.out.println(grayCode(num));
		
	}
	
	public static ArrayList<Integer> grayCode(int n) {
		

		ArrayList<Integer> grayCode = new ArrayList<Integer>();
		if(n==0) {
			grayCode.add(0);
			return grayCode;
		}
		String[] rtStringCodes =  GrayCode(n);
	
		for(int i=0;i<rtStringCodes.length;i++){
			grayCode.add(Integer.valueOf(rtStringCodes[i],2));
		}
		
		return grayCode;
    }

	private static String[] GrayCode(int n) {

		// produce 2^n grade codes
	    String[] graycode = new String[(int) Math.pow(2, n)];

	    if (n == 1) {
	    	graycode[0] = "0";
	    	graycode[1] = "1";
	        return graycode;
	    }

	    String[] last = GrayCode(n - 1);

	    for (int i = 0; i < last.length; i++) {
	    	graycode[i] = "0" + last[i];
	    	graycode[graycode.length - 1 - i] = "1" + last[i];
	    }

	    return graycode;
	}

}
