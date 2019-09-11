
public class ConstructBinaryTreefromInorderandPostorderTraversal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] inorder = {1,2};
		int[] postorder = {2,1};
		TreeNode root = buildTree(inorder, postorder);
		System.out.println(root);
		System.out.println("finish");
	}
	
	
	private static TreeNode DFS(int[] inorder, int[] postorder, 
  						int InorderStart, int InorderEnd, int PostorderEnd) {    
      if (InorderStart>InorderEnd){return null;}
      TreeNode Result=new TreeNode(postorder[PostorderEnd]);
      int mid = 0;
      for (int i=InorderStart;i<=InorderEnd;i++){
          if (inorder[i]==Result.val){
          	mid = i;
          	break;
          }
      }
      
      Result.left = DFS(inorder,postorder,InorderStart,mid-1, PostorderEnd-InorderEnd+mid);
      Result.right = DFS(inorder,postorder,mid+1,InorderEnd,PostorderEnd-1);
      return Result;
	}
	
	
	public static TreeNode buildTree(int[] inorder, int[] postorder) {
	    // Start typing your C/C++ solution below
	    // DO NOT write int main() function
	    if (postorder.length==0){
	        return null;
	    }else{
	        return DFS(inorder,postorder,0,inorder.length-1,postorder.length-1);
	    }
	         
	}    

}
