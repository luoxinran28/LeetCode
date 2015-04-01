
public class LinkedListCycle {

	private final static int TotalNumber = 10;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ListNode L1 = new ListNode(0);
		ListNode L1_ptr = L1;
		for(int i=2;i<=TotalNumber;i+=2){
			ListNode node = new ListNode(i);
			L1_ptr.next=node;
			L1_ptr = node;
		}
		L1_ptr.next = L1;
		System.out.println(hasCycle(L1));
		
	}

    public static boolean hasCycle(ListNode head) {
        
//        ListNode slow = head;
//        ListNode fast = head;
//        while(fast != null && fast.next != null)
//        {
//            slow = slow.next;
//            fast = fast.next.next;
//            if(slow == fast)
//                return true;
//        }
//        return false;
    	
    	
    	
    	if(head==null) return false;
    	ListNode p = head;
    	ListNode q = head;
    	
    	while(q!=null && q.next!=null){
    		p = p.next;
    		q = q.next.next ;
    		if (p.equals(q)) return true;
    	}
    	
    	return false;
    }
	
	
}
