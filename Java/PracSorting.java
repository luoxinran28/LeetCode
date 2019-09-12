import java.util.ArrayList;
import java.util.Collections;


/**
 * this practice refer to the link: 
   http://www.sorting-algorithms.com/
 * 
 * **/ 


public class PracSorting {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<Integer> arr = new ArrayList<Integer>();
		recover(arr);
		System.out.println("the array is: "+arr);
		System.out.println("***************************");
		
		PracSorting TestSorting = new PracSorting();
		TestSorting.bubbleSort(arr);
		System.out.println("after BUBBLE sorting: "+arr);
		System.out.println("---------------------------");
		recover(arr);
		
		TestSorting.selectSort(arr);
		System.out.println("after SELECTION sorting: "+arr);
		System.out.println("---------------------------");
		recover(arr);
		
		TestSorting.insertSort(arr);
		System.out.println("after INSERT sorting: "+arr);
		System.out.println("---------------------------");
		recover(arr);
		
		ArrayList<Integer> helper = new ArrayList<Integer>();
		for(int i=0; i<arr.size(); i++){
			helper.add(0);
		}
		TestSorting.mergeSort(arr, helper, 0, arr.size()-1);
		System.out.println("after MERGE sorting: "+arr);
		System.out.println("---------------------------");
		helper.clear();
		recover(arr);
		
		TestSorting.quickSort(arr, 0, arr.size()-1);
		System.out.println("after QUICK sorting: "+arr);
		System.out.println("---------------------------");
		recover(arr);
		
