//some tempalting language are handlerbars and ejs
//Shoudl check react with jsx

const express = require('express');

const server = express();

// configure express to work with ejs
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.get('/about', (req, res) => {
  res.render('about');
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
