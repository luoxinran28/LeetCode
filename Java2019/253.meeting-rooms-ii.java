// class Solution {
//     public int minMeetingRooms(int[][] intervals) {
//         Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
//         PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
//         for(int[] i: intervals) {
//             if(!pq.isEmpty() && pq.peek()[1] <= i[0]) {
//                 pq.poll();
//             }
//             pq.add(i);
//         }
//         return pq.size();
//     }
// }

class Solution {
    public int minMeetingRooms(int[][] intervals) {
        int len = intervals.length;
        int[][] starts = new int[len][2];
        int[][] ends = new int[len][2];
        for(int i = 0; i < len; i++) {
            starts[i] = intervals[i];
            ends[i] = intervals[i];
        }
        Arrays.sort(starts, (a, b) -> a[0] - b[0]);
        Arrays.sort(ends, (a, b) -> a[1] - b[1]);
        
        int curEnd = 0;
        int count = 0;
        for(int i = 0; i < len; i++) {
            if(starts[i][0] < ends[curEnd][1]) {
                count++;
            } else {
                curEnd++;
            }
        }
        return count;
    }
}