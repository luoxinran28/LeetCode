
public class FlattenBinaryTreetoLinkedList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		TreeNode root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.left.left = new TreeNode(3);
		root.left.right = new TreeNode(4);
		root.right = new TreeNode(5);
		root.right.right = new TreeNode(6);
		
		flatten(root);
	}
	
	
	/**
		(1) store the right child (we call R)
		(2) find the right-most node of left child
		(3) set R as the right-most node's right child.
		(4) set left child as the right child
		(5) set the left child NULL
		(6) set current node to current node's right child.
		(7) iterate these steps until all node are flattened.
	**/
//	// method 1
//	public static void flatten(TreeNode root) {
//        while (root != null){
//            if (root.left != null){
//                TreeNode pre=root.left;
//                while (pre.right != null){pre = pre.right;}
//                pre.right = root.right;
//                root.right = root.left;
//                root.left = null;
//            }
//            root=root.right;
//        }
//    }
	
	// method 2
	private static TreeNode DFS(TreeNode now)
    {
        if(now.left == null && now.right == null) return now;
        TreeNode leftok = null, rightok = null;
        if(now.left != null) leftok = DFS(now.left);
        if(now.right != null) rightok = DFS(now.right);
        if(leftok != null)
        {
            leftok.right = now.right;
            now.right = now.left;
            now.left = null;
            return rightok != null? rightok : leftok;
        }
        else return rightok;
    }
	
	public static void flatten(TreeNode root) {
        if(root == null) return;
        DFS(root);
    }

}
