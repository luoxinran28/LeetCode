
public class AddBinary {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String a = "1";
		String b = "111";
		System.out.println(addBinary(a, b));
	}

    public static String addBinary(String a, String b) {
        
    	int diff = a.length()-b.length();
    	if(diff<0){
    		diff *= -1;
    		for(int i=0;i<diff;i++){
    			a = "0"+a;
    		}
    	}
    	else if(diff>0){
    		for(int i=0;i<diff;i++){
    			b = "0"+b;
    		}
    	}
    	
    	int carry = 0;
    	int length = a.length();
    	String rtValue = "";
    	
    	char[] charA = a.toCharArray();
    	char[] charB = b.toCharArray();
    	for(int i=length-1;i>=0;i--){
    		int digit = (charA[i]-'0') + (charB[i]-'0')+carry;
    		carry = digit>>1;
    		rtValue = String.valueOf((digit&1)) + rtValue;
    		
    	}
    	if(carry!=0) rtValue = "1" +rtValue;
    	
    	return rtValue;
    }
	
}
