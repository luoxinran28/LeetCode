
public class ZigZagConversion {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s = "PAYPALISHIRING";
		System.out.println("  input:"+s);
		System.out.println("output:"+convert(s,3));

	}
	
	
	/**
	 * 
	 * 这个是个纯粹找规律的题，其他没啥特殊的。下面的例子nRows=4；
		找规律按照数组小标开始，寻找下标出现的规律，
		1. 第一列和最后一列相邻元素下标之差为 2*nRows-2;
		2. 	除过第一行和最后一行，其余行要多一个元素，该元素出现
			的下标和行号有关，比如5 = 1 + 6 - 2，可以总结出
			规律为 j + 2*nRows-2 - 2*i;
			关于 i 和 j 看以看下面的代码。

	 * **/
	public static String convert(String s, int nRows) {
		
		if(nRows <= 1) return s;
        int base = 2*nRows-2;
        String ret = "";
        int n = s.length();
        for(int i=0; i<nRows; ++i){
            for(int j=i; ; j += base){
                if(j>=n) break;
                ret+=s.charAt(j);
                if(i==0 || i==nRows-1) continue;
                int temp = j + base - 2*i;
                if(temp <s.length()){
                	ret+=s.charAt(temp);
                }
            }
        }
        return ret;
    }
	
}
