import java.util.HashMap;



public class ConstructBinaryTreefromPreorderandInorderTraversal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] inorder = {1,2};
		int[] postorder = {2,1};
		TreeNode root = buildTree(inorder, postorder);
		System.out.println(root);
		System.out.println("finish");
	}
	
//	private static TreeNode DFS(int[] preorder, int[] inorder, 
//  						int InorderStart, int InorderEnd, int PreorderStart) {    
//      if (InorderStart>InorderEnd){return null;}
//      TreeNode Result=new TreeNode(preorder[PreorderStart]);
//      int mid = 0;
//      for (int i=InorderStart;i<=InorderEnd;i++){
//          if (inorder[i]==Result.val){
//          	mid = i;
//          	break;
//          }
//      }
//     
//      Result.left = DFS(preorder,inorder,InorderStart,mid-1, PreorderStart+1);
//      Result.right = DFS(preorder,inorder,mid+1,InorderEnd,PreorderStart+mid-InorderStart);
//      return Result;
//	}
//	
//	
//	public static TreeNode buildTree(int[] preorder, int[] inorder) {
//	    // Start typing your C/C++ solution below
//	    // DO NOT write int main() function
//	    if (preorder.length==0){
//	        return null;
//	    }else{
//	        return DFS(preorder,inorder,0,inorder.length-1,inorder.length-1);
//	    }
//	         
//	}    
	
	
	
	
	
	
	
	
	
	
	
	
    public static TreeNode buildTree(int[] preorder, int[] inorder) {
    	
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();  
          
        for(int i=0; i<inorder.length; i++) {  
            map.put(inorder[i], i);  
        }  
          
        return buildRec(map, preorder, 0, preorder.length-1, inorder, 0, inorder.length-1);  
    }  
          
    private static TreeNode buildRec(	HashMap<Integer, Integer> map, 
							    		int[] preorder, 
							    		int PreorderStart, 
							    		int PreorderEnd, 
							    		int[] inorder, 
							    		int InorderStart, 
							    		int InorderEnd) {
    	
        if(PreorderStart>PreorderEnd)
        	return null;
        
        TreeNode root = new TreeNode( preorder[PreorderStart] );  
        if(PreorderStart==PreorderEnd) 
        	return root;  
          
        int mid = map.get(preorder[PreorderStart]); //divide point. left InorderStart left subtree.  
          
        int  leftLength = mid - InorderStart;  
          
        root.left = buildRec(map, preorder, PreorderStart+1, PreorderStart+leftLength, inorder, InorderStart, mid-1);  
        root.right = buildRec(map, preorder, PreorderStart+mid-InorderStart+1, PreorderEnd, inorder, mid+1, InorderEnd);  
          
        return root;  
    }
	

}
