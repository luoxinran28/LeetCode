class Solution {
    public int shortestWordDistance(String[] words, String word1, String word2) {
        if(words == null || word1 == null || word2 == null || words.length == 0) {
            return 0;
        }
        long pos_word1 = Integer.MAX_VALUE;
        long pos_word2 = Integer.MIN_VALUE;
        long diff = pos_word1 - pos_word2;
        for(int i = 0; i < words.length; i++) {
            if(words[i].equals(word1)) {
                pos_word1 = i;
                
            }
            if(words[i].equals(word2)) {
                if(word1.equals(word2)) {
                    pos_word1 = pos_word2;
                }
                pos_word2 = i;
            }
            diff = Math.min(Math.abs(pos_word2 - pos_word1), diff);
        }
        return (int) diff;
    }
}