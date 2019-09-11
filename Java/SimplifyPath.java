import java.util.ArrayList;
import java.util.Stack;


public class SimplifyPath {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String path = "/a/./b/../../c/";
		System.out.println(new SimplifyPath().simplifyPath(path));
	}
	
	
	public String simplifyPath(String path) {
		
		String result = "/";
        String[] stubs = path.split("/+");
        ArrayList<String> paths = new ArrayList<String>();
        for (String s : stubs){
            if(s.equals("..")){
                if(paths.size() > 0){
                    paths.remove(paths.size() - 1);
                }
            }
            else if (!s.equals(".") && !s.equals("")){
                paths.add(s);
            }
        }
        for (String s : paths){
            result += s + "/";
        }
        if (result.length() > 1) 
            result = result.substring(0, result.length() - 1);
        return result;
    }

}
