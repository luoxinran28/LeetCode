
public class StringtoIntegerAtoi {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str = "2147483648";

		System.out.println(atoi(str));

	}

	
	public static long atoi(String str){  
	      
	    boolean negative = false;  
	    long value = 0;  
	      
	    if (str == null || str.equals("")) {  
	        return 0;
	    }   
	    int blank = 0;
	    for (; str.charAt(blank)==' '; blank++);
	    str = str.substring(blank, str.length());
	    if(str.charAt(0)=='-'){
	    	negative = true; 
	    	str = str.substring(1, str.length());
	    }
	    else if(str.charAt(0)=='+') str = str.substring(1, str.length());
	    for (int i = 0; i < str.length(); i++) {  
	        
	        if (str.charAt(i) >= '0' && '9' >= str.charAt(i)){
	        	
                value = value * 10 + (str.charAt(i) - '0');
                if ((negative?value*-1:value) >= Integer.MAX_VALUE) {  
                    return Integer.MAX_VALUE; 
                }  
                else if ((negative?value*-1:value) <= Integer.MIN_VALUE) {  
                    return Integer.MIN_VALUE; 
                } 
	        }  
	        else break;
	    }  
	    return negative ? (int)value * -1 : (int)value;               
	}  
}
