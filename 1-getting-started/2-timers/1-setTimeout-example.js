setTimeout(
  () => {
    console.log('Hello after 4 seconds');
  },
  4 * 1000
);


// a set timeout with 0 secs delay is setImmediate
// remember that the delay is a minimum, think about a Busy CPU (busy loop)