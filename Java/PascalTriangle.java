import java.util.ArrayList;


public class PascalTriangle {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
		System.out.println(generate(5));
	}
	
	public static ArrayList<ArrayList<Integer>> generate(int numRows){
		ArrayList<ArrayList<Integer>> retList = new ArrayList<ArrayList<Integer>>();
		if (numRows==0){
			return retList;
		}
		ArrayList<Integer> firstRow = new ArrayList<Integer>();
		firstRow.add(1);
        retList.add(firstRow);
        if (numRows==1){
        	return retList;
        }
        ArrayList<Integer> secondRow = new ArrayList<Integer>();
        secondRow.add(1);
        secondRow.add(1);
        retList.add(secondRow);
        if (numRows==2){
        	return retList;
        }
		for(int i = 2; i < numRows; i++) {
        	ArrayList<Integer> rowList = new ArrayList<Integer>();
        	for(int k=0;k<i+1;k++){
        		rowList.add(1);
        	}
            for(int j = 1; j < i; j ++) {
            	rowList.set(j, retList.get(i-1).get(j)
            			+retList.get(i-1).get(j-1));
            }
            retList.add(rowList);
        }
        return retList;
	}
}
