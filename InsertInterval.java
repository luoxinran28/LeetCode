import java.util.ArrayList;


public class InsertInterval {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<Interval> intervals = new ArrayList<Interval>();
		intervals.add(new Interval(1,3));
		intervals.add(new Interval(2,6));
		intervals.add(new Interval(8,10));
		intervals.add(new Interval(15,18));
		
		InsertInterval II = new InsertInterval();
		ArrayList<Interval> res = II.insert(intervals, new Interval(2,5));
		System.out.println(res);
	}
	
	
	public ArrayList<Interval> insert(ArrayList<Interval> intervals, Interval newInterval) {

        ArrayList<Interval> result = new ArrayList<Interval>();
        boolean inserted = false;
        for (int i = 0; i < intervals.size(); i++){
            Interval i1 =intervals.get(i);
            if (i1.end < newInterval.start){
                result.add(i1);
            }
            else if (newInterval.end < i1.start){
                result.add(newInterval);
                result.addAll(intervals.subList(i, intervals.size()));
                inserted = true;
                break;
            }
            else{
                newInterval = merge(newInterval, i1);
            }            
        }
        if (!inserted) result.add(newInterval);
        return result;
    }

    public Interval merge(Interval i1, Interval i2){
        int start = (i1.start < i2.start) ? i1.start : i2.start;
        int end = (i1.end > i2.end) ? i1.end : i2.end;
        return new Interval(start, end);
    }
    

}
