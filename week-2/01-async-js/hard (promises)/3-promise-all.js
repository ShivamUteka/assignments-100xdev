/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function delayPromise(t) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Promise resolved after ${t} seconds`);
        }, t * 1000);
    });
}

// Functions that return promises with different resolve times
function function1() {
    return delayPromise(2);
}

function function2() {
    return delayPromise(4);
}

function function3() {
    return delayPromise(1);
}

// Function that waits for all promises using Promise.all and returns total time
function waitForAll() {
    const startTime = Date.now();

    return Promise.all([function1(), function2(), function3()])
        .then(results => {
            const endTime = Date.now();
            const totalTime = endTime - startTime;
            console.log("All promises resolved:", results);
            return `Total time taken: ${totalTime} milliseconds`;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

