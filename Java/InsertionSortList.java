
public class InsertionSortList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ListNode head = new ListNode(4);
		head.next = new ListNode(7);
		head.next.next = new ListNode(6);
		head.next.next.next = new ListNode(6);
		head.next.next.next.next = new ListNode(2);
		head.next.next.next.next.next = new ListNode(1);
		head.next.next.next.next.next.next = new ListNode(5);
		
		InsertionSortList ISL = new InsertionSortList();
		ListNode result = ISL.insertionSortList(head);
		System.out.println("finish: "+result);
	}
	
	public ListNode insertionSortList(ListNode head) {
        if (head==null ||head.next==null){
            return head;
        }
        ListNode preHead=new ListNode(-1);
        preHead.next=head;
        ListNode run=head;
        
        while (run!=null && run.next!=null){
            
            if (run.val>run.next.val){
                // find node which is not in order
                ListNode smallNode=run.next;
                ListNode pre=preHead;
                
                // find position for smallNode
                while (pre.next.val<smallNode.val){
                    pre=pre.next;
                }
                ListNode temp=pre.next;
                pre.next=smallNode;
                run.next=smallNode.next;
                smallNode.next=temp;
            }
            else{ // node is in order
               run=run.next; 
            }
        }
        return preHead.next;
    }

}
