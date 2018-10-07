//Node gives direct suppor to some modules
// I destruct the fs promises namespace, its readFile, into readFile.
//And direclty use it.

//PROMISES are better that callbacks (my opinion)

const { readFile } = require('fs').promises;

async function main() {
  const data = await readFile(__filename);
  console.log('File data is', data);
}

main();

console.log('TEST');
