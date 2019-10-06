const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lyrics = rl.question("add text?", (answer)=>{
	// write to a new file named text.txt
fs.writeFile('test.txt', answer, (err) => {
  // throws an error, you could also catch it here
  if (err) throw err;

  // success case, the file was saved
  console.log('added text');
});
});

