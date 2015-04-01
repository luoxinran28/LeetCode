
public class GasStation {

	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] gas = {1,2,3,4,5};
		int[] cost = {2,3,4,3,3};
		System.out.println(canCompleteCircuit(gas, cost));
	}
	
	
	/**
	 * 
	 * 解题思路：
		1：假设出发车站为0，初始化车内油量0
		2：车内油量＝车站油量－消耗		
		3：如果车内油量大于0，车开到下一车站，否则出发车站前移一个车站		
		重复2，3步，直到所有车站遍历完。
		如果车内油量剩余大于等于0，返回出发车站，否则返回－1.
	 * 
	 * **/
	public static int canCompleteCircuit(int[] gas, int[] cost) {
        int i, ans, sum, all;
        for(i = ans = sum = all = 0; i < gas.length; i ++){
            sum += gas[i] - cost[i];
            all += gas[i] - cost[i];
            if(sum < 0)
            {
                sum = 0;
                ans = i + 1;
            }
        }
        return all >= 0 ? ans : -1;
    }

}
