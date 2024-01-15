/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

// Function that sequentially calls the functions and returns a promise chain
function sequentialExecution() {
    const startTime = Date.now();

    return function1()
        .then(result1 => {
            console.log(result1);
            return function2();
        })
        .then(result2 => {
            console.log(result2);
            return function3();
        })
        .then(result3 => {
            console.log(result3);
            const endTime = Date.now();
            const totalTime = endTime - startTime;
            return `Total time taken: ${totalTime} milliseconds`;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}