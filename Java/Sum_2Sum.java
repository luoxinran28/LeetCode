import java.util.ArrayList;


public class Sum_2Sum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] data = {1,2,3,4,5,6};
		System.out.println(FindTwoNumbersWithSum(data, 8));
	}
	
		
	///////////////////////////////////////////////////////////////////////
	//Find two numbers with a sum in a sorted array
	//Output: ture is found such two numbers, otherwise false
	// http://blog.csdn.net/li4951/article/details/8693212
	///////////////////////////////////////////////////////////////////////
	public static ArrayList<ArrayList<Integer>> FindTwoNumbersWithSum
								(
									int data[],           // a sorted array   
									int sum              // the sum
								)
	
	{
		ArrayList<ArrayList<Integer>> rtNumbers = new ArrayList<ArrayList<Integer>>();
		int length = data.length;
		if(length < 1)
			return rtNumbers;
		
		int ahead = length - 1;
		int behind = 0;
		
		while(ahead > behind){
			int curSum = data[ahead] + data[behind];
			
			// if the sum of two numbers is equal to the input
			// we have found them
			if(curSum == sum){
				ArrayList<Integer> tmpNumbers = new ArrayList<Integer>();
				tmpNumbers.add(data[behind]);
				tmpNumbers.add(data[ahead]);
				rtNumbers.add(tmpNumbers);
//				break;
				ahead--;
				behind++;
				
			}
			// if the sum of two numbers is greater than the input
			// decrease the greater number
			else if(curSum > sum){
				ahead --;
			}
			// if the sum of two numbers is less than the input
			// increase the less number
			else
			behind ++;
		}
		
		return rtNumbers;
	}
	
	
}
