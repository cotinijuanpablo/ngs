const http = require("http");

//Higher order functions are functions that receive other functions as arguments
// const server = http.createServer((req, res) => {
//   res.end('Hello World\n');
// });

const requestListener = (req, res) => {
  //console.dir(req, {depth: 0});
  //IncomingMessage is the request class, not client request.
  //Client request is used when you want to do a fetch for info from a http server
  //also, you can see it appears twice
  //console.log(req.url); //favicon
  //console.dir(res, {depth: 0});
  //ServerResponse is the reponse class
  res.end("Hello Node\n");
  //the sames as doing this
  //res.write("Hello World\n");
  //res.end(); //With this we say that we aren-t going to stream any more data
};

// I pass a reference to a function, not the return of the function
// if I had used the () that wopuld have been the case
// This server here is an eventEmitter, and one of its events that it emits is "request"
//server.on("request", requestListener)
const server = http.createServer(requestListener);

// To run the server and activate it, you can check it at http://localhost:4242/
server.listen(4242, () => {
  console.log('Server is running...');
});

//I will also be a good idea to install globally nodemon so on changes on the files node will auto restart.
//E.G. if i chanteg the message here i woudl need to re run node, after installing nodemon, i just need to 
//run nodemon instead of node and with each save i will see:
/**
  [nodemon] restarting due to changes...
  [nodemon] starting `node .\1-hello-world.js`
  Server is running...
 */

 //the nodemon is a wrapper over node, and it will monitor the changes over the files