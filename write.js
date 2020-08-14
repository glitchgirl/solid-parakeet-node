const fs = require('fs');
const data = new Uint8Array(Buffer.from('morgan chase \n'));
fs.writeFile('name.txt', data, (err) => {
  if (err) {
    throw err;
  }
  console.log('The file has been saved!');
});
