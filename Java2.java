// You are given an array of ineters A and many queries in the form of a 2-d integer array B. in each qyery you are given 4 ineters l1,r1,l2,r2. These integers represents two ranges , one that goes from l1 to r1 and another goes from l2 to r2. you neet to return the bitwise XOR of element-wise bitwise AND of integers in these two ranges that os first do bitwise AND of all integers in l1 to r1, lets call it x1, similarly do it for l2 to r2  and we get x2 Now,  te answer for thsi query would be x1 XOR x2. return an integer array with the ith index  containing the anwer for the inth query.abstract


// first argument is an integer array A
// second argument is a 2-d integer array B

// A= [3, 1, 7]
// B= [[1, 1, 3,3]]

// output: [4 ]
public class Java2 {

    public static int[] solve(int[] A, int[][] B) {
        int[] ans = new int[A.length+B.length];
        int count = 0;
        for(int i=0;i<
    }

    public static void main(String[] args) {
        int[] A = {3,1,7};
        int[][] B = {{1,1,3,3}};
        int[] ans = solve(A,B);
        for(int i=0;i<1;i++){
            System.out.println(ans[i]);
        }
    }

}
