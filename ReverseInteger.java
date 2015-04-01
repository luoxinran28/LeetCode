
public class ReverseInteger {

	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int x = 123;
		System.out.println(reverse(x));
	}

	private static int reverse(int x) {
		// TODO Auto-generated method stub
        boolean pos = true;
        if (x<0){
        	x = -x; 
        	pos = false;
        }
        int res = 0;
        while (x>0){
            res = res*10+ x%10;
            x= x/10;
        }
        if(pos==true) return res;
        else return -res;
	}

}
