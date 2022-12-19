import java.util.ArrayList;

// longest odd palindromes
// given a string s(consisting of only lowercase alphabets)
// in each query you will given an integer i and your task to find the length of longest odd palindromic substring whose middle index is i.abstract

// note:
// 1. assume 1 based indexing.
// 2. longest odd palindrome: A palindrome substring whose length is odd .class

// A = aaaaa
// B = [2, 3]

// output: [3, 5]

// A = abcd
// B = [2]

// output: [0]

public class Java3 {
    
        public static void main(String[] args) {
            String A = "aaaaa";
            ArrayList<Integer> B = new ArrayList<>();
            B.add(2);
            B.add(3);
            ArrayList<Integer> ans = solve(A,B);
            for(int i=0;i<ans.size();i++){
                System.out.println(ans.get(i));
            }
        }

        public ArrayList<Integer> solve(String A, ArrayList<Integer> B) {
            ArrayList<Integer> ans = new ArrayList<>();
            for(int i=0;i<B.size();i++){
                int index = B.get(i)-1;
                int left = index;
                int right = index;
                int count = 0;
                while(left>=0 && right<A.length()){
                    if(A.charAt(left)==A.charAt(right)){
                        count++;
                        left--;
                        right++;
                    }else{
                        break;
                    }
                }
                ans.add(count*2-1);
            }
            return ans;
        }
}