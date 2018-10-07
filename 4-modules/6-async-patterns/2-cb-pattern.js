const fs = require('fs');

// This method is async, so we can directly access the data after the call like in the previous example
fs.readFile(__filename, function cb(err, data) {
  console.log('File data is', data);
});
// This callback pattern make it so that the last argument in an async function is the callback
// Error is always the first argument by standard in the callback pattern
// Error-first-callback pattern

console.log('TEST');

//the first iteration of the event loop will call the readFile, define the callback and console.log test
//and it will ask the PS for data
// Later on, once the OPS is ready with the alter, theres another iteration to call the CB function.