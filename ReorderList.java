
public class ReorderList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		ListNode head = new ListNode(1);
		head.next = new ListNode(2);
		head.next.next = new ListNode(3);
		head.next.next.next = new ListNode(4);
		head.next.next.next.next = new ListNode(5);
		
		ReorderList RL = new ReorderList();
		RL.reorderList(head);
		System.out.println("finish");
	}

	
	public void reorderList(ListNode head) {
        if (head == null){return;}
        if (head.next==null){return;}
        ListNode p=head; 
        ListNode q=head; 
         
        //find the midddle pointer
        while (q.next !=null && q.next.next !=null){
            p=p.next;
            q=q.next.next;
        }
         
        //now p is middle pointer
        //reverse p.next to end
        q = p.next;
        while (q.next!=null){
            ListNode tmp = p.next;
            p.next = q.next;
            q.next = q.next.next;
            p.next.next = tmp;
        }
         
        //reorder
        q = head;
        while (!p.equals(q) && p.next!=null){
            ListNode tmp = q.next;
            q.next = p.next;
            p.next = p.next.next;
            q.next.next = tmp;
            q=q.next.next;
        }
        return;
    }
	
	
}
