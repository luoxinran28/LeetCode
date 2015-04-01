
public class MultiplyStrings {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String num1 = "999";
		String num2 = "888";
		System.out.println(new MultiplyStrings().multiply(num1, num2));
	}

 	public String multiply(String num1, String num2) {
        int n1 = num1.length(), n2 = num2.length();
        int n3 = n1 + n2;
        int[] num3 = new int[n3];
        for (int i = n1 - 1; i >= 0; i--) {
            int carry = 0, j, t;
            for (j = n2 - 1; j >= 0; j--) {
                t = carry + num3[i + j + 1] +
                    Character.getNumericValue(num1.charAt(i)) *
                    Character.getNumericValue(num2.charAt(j));
                num3[i + j + 1] = t % 10;
                carry = t / 10;
            }
            num3[i + j + 1] = carry;
        }
        String res = "";
        int i = 0;
        while (i < n3-1 && num3[i] == 0) i++;
        while (i < n3) res += num3[i++];
        return res;
    }
	
}
