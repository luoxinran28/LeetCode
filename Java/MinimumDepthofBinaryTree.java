
public class MinimumDepthofBinaryTree {

	public static void main(String[] args) {

		TreeNode root = new TreeNode(0);
		root.left = new TreeNode(1);
		root.right = null;
		System.out.println(minDepth(root));
	}
	
    public static int minDepth(TreeNode root) {
        if(root == null) return 0;
        return DFS(root, 0, 1000);
    }
    
    private static int DFS(TreeNode root, int curLevel, int minLevel){
        
        if(curLevel>minLevel){
            return minLevel;
        }
        
        if(root.left == null && root.right == null){
            curLevel++;
            if(curLevel>minLevel){
                return minLevel;
            }
            else minLevel = curLevel;
        }
        if(root.left != null){
        	minLevel = DFS(root.left, curLevel+1, minLevel);
            
        }
        if(root.right != null){
        	minLevel = DFS(root.right, curLevel+1, minLevel);
        }
        return minLevel;
        

    }

}
