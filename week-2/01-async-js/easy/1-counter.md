## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

let counter = 0;

function updateCounter() {
    counter++;
    console.log(counter);
}

// Update the counter every 1000 milliseconds (1 second)
const intervalId = setInterval(updateCounter, 1000);

// Stop the counter after a certain number of seconds (e.g., 10 seconds in this example)
const stopAfterSeconds = 10;
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Counter stopped after", stopAfterSeconds, "seconds.");
}, stopAfterSeconds * 1000);
