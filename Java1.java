// A number is beutiful if yhe xor sum of the digits of the number is strictly greter than the average of the minimum and maximum digit of the number
// Given A and B, find the count of beutiful numbers in the range [A,B].
// Since the anwer can be very large, output the remainder after dividing the answer by 10^9+7.

// Note: The xor sum of the digits of a number is the bitwise xor of all the digits of the number.


// first argument is an integer A from of a string
// second argument is an integer B from of a string

// A= "10"
// B= "12"

// // Output: 2

class Java1 {
    public int solve(String A, String B) {
        int a = Integer.parseInt(A);
        int b = Integer.parseInt(B);
        int count = 0;
        for(int i=a;i<=b;i++){
            int min = Integer.MAX_VALUE;
            int max = Integer.MIN_VALUE;
            int sum = 0;
            int num = i;
            // sauravhathi
            while(num>0){
                int rem = num%10;
                sum = sum^rem;
                min = Math.min(min,rem);
                max = Math.max(max,rem);
                num = num/10;
            }
            if(sum>(min+max)/2){
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Java1 j = new Java1();
        System.out.println(j.solve("10","12"));
    }
}