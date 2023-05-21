class Solution {
    public int removeDuplicates(int[] nums) {
        int k = 1;
        int firstNum = nums[0]; // to check that it doesn't repeat itself
        int j;

        for (int i = 0; i < nums.length; i++) {
            j = i + 1;

            while (j < nums.length && (nums[j] == nums[i] || nums[j] == firstNum)) {
                nums[j] = firstNum;
                j += 1;
            }

            if (j == nums.length) {
                break;
            }
            else {
                nums[i + 1] = nums[j];
                k += 1;
            }
        }

        return k;
    }
}