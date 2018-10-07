setInterval(() => {
  console.log('Hello Event Loop!!');
}, 5000);

// node event loop is qorking now, we gave the process a reason to continue running
// The event loop is what node uses to process async actions
// and interface them for you so that you don't have to deal with threads
// every 5 secs the arrow function its sent by node to v8 to be run