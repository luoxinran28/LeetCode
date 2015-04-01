import java.util.HashMap;

/**
 * 
 * 利用HashMap，把target-numbers[i]的值放入hashmap中，value存index。
 * 遍历数组时，检查hashmap中是否已经存能和自己加一起等于target的值存在，
 * 存在的话把index取出，连同自己的index也出去，加1（index要求从1开始）
 * 后存入结果数组中返回。如果不存在的话，把自己的值和index存入hashmap
 * 中继续遍历。由于只是一遍遍历数组，时间复杂度为O(n)。
 * 
 * **/
public class TwoSum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] numbers = {2,7,11,15,16};
		int target = 22;
		TwoSum TS = new TwoSum();
		int[] res = TS.twoSum(numbers, target);
		System.out.println(res[0]+res[1]);
	}
	
	public int[] twoSum(int[] numbers, int target) {
        int [] res = new int[2];
        if(numbers==null||numbers.length<2)
            return res;
        HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
        for(int i = 0; i < numbers.length; i++){
            if(!map.containsKey(target-numbers[i])){
                map.put(numbers[i],i);
            }else{
                res[0]= map.get(target-numbers[i])+1;
                res[1]= i+1;
                break;
            }
        }
        return res;
    }

}
