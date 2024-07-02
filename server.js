const http = require('http');

const port = 22;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola, Mundo!\n');
});

server.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});
