
public class ReverseLinkedListII {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ListNode head = new ListNode(0);
		head.next = new ListNode(1);
		head.next.next = new ListNode(2);
		head.next.next.next = new ListNode(3);
		head.next.next.next.next = new ListNode(4);
		head.next.next.next.next.next = new ListNode(5);
		
		ListNode newHead = reverseBetween(head, 1, 3);
		System.out.println(newHead);
	}

	
	public static ListNode reverseBetween(ListNode head, int m, int n) {
        ListNode newhead = new ListNode(0);
        newhead.next = head;
        ListNode pre = newhead, Current = head, Start = null;
        ListNode Next;
        for(int i = 1; Current != null; i ++)
        {
        	Next = Current.next;
            if(i == m)
            	Start = pre;
            if(i > m && i <= n)
            	Current.next = pre;
            if(i == n)
            {
            	Start.next.next = Next;
            	Start.next = Current;
            }
            pre = Current;
            Current = Next;
        }
        return newhead.next;
    }
	
}
