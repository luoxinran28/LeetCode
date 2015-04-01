
public class SortList {

	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ListNode head = new ListNode(12);
		System.out.print(head.val+" ");
		
		ListNode pre = new ListNode(11);
		head.next = pre;
		System.out.print(pre.val+" ");
		for(int i=10;i>0;i--){
			
			ListNode node = new ListNode(i);
			pre.next = node;
			pre = pre.next;
			System.out.print(pre.val+" ");
		}
		System.out.println();
		
		SortList SL = new SortList();
		
		ListNode scan = SL.sortList(head);
		while(scan!=null){
			
			System.out.print(scan.val+" ");
			scan = scan.next;
		}
		
		
	}
    //Merge sort for a List
    //time complexity: O(nlog(n))
    private ListNode getMiddleOfList(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while(fast.next!=null&&fast.next.next!=null) {
        	slow = slow.next;
        	fast = fast.next.next;
        }
        return slow;
    }
    
    public ListNode sortList(ListNode head) {
        if(head==null||head.next==null) {
            return head;
        }
    	ListNode middle = getMiddleOfList(head);
    	ListNode next   = middle.next;
    	middle.next = null;
    	return mergeList(sortList(head), sortList(next));
    }
    
    private ListNode mergeList(ListNode a, ListNode b) {
    	ListNode dummyHead = new ListNode(-1);
    	ListNode curr = dummyHead;
    	while(a!=null&&b!=null) {
    		if(a.val<=b.val) {
    			curr.next=a;a=a.next;
    		} else {
    			curr.next=b;b=b.next;
    		}
    		curr  = curr.next;
    	}
    	curr.next = (a!=null)?a:b;
    	return dummyHead.next;
    }
}
