// 2727. Is Object Empty

var isEmpty = function (obj) {
    return JSON.stringify(obj) === "{}" | JSON.stringify(obj) === "[]";
};

// 2677. Chunk Array
var chunk = function(arr, size) {
    let chunked = [];
    for(let i = 0; i < arr.length; i += size) {
        if (i + size <= arr.length ) {
            chunked.push(arr.slice(i, i + size));
        }
        else {
            chunked.push(arr.slice(i));
        }
    }
    return chunked;
};
