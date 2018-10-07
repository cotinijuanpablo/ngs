// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

var counter = 0;
const print = (func) => {
    if (counter < 5) {
        console.log('Hello World');
        counter++;
    }
    else {
        clearInterval(interval)
        console.log('Done');
    }
    
}

var interval = setInterval(print, 1 * 1000);


