// 用PriorityQueue建立大小堆，大堆放比median小的数，小堆放比median大的数。
// 如果是基数，就pop两个堆顶除以2，如果是偶数，就pop两个堆顶的和除以2
// 两个堆得size大小必须是一样的。addNum的操作是3*log(N)，find是O(1)。
class MedianFinder {
  
  private PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());
  private PriorityQueue<Integer> large = new PriorityQueue<>();
  private boolean even = true;

  /** initialize your data structure here. */
  public MedianFinder() {
      
  }
  
  public void addNum(int num) {
      if(even) { // 用even可以平衡两个PQ的大小
          small.offer(num);
          large.offer(small.poll());
      } else {
          large.add(num);
          small.offer(large.poll());
      }
      even = !even;
  }
  
  public double findMedian() {
      if(even) {
          return (small.peek() + large.peek()) / 2.0;
      } else {
          return large.peek();
      }
  }
}

/**
* Your MedianFinder object will be instantiated and called as such:
* MedianFinder obj = new MedianFinder();
* obj.addNum(num);
* double param_2 = obj.findMedian();
*/