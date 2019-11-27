class Codec {

  // Encodes an n-ary tree to a binary tree.
  public TreeNode encode(Node root) {
      if(root == null) return null;
      TreeNode new_root = new TreeNode(root.val);
      if(root.children != null && root.children.size() > 0) {
          new_root.left = encode(root.children.get(0));
      }
      TreeNode left = new_root.left;
      for(int i = 1; i < root.children.size(); i++) {
          left.right = encode(root.children.get(i));
          left = left.right;
      }
      return new_root;
  }

  // Decodes your binary tree to an n-ary tree.
  public Node decode(TreeNode root) {
      if(root == null) return null;
      Node new_root = new Node(root.val, new LinkedList<>());
      TreeNode left = root.left;
      while(left != null) {
          Node right = decode(left);
          new_root.children.add(right);   
          left = left.right;
      }
      return new_root;
      
  }
}