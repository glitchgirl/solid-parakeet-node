const fs = require('fs');
fs.appendFile('message.txt', 'this is cool \n', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
