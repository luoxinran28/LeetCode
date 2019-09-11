
public class LengthOfLastWord {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String s = "Hello World, Mia ";
		System.out.println(lengthOfLastWord(s));
	}
	
	public static int lengthOfLastWord(String s) {
        if (s.length() < 1){
            return 0;
        }
        char[] chars = s.toCharArray();
        int len = 0;
        for (int i = chars.length - 1; i >=0; i--){
            if (chars[i] == ' '){
                if(len>0){
                    return len;
                }
            }
            else{
                len++;
            }
        }
        return len;
    }

}
