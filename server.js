const http = require('http');

const port = 3000;
const hostname = 52.23.204.79;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola, Mundo!\n');
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
