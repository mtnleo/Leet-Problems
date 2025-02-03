/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length !== 1) {
        
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j >= 0; j--) {
            if(nums[j] === nums[i] && j !== i) {
                j = -1;
            }
            else if (j == 0){
                return nums[i];
            }
        }
    }
    }
    else {
        return nums[0];
    }
};