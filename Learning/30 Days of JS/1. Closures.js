// 2667. Create Hello World Function
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";    
    }
};

// 2620. Counter
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
var createCounter = function(n) {
    return function counter() {
        n += 1;
        return n -1;
    };
};

// 2704. To Be Or Not To Be
var expect = function(val) {
    return {
        val: val,
        toBe: function(val) {
            if(this.val === val) {
                return true;
            }
            else {
                throw "Not Equal";
            }
        },
        notToBe: function(val) {
            if(this.val !== val) {
                return true;
            }
            else {
                throw "Equal";
            }
        }
    }
};


// 2665. Counter II
var createCounter = function(init) {
    return {
        a: init,
        increment: function() {
            this.a += 1;
            return this.a;
        },
        decrement: function() {
            this.a -= 1;
            return this.a;
        },
        reset: function() {
            this.a = init;
            return this.a;
        }
    }
};
