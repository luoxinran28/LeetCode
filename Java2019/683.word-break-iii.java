public class Solution {
    /*
     * @param : A string
     * @param : A set of word
     * @return: the number of possible sentences.
     */
    public int wordBreak3(String s, Set<String> dict) {
        // Write your code here
        if (s == null ||s.length() == 0 || dict == null || dict.size() == 0) {
            return 0;
        }
        
        s = s.toLowerCase();
        Set<String> set = new HashSet<String>();
        for (String word : dict) {
            String str = word.toLowerCase();
            set.add(str);
        }
        
        int len = s.length();
        int[] nums = new int[len + 1];
        nums[len] = 1;
        
        for (int i = len - 1; i >= 0; i--) {
            for (int j = i + 1; j <= len; j++) {
                String prefix = s.substring(i, j);
                // System.out.println(prefix);
                if (set.contains(prefix)) {
                    nums[i] += nums[j];
                    // System.out.println(nums[i] +" + "+nums[j]);
                }
            }
        }
        return nums[0];
    }
}