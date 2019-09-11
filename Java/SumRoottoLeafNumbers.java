
public class SumRoottoLeafNumbers {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		TreeNode root = new TreeNode(0);
		root.left = new TreeNode(1);
		root.right = null;
		System.out.println(sumNumbers(root));
	}

	
	private static int res = 0;
    public static int sumNumbers(TreeNode root) {
        if(root == null) return 0;
        DFS(root, 0 );
        return res;
    }
    
    private static void DFS(TreeNode root, int cur){
        cur=cur*10+root.val;
        if(root.left == null && root.right == null){
            res+=cur;
            return ;
        }
        else{
            // cur=cur*10+root.val;
            if(root.left != null){
                DFS(root.left, cur);
                
            }
            if(root.right != null){
                DFS(root.right, cur);
            }
        }

    }
}
