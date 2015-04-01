import java.util.Comparator;
import java.util.ArrayList;
import java.util.Collections;


public class MergeIntervals {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		ArrayList<Interval> intervals = new ArrayList<Interval>();
		intervals.add(new Interval(1,3));
		intervals.add(new Interval(2,6));
		intervals.add(new Interval(8,10));
		intervals.add(new Interval(15,18));
		
		MergeIntervals MI = new MergeIntervals();
		ArrayList<Interval> res = MI.merge(intervals);
		System.out.println(res);
		
	}

	
	
	public ArrayList<Interval> merge(ArrayList<Interval> intervals) {

 
        if (intervals.size() == 0) {
            return intervals;
        }
        
        Collections.sort(intervals, INTERVAL_ORDER);
        ArrayList<Interval> ret = new ArrayList<Interval>();
 
        int s = intervals.get(0).start;
        int e = intervals.get(0).end;
        for (int i = 0; i < intervals.size(); i++) {
            Interval itv = intervals.get(i);
            if (e >= itv.start) {
                //merge 2
                e = Math.max(e, itv.end);
            }
            else {
                ret.add(new Interval(s, e));
                s = itv.start;
                e = itv.end;
            }
        }
        //the last set of intervals are not added
        ret.add(new Interval(s, e));
        return ret;
    }
 
    static final Comparator<Interval> INTERVAL_ORDER = new Comparator<Interval>(){
        public int compare (Interval i, Interval j) {
            return new Integer(i.start).compareTo(new Integer(j.start));
        }
    };
}
