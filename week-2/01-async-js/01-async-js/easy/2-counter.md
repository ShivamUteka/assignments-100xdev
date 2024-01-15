## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;

function updateCounter() {
    counter++;
    console.log(counter);

    // Schedule the next update after 1000 milliseconds (1 second)
    setTimeout(updateCounter, 1000);
}

// Start the counter
updateCounter();

// Stop the counter after a certain number of seconds (e.g., 10 seconds in this example)
const stopAfterSeconds = 10;
setTimeout(() => {
    console.log("Counter stopped after", stopAfterSeconds, "seconds.");
    // Clear any pending timeouts to stop the counter
}, stopAfterSeconds * 1000);







































































(Hint: setTimeout)