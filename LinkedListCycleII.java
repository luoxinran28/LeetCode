/**
 * 
 *  Linked List Cycle II
	Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
	Follow up:
	Can you solve it without using extra space?
	
	Analysis:
	
	This problem can be viewed as two major steps:
	    (1) Detect whether the loop exists in the linked list.
	    (2) Find the loop start node if loop exists.
	
	The (1) step can be easily solved using the slow&fast pointers (see Linked List Cycle)
	How to deal with step (2)?
	
	Firstly let us assume the slow pointer (S) and fast pointer (F) start at the same place in a n node circle. S run t steps while F can run 2t steps, we want to know what is t (where they meet) , then
	just solve:  t mod n = 2t mod n,  we know when t = n, they meet, that is the start of the circle.
	
	For our problem, we can consider the time when S enter the loop for the 1st time, which we assume k step from the head. At this time, the F is already in k step ahead in the loop. When will they meet next time? 
	Still solve the function:    t mod n = (k + 2t) mod n
	Finally, when t = (n-k), S and F will meet, this is k steps before the start of the loop.
	
	So, the Step (2) can be easily solved after Step(1):
	1. Set S to the head.
	2. S = S -> next, F = F->next
	3. until they meet, count the steps.
 * 
 * 
 * */


public class LinkedListCycleII {

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
		System.out.println(detectCycle(L1));
	}

	
	public static ListNode detectCycle(ListNode head) {
//		ListNode rtNode = new ListNode(0);
		
    	if(head==null) return null;
    	ListNode p = head;
    	ListNode q = head;

    	while(q!=null && q.next!=null){
    		p = p.next;
    		q = q.next.next ;
    		if (p.equals(q)) {
    			q=head;
    			while(!p.equals(q)){
    	    		p = p.next;
    	    		q = q.next ;
    			}
    			return p;
    		}
    			
    	}
    	
		return null;
	}
}
