var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i -= 1;
        }
        else {
            k += 1;
        }
    }
    return k;
};

let nums = [0,1,2,2,3,0,4,2];
val = 2;

let k = removeElement(nums, val);
console.log("k = " + k + "\nNums = " + nums);