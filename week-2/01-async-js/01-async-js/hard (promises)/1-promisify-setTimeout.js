/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
}function delay(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Promise resolved after ${seconds} seconds`);
        }, seconds * 1000);
    });
}

// Example usage:
const secondsToWait = 5;

delay(secondsToWait)
    .then(result => {
        console.log(result); // This will be executed after 5 seconds
    })
    .catch(error => {
        console.error(error);
    });


module.exports = wait;
