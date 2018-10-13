/**

http://voidcanvas.com/setimmediate-vs-nexttick-vs-settimeout/

   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘

setImmediate(()=>{console.log("b")})
setTImeout(()=>{console.log("a")},0)

This is not deterministic, but if it's inside a readFile then we are at poll step, and after that comes the CHECK
In the CHECK the immediate is called.

var fs = require('fs');
fs.readFile("my-file-path.txt", function() {
    setTimeout(function(){
        console.log("SETTIMEOUT");
    });
    setImmediate(function(){
        console.log("SETIMMEDIATE");
    });
});

//output (always)
SETIMMEDIATE
SETTIMEOUT

*/

//index.js
// setImmediate(function(){
//     console.log("SETIMMEDIATE");
// });
// setTimeout(function(){
//   console.log("SETTIMEOUT");
// }, 0);

/*
setTimeout(function() {
  console.log("TIMEOUT 1");
  setImmediate(function() {
      console.log("SETIMMEDIATE 1");
  });
}, 0);
setTimeout(function() {
  console.log("TIMEOUT 2");
  setImmediate(function() {
      console.log("SETIMMEDIATE 2");
  });
}, 0);
setTimeout(function() {
  console.log("TIMEOUT 3");
}, 0);
*/

/*
process.nextTick(function() {
  console.log('nextTick 1');
});
process.nextTick(function() {
  console.log('nextTick 2');
});
setImmediate(function() {
  console.log('setImmediate 1');
  process.nextTick(function() {
      console.log('nextTick powerful');
  });
});
setImmediate(function() {
  console.log('setImmediate 2');
});
setTimeout(function() {
  console.log('timeout');
}, 0);
console.log('console');
*/

//I need to ask this

var i;
for (i = 0; i < 10; i++) { 
  setTimeout(function() {
    console.log('timeout');
  }, 0);

  process.nextTick(function() {
    console.log('nextTick');
  });
 
  
  setImmediate(function() {
    console.log('setImmediate');
  });
}

console.log('console');