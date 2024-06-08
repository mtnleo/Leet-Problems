
// 2635. Apply Transform Over Each Element in Array
var map = function(arr, fn) {
    return arr.map(fn);
};

// 2635. Filter elements from Array
var filter = function(arr, fn) {
    return arr.filter(fn);
};

// 2626. Filter Elements from Array
var reduce = function(nums, fn, init) {
    nums.unshift(init);
    return nums.reduce(fn);
};