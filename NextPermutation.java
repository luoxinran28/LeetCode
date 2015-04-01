import java.util.Arrays;



public class NextPermutation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] num = {1,3,2};
		nextPermutation(num);
		System.out.println("finish");
	}
	
	public static void nextPermutation(int[] num) {
        // Start typing your C/C++ solution below
        // DO NOT write int main() function
        int length = num.length;
        int k=-1;
        
        //step1
        for (int i=0;i<length-1;i++){
            if (num[i]<num[i+1]){
                k=i;
            }
        }
        if (k==-1){
        	Arrays.sort(num);
//            sort(num.begin(),num.end());
            return ;
        }
        int l = 0;
        //step2
        for (int i=0;i<length;i++){
            if (num[i]>num[k]){
                l=i;
            }
        }
        //step3        
        swap(num,l,k);
        //step4
//        reverse(num.begin()+k+1,num.end());
        swapRange(num, k+1, length-1);
        
    }
	private static void swapRange(int[] num, int start, int end) {
        for (int i = start, j = end; i < j; i++, j--) {
            swap(num, i, j);
        }
    }
	private static void swap(int[] num, int i, int j) {
        if (num[i] == num[j]) return;
        num[i] = num[i]^num[j];
        num[j] = num[i]^num[j];
        num[i] = num[i]^num[j];
    }

}
