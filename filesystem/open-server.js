const fs = require('fs');

fs.open('acme.js', 'r+', function(err, fd) {
  if (err) {
     return console.error(err);
  }
 console.log("File opened successfully!");     
});

