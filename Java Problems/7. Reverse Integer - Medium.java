class Solution {
    public int reverse(int x) {
        String x_prime = String.valueOf(x);
        String x_prime_reverse = "";

        if ((x_prime.charAt(0) == '-')) {
            x_prime_reverse = x_prime_reverse.concat("-");
        }

        for (int i = x_prime.length() - 1; i >= 0; i -= 1) {
            if (Character.isDigit(x_prime.charAt(i))) {
                x_prime_reverse = x_prime_reverse.concat(String.valueOf(x_prime.charAt(i)));
            }
        }

        int solved;
        try {
            solved = Integer.valueOf(x_prime_reverse);
        }
        catch (Exception e) {
            solved = 0;
        }

        return solved;
    }
}