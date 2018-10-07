//express is a web framework

const express = require('express');

const server = express();

//for root page, / => http://localhost:4242
server.get('/', (req, res)=> {  
  res.send('Hello Express');
  //I don't need to do and end, express will do it automatically
})

// what about and about page, http://localhost:4242/about
server.get('/about', (req, res)=> {
  res.send('about page');
  //I don't need to do and end, express will do it automatically
})

server.listen(4242, () => {
  console.log('Express Server is running...');
});
