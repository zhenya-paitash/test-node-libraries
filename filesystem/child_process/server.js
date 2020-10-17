const http = require('http');
const { fork } = require('child_process');
const PORT = 3000;
const HOST = 'localhost';


http
  .createServer((req, res) => {
    if (req.url === '/total') {
      const child = fork(__dirname + '/getCount');

      child.on('message', message => {
        console.log('Returning /total results');
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(message);
      });

      child.send('START');
    } else if (req.url === '/hello') {
      console.log('Returning /hello results');
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(`{"message":"hello"}`);
    }
  })
  .listen(PORT, HOST, () => console.log(`Server is running on http://${HOST}:${PORT}`));
