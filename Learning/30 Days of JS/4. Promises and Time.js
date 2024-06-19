// 2723. Add two promises
var addTwoPromises = async function(promise1, promise2) {
    let x = await promise1;
    let y = await promise2;
    return new Promise((resolve, reject) => {
        resolve(x + y);
    })
};

// 2621. Sleep
async function sleep(millis) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(true);
        }, millis)
    })
}

// 2715. Timeout Cancellation