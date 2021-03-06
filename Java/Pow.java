
public class Pow {

	/**
	 * 
	 * Consider the binary representation of n. For example, if it 
	 * is "10001011", then x^n = x^(1+2+8+128) = x^1 * x^2 * x^8 * x^128. 
	 * Thus, we don't want to loop n times to calculate x^n. 
	 * To speed up, we loop through each bit, if the i-th bit is 1, 
	 * then we add x^(1 << i) to the result. Since (1 << i) is a power of 2, 
	 * x^(1<<(i+1)) = square(x^(1<<i)). The loop executes for a maximum 
	 * of log(n) times.
	 * 
	 * 
	 * **/
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println(pow(3,4));
	}
	
	
	public static double pow(double x, int n) {
        if(n<0)  
        {  
            if(n==Integer.MIN_VALUE)  
                return 1.0 / (pow(x,Integer.MAX_VALUE)*x);  
            else  
                return 1.0 / pow(x,-n);
        }  
        if(n==0)  
            return 1.0;
        double ans = 1.0;  
        while(n>0){  
            if((n&1)>0) {
            	ans *= x;
            }
            	
            x *= x;
            n>>=1;
        }  
        return ans;  
    }  
}
