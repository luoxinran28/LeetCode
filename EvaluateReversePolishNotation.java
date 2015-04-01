import java.util.ArrayDeque;
import java.util.Deque;

/*	Evaluate Reverse Polish Notation
 * 
 * 
    Evaluate the value of an arithmetic expression in Reverse Polish Notation.

	Valid operators are +, -, *, /. Each operand may be an integer or another expression.
	
	Some examples:
	  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
	  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
	 

*/


public class EvaluateReversePolishNotation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String[] tokens={"4","-3","-"};
		System.out.println(evalRPN(tokens));
	}
	
    public static int evalRPN(String[] tokens) {
    	
    	Deque<String> stack = new ArrayDeque<String>();
    	
    	for(String token:tokens){
    		if(isDigit(token)){
    			stack.push(token);
    			continue;
    		}
    		else{
    			Integer a = Integer.valueOf(stack.pop());
    			Integer b = Integer.valueOf(stack.pop());
    			switch(token){
    				case "+": {
    					stack.push(String.valueOf(b+a));
    					break;
    				}
    					
    				case "-": {
    					stack.push(String.valueOf(b-a));
    					break;
    				}
    				case "*": {
    					stack.push(String.valueOf(b*a));
    					break;
    				}
    				case "/": {
    					stack.push(String.valueOf(b/a));
    					break;
    				}
    				default: break;
    			}
    		}
    	}
		return Integer.valueOf(stack.peek());
        
    }
    
	private static boolean isDigit(String token) {
		// TODO Auto-generated method stub
		boolean negative=false;
		for(int i=0;i<token.length();i++){
			
			if(token.charAt(i)=='-'){
				if(token.length()==1){
					return false;
				}
			}
			else if(token.charAt(i)<='9' && 
				token.charAt(i)>='0'){
				
				return true;
			}

		}
		return false;
	}

}
