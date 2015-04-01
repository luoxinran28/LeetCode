
public class ConvertSortedArraytoBinarySearchTree {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] num={1,2,3,4,5,6,7};
		sortedArrayToBST(num);
	}

	
	public static TreeNode sortedArrayToBST(int[] num) {
        if(num.length==0){return null;}
        return cbst(num,0,num.length-1);
    }
	
    
    private static TreeNode cbst(int[] num, int start, int end){
        if (start>end){
            return null;
        }else{
            int mid = start+(end-start)/2;
            TreeNode bst=new TreeNode(num[mid]);
            bst.left = cbst(num,start,mid-1);
            bst.right = cbst(num,mid+1,end);
            return bst;
        }

    }
}
