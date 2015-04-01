import java.util.HashMap;
import java.util.Map;


public class LongestConsecutiveSequence {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] num = {100, 4, 200, 1, 3, 2};
		System.out.println(longestConsecutive(num));
	}
	
    public static int longestConsecutive(int[] num) {
        Map<Integer, Integer> sequence = new HashMap<Integer, Integer>();
        int longest = 0;
        for (int i = 0; i < num.length; i++) {
            if (sequence.containsKey(num[i])) continue;
            int lowerbound = num[i];
            int upperbound = num[i];
            if (sequence.containsKey(num[i] - 1)) // Get the lowerbound
                lowerbound = sequence.get(num[i] - 1);
            if (sequence.containsKey(num[i] + 1))// Get the Upperbound
                upperbound = sequence.get(num[i] + 1);
            longest = Math.max(longest, (upperbound - lowerbound)+ 1);
            sequence.put(num[i],num[i]);
            sequence.put(lowerbound, upperbound);
            sequence.put(upperbound, lowerbound);
        }
        return longest;
    }

}
