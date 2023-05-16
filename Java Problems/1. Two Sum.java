class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n1 = 0;
        int n2 = 1;

        while(nums[n1] + nums[n2] != target || n1 == n2) {
            if(n2 == n1) {
                n2 += 1;
                continue;
            }

            if (n2+1 >= nums.length) {
                n1 += 1;
                n2 = 0;
            }
            else {
                n2 += 1;
            }
            
        }
        

        int[] ans = {n1, n2};

        return ans;
    }
}