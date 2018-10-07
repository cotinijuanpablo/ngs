//Node usually uses the callback pattern for everything async

const fs = require('fs');

//This is sync
const data = fs.readFileSync(__filename);

console.log('File data is', data);

console.log('TEST');
// This test is always after the file because is sync
