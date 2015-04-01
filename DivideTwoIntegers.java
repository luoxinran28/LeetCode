
public class DivideTwoIntegers {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int dividend = 1;
		int divisor = -1;
		System.out.println(new DivideTwoIntegers().divide(dividend, divisor));
	}
	
	/**
	 * 
	 * 	1. Keep  multiply 2 (<<1) to the divisor, until it is greater than the dividend. Store the times of shift operation.
		2. if dividend > divisor, then dividend = dividend - divisor/2(>>1). Until dividend< original divisor. Store the   result.
		3. Output the result.
	 * 
	 * **/
	
	public int divide(int dividend, int divisor) {
	    if(divisor==0)
	        return Integer.MAX_VALUE;
	    
	    int res = 0;
	    if(dividend==Integer.MIN_VALUE)
	    {
	        res = 1;
	        dividend += Math.abs(divisor);
	    }
	    if(divisor==Integer.MIN_VALUE)
	        return res;
//	    boolean isNeg = ((dividend^divisor)>>>31==1)?true:false;
	    boolean isNeg = (dividend < 0 && divisor >0) || (dividend >0 && divisor <0);
	    dividend = Math.abs(dividend);
	    divisor = Math.abs(divisor);
	    int digit = 0;
	    while(divisor<=(dividend>>1))
	    {
	        divisor <<= 1;
	        digit++;
	    }
	    while(digit>=0)
	    {
	        if(dividend>=divisor)
	        {
	            dividend -= divisor;
	            res += 1<<digit;
	        }
	        divisor >>= 1;
	        digit--;
	    }
	    return isNeg?-res:res;
	}

}
