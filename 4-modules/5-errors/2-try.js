//we upgrade the error into an exception treating it as a condition

const path = require('path');
const fs = require('fs');

const files = ['.bash_profile', 'kjkjhh', '.npmrc'];

files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.HOME, file);
    const data = fs.readFileSync(filePath);
    console.log('File data is', data);
  } catch (err) {
    console.log('File not found');
  }
  //but any error be it file not foudn or anything else will be treat the same, this is not good
});
