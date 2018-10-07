//An error is simply a problem, so its not really catch 
//An exception is a condition that you usually catch

const path = require('path');
const fs = require('fs');

const files = ['.bash_profile', '.npmrc'];

files.forEach(file => {
  const filePath = path.resolve(process.env.HOME, file);
  const data = fs.readFileSync(filePath);
  console.log('File data is', data);
});
