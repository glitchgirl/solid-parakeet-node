const fs = require('fs');

fs.unlink('acme.js', (err) => {
  if (err) throw err;
  console.log('File system operation successfully executed');
});
