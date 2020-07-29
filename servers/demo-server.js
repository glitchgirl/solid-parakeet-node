const http = require('http');

const port = 8080;

/*this makes a server that returns the string hello world when we ask for the localhost

const server = http.createServer((req, res) => {
    console.log('request to the server');
    const headers = {
        'Content-Type': 'text/plain',
    };
    let statusCode = 200;
    let body = 'Hello, world!\n';
    res.writeHead(statusCode, headers);
    res.end(body);
});*/

//this is more complicated, handles 404, and post and get
const server = http.createServer((request, response) => {
    console.log('Request made to server!');
  const headers = {
    'Content-Type': 'text/plain',
  };
  let statusCode = 404;
  let body = 'Not Found';
  if (request.url === '/') {
    if (request.method === 'GET') {
      statusCode = 200;
      body = 'Hello, world!';
    }
  } else if (request.url === '/bananas') {
    if (request.method === 'GET') {
      statusCode = 200;
      body = '🍌🍌🍌';
    } else if (request.method === 'POST') {
      // Save new banana
      statusCode = 201;
      body = 'Banana saved!';
    } else {
      // …others such as PUT, PATCH, DELETE
    } 
  }
  response.writeHead(statusCode, headers);
  response.end(body);
});


server.listen(port, () =>{
    console.log(`listening on port: ${port}`);
});