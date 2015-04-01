/*
 * 
 * Merge two sorted linked lists and return it as a new list. 
 * The new list should be made by splicing together 
 * the nodes of the first two lists.
 * 
 * */

/**
 * 
 * The idea is relative simple, add one list into the other. 
	Consider the following conditions:
	1. The l1 is empty. Then l2 is the result.
	2. current element in l1 > current element in l2, 
		insert current element in l2 before current element of l1.
	3. current element in l1 < current element in l2, 
		goto the next element in l1 and compare again.
	Step 2 and 3 are in the loop, until l2 is empty.
 * 
 * 
 * */
public class MergeTwoSortedLists {

	private final static int TotalNumber = 30;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ListNode L1 = new ListNode(0);
		ListNode L1_ptr = L1;
		ListNode L2 = new ListNode(1);
		ListNode L2_ptr = L2;
		for(int i=2;i<=TotalNumber;i+=2){
			ListNode node = new ListNode(i);
			L1_ptr.next=node;
			L1_ptr = node;
		}
		for(int i=3;i<=TotalNumber;i+=2){
			ListNode node = new ListNode(i);
			L2_ptr.next=node;
			L2_ptr = node;
		}
		
		
		ListNode mergedList= mergeTwoLists(L1,L2);
		
		
	}

	
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    	ListNode rtList = new ListNode(0);
    	ListNode current = rtList;
    	while(l1 != null && l2 != null){
    		if(l1.val < l2.val){
    			current.next = l1;
    			current = current.next;
    			l1 = l1.next;
    		}
    		else{
    			current.next = l2;
    			current = current.next;
    			l2 = l2.next;
    		}
    	}
    	current.next = (l1==null) ? l2 : l1;
    	
    	return rtList.next;
    }
}
