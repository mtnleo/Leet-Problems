// 2629. Function Composition
var compose = function(functions) {
    
    return function(x) {
        (functions.reverse()).forEach((fn) => {
            x = fn(x);
        })
        return x;
    }
};

// 2703. Return Length of Arguments Passed
var argumentsLength = function(...args) {
    return arguments.length
};

// 2666. Allow one Function Call
var once = function(fn) {
    let called;
    return function(...args){
        if(called === undefined) {
            called = true;
            return fn(...args);
        }
        else {
            return undefined;
        }
    }
};

// 2623. Memoize