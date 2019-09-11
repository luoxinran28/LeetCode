import java.util.ArrayDeque;
import java.util.Deque;


public class ValidParentheses {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str = "()({)}()";
		System.out.println(isValid(str));
	}
	
	
	public static boolean isValid(String str) {
		Deque<Character> stack = new ArrayDeque<Character>();
		char[] s = str.toCharArray();
        for (int i=0;i<s.length;i++){                    
            if ((s[i]=='(') ||(s[i]=='[') ||(s[i]=='{')) {stack.push(s[i]);}
            else{   
                if (stack.isEmpty()){return false;}
                if ((s[i]==')') && (stack.peek()!='(')) {return false;}
                if ((s[i]=='{') && (stack.peek()!='}')) {return false;}
                if ((s[i]=='[') && (stack.peek()!=']')) {return false;}
                stack.pop();
            }
             
        }
        return stack.isEmpty();
    }

}
