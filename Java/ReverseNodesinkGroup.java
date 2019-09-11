
public class ReverseNodesinkGroup {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ListNode head = new ListNode(4);
		head.next = new ListNode(7);
		head.next.next = new ListNode(6);
		head.next.next.next = new ListNode(6);
		head.next.next.next.next = new ListNode(2);
		head.next.next.next.next.next = new ListNode(1);
		head.next.next.next.next.next.next = new ListNode(5);
		
		ReverseNodesinkGroup RNG = new ReverseNodesinkGroup();
		ListNode result = RNG.reverseKGroup(head, 3);
		System.out.println("finish: "+result);
	}
	
	
	// Just moving pre and cur pointers using a pilot pointer.
	public ListNode reverseKGroup(ListNode head, int k) {
	    if (head == null) return null;
	    ListNode dummy = new ListNode(0);
	    dummy.next = head;
	    ListNode pre = dummy;
	    ListNode cur = head;
	    while(cur != null) {
	        ListNode pilot = pre.next;
	        int remaining = k;
	        // find the inside loop ending 
	        while (pilot != null && remaining > 0) {
	            remaining--;
	            pilot = pilot.next;
	        }
	        if (remaining > 0) {
	            break;
	        }
	        
//	        the basic idea is to move the next node to the previous next node.
//	        suppose the k = 5, so the flow is like this:
//	        # 1 2 3 4 5 6
//	        # 2 1 3 4 5 6
//	        # 3 2 1 4 5 6
//	        # 4 3 2 1 5 6
//	        # 5 4 3 2 1 6
	        while(cur.next != pilot) {
	        	// nt is the next of the next of the current node
	            ListNode nt = cur.next.next; // delete
	            // move to the first one in inside loop
	            cur.next.next = pre.next; // insert
	            // point to the new first one
	            pre.next = cur.next;
	            cur.next = nt;
	        }
	        pre = cur;
	        cur = cur.next;
	    }
	    return dummy.next;
	}

}