		TestSorting.heapSort(arr);
		System.out.println("after HEAP sorting: "+arr);
		System.out.println("---------------------------");
		recover(arr);
		
	}
	
	
	/**
	 * 
	 * A heap, briefly speaking, is a tree structure, where the value of each parent 
	 * node is greater/smaller than its children. Practically in the heap sort, 
	 * we use the specific kind of heap----binary heap.
		Binary heap,  is a complete binary tree, also keeps the property that each root 
		value is greater or smaller than its left and right children. Thus, the root of 
		the tree is the biggest (called max heap) or the smallest (called min heap) element in the tree.
		Caution!!!  A Heap is NOT a binary search tree(BST)! A BST can apply in-order 
		traversal to get the sorted  array, heap CANNOT guarantee the ordering within
		same level, so it does not have a specific requirement of the order for the left and right children. 
	 * 
	 * Key Point:
		(1) How to construct the heap?
	      Use array to represent the tree structure.
	      Recursively downshift every node.
		(2) How to get the sorted array according to the heap?
	      Each time remove the root of the heap, swap the last node to the root and downshift it.
	      Until all the nodes are removed.
	 * 
	 * 	Properties
		Not stable
		O(1) extra space (see discussion)
		O(n·lg(n)) time
		Not really adaptive
	 * **/
	
	public void heapSort(ArrayList<Integer> arr) {
		// TODO Auto-generated method stub
		constructHeap(arr);
		int length = arr.size();
		
		ArrayList<Integer> tmp = new ArrayList<Integer>();
		for(int i = 0; i<length; i++){
			tmp.add(0);
		}
		
		int i=length-1;
		while (i>=0){
			//get the biggest in the heap
			tmp.set(length-1-i, arr.get(0));
			Collections.swap(arr, 0, i);
			downShift(arr, i, 0);
			i--;
		}
		arr.clear();
		arr.addAll(tmp);
		
	}


	private void constructHeap(ArrayList<Integer> arr) {
		// TODO Auto-generated method stub
		int length = arr.size();
		int parent=(length-2)/2;
		for ( ;parent>=0;parent--){ 
			downShift(arr, length, parent);
		} 
	}

	private void downShift(ArrayList<Integer> arr, int length, int parent) {
		// TODO Auto-generated method stub
		if (parent<0 ) return;
		int left = parent*2+1;
		int right = parent*2+2;
		int mxch;
		if (left>=length) return;
		if (right>=length) {
			mxch=left;
		}
		else{mxch = arr.get(left)>=arr.get(right)?left:right;}
		if (arr.get(parent)<arr.get(mxch)){
			Collections.swap(arr, parent, mxch);
			downShift(arr, length, mxch);
		} 
	}


	/**
	 * 
	 * Concept:
		This is also a Divide and Conquer algorithm. The idea is:  
		for an element pivot in the array, place the elements less 
		than pivot to its left, and elements greater than pivot to its right. 
		Do this same procedure to the two subsets (left and right), 
		until all the elements are sorted.

	 * 
	 * 
	 * How to Memorize:
		(1) Recursion (divide-and-conquer)
		(2) Select a Pivot
		(3) Aim: reorder elements<pivot to the left and elements>pivot to the right
		(4) Set pivot to front
		(5) Set two pinter
	 * 
	 * Properties
		Not stable
		O(lg(n)) extra space (see discussion)
		O(n^2) time, but typically O(n·lg(n)) time
		Not adaptive
	 *
	 * **/
	public void quickSort(ArrayList<Integer> arr, int low, int high) {
		// TODO Auto-generated method stub
		if(low<high){
			int pivot = low+(high-low)/2;
			Collections.swap(arr, low, pivot);
			int pivotPtr = low+1;
			for (int i=low+1;i<high;i++){
				if(arr.get(i)<arr.get(low)){
					Collections.swap(arr, i, pivotPtr);
					pivotPtr++;
				}
			}
			Collections.swap(arr, pivotPtr-1, low);
			quickSort(arr, low, pivotPtr-1);
			quickSort(arr, pivotPtr, high);
		}
		
	}



	/**
	 * 
	 * 	Key Point:
		Merge sort consist two parts:
		(1) Recursion Part.
		(2) Merge Part.
		
		Recursive part, handles divided the current set to two parts, 
		just like the concept of divide-and-conquer: Find the middle, 
		divide into left and right subset and continue dividing in each subset.
		Recursion also keeps the two subset sorted for the merging.
		
		How to Memorize:
		(1) Recursion Part: divide from the middle
		(2) Merge Part:  merge two sorted array into one sorted array
	 * 
	 * 
	 * 	Properties
		Stable
		Θ(n) extra space for arrays (as shown)
		Θ(lg(n)) extra space for linked lists
		Θ(n·lg(n)) time
		Not adaptive
		Does not require random access to data
	 * 
	 * **/
	private void mergeSort(ArrayList<Integer> arr, 
			ArrayList<Integer> helper, 
			int low, int high) {
		// TODO Auto-generated method stub
		// check if low is smaller then high, if not then the array is sorted
		if (low < high) {
	    	// Get the index of the element which is in the middle
		    int middle = low + (high - low) / 2;
		    // Sort the left side of the array
		    mergeSort(arr, helper, low, middle);
		    // Sort the right side of the array
		    mergeSort(arr, helper, middle + 1, high);
		    // Combine them both
		    merge(arr, helper, low, middle, high);
	    }
	    
	}


	private void merge(ArrayList<Integer> arr, 
			ArrayList<Integer> helper, 
			int low, int middle, int high) {
		// TODO Auto-generated method stub
		// Copy both parts into the helper array
		
		for (int i = low; i <= high; i++) {
			helper.set(i, arr.get(i));
	    }

	    int i = low;  // for helper
	    int j = middle + 1;  // for helper
	    int k = low;  // for the original array
	    // Copy the smallest values from either the left or the right side back
	    // to the original array
	    while (i <= middle && j <= high) {
	    	if(helper.get(i)<=helper.get(j)){
	    		arr.set(k, helper.get(i));
	    		i++;
	    	}
	    	else{
	    		arr.set(k, helper.get(j));
	    		j++;
	    	}
	    	k++;
	    }
	    // Copy the rest of the left side of the array into the target array
	    while (i <= middle) {
	    	arr.set(k, helper.get(i));
	    	k++;
	    	i++;
	    }
	}


	/**
	 * Concept:
		For each element A[i], the array A[0..i-1] is already sorted. 
		Scan A[0..i-1], find the correct place and insert A[i].
		
		Key Point:
		Find the correct place and insert the A[i] in sorted A[0..i-1].
		Consider A[0..i]:   [1,3,4,5,8,2],
		So, A[i]=2.
		Store it to a variable: tmp = A[i];
		What we need to do now?
		[1,3,4,5,8,2] ---->  [1,2,3,4,5,8]
		How to do this?
		Keep moving each element to its right (A[j]=A[j-1]), 
		until the next element is less than  A[i].
		
		How to Memorize:
		Insert every element to its previous sorted array.
	 * 
	 * 
	 * Properties
		Stable
		O(1) extra space
		O(n2) comparisons and swaps
		Adaptive: O(n) time when nearly sorted
		Very low overhead
	 * **/
	private void insertSort(ArrayList<Integer> arr) {
		// TODO Auto-generated method stub
		int length = arr.size();
		for (int i=0;i<length;i++){
		    int tmp = arr.get(i);
		    int j=i;
		    while (j>0 && tmp<arr.get(j-1)){
		    	arr.set(j, arr.get(j-1));
		        j--;
		    }
		    arr.set(j, tmp);
		}
	}

	/**
	 * 
	 	Concept:
		From 1st to last, find the min value, store to the 1st position.
		From 2nd to last, find the min value, store to the 2nd position.
		From 3rd to last, find the min value, store to the 3rd position.
		...
		From last-1 to last, find the smaller one, store to the last-1 position. End.
		
		Key Point:
		k=i;  // store the current start position
		if (A[j]<A[k]) {k=j;} // store the index of min value
		
		How to Memorize:
		Select the min value and store to the front.
	 * 
	 * 
	 * 
	 * Properties:
		Not stable
		O(1) extra space
		Θ(n2) comparisons
		Θ(n) swaps
		Not adaptive
	 * **/
	private void selectSort(ArrayList<Integer> arr) {
		// TODO Auto-generated method stub
		int length = arr.size();
		for (int i=0;i<length-1;i++){
		    int k=i; // k can be viewed as the index of min value
		    for (int j=i+1;j<length;j++){ // find the min value
		      if (arr.get(j)<arr.get(k)){
		    	  k=j;
		      }
		    }
		    Collections.swap(arr, i, k);  // store the min value to the start
		}
	}


	/**
	 * 
	 	Concept: 
		Scan from start to end, compare every two elements, swap the max to the end.
		Scan from start to end-1, compare every two elements, swap the max to the end-1.
		Scan from start to end-2, compare every two elements, swap the max to the end-2.
		...
		Scan from start to start, end.
		
		Key Point:
		if A[j]>A[j+1], swap(A[j], A[j+1]);
		
		How to Memorize:
		Compare each pair and bubble the max value out and move to the last.
	 * 
	 * 
	 * 
	 * 	Properties:
		Stable
		O(1) extra space
		O(n2) comparisons and swaps
		Adaptive: O(n) when nearly sorted
	 * **/
	public void bubbleSort(ArrayList<Integer> arr){
		int length = arr.size();
//		
//		for (int i=0; i<length; i++){
//		    for (int j=1; j<length-i; j++){
//			    if (arr.get(j)<arr.get(j-1)){
//			    	Collections.swap(arr, j, j-1);
//			    }
//		    }
//		}
		
		
		// optimized one
		boolean flag = true;  
		
		int k = 0;
		while (flag)  
        {  
			flag = false;  
			k++;
			for (int j = 1; j < length - k; j++)
			{
				if (arr.get(j)<arr.get(j-1)){
	    		  Collections.swap(arr, j, j-1);
	    		  flag = true;
				}
			}
	    }  	
	}
	
	private static void recover(ArrayList<Integer> arr) {
		// TODO Auto-generated method stub
		arr.clear();
		arr.add(4);
		arr.add(6);
		arr.add(5);
		arr.add(3);
		arr.add(3);
		arr.add(7);
		arr.add(2);
		arr.add(8);
	}
	


}
