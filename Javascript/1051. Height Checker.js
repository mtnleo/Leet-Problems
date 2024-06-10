var heightChecker = function(heights) {
    let unexpected = 0;
    let expected = heights.toSorted(function(a, b){return a - b});
    console.log("Heights -> " + heights + "\nExpected -> " + expected);
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            unexpected++;
        }
    }
    return unexpected;
};

console.log(heightChecker([1,1,4,2,1,3]));
console.log(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]));
console.log(heightChecker([1, 2]));