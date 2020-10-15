const http = require('http');
// {
//   _connectionListener: [Function: connectionListener],
//   METHODS: [],
//   STATUS_CODES: {},
//   Agent: [Function: Agent] { defaultMaxSockets: Infinity },
//   ClientRequest: [Function: ClientRequest],
//   IncomingMessage: [Function: IncomingMessage],
//   OutgoingMessage: [Function: OutgoingMessage],
//   Server: [Function: Server],
//   ServerResponse: [Function: ServerResponse],
//   createServer: [Function: createServer],
//   validateHeaderName: [Function: hidden],
//   validateHeaderValue: [Function: hidden],
//   get: [Function: get],
//   request: [Function: request],
//   maxHeaderSize: [Getter],
//   globalAgent: [Getter/Setter]
// }

console.log(http.METHODS.map(i => i[0]).join(''));
console.log(http.STATUS_CODES[201]);

http.get('http://habr.com/', res => console.log(res.headers));

const PORT = process.env.PORT || 3000;
http
  .createServer((req, res) => {
    console.log(`${req.method} ${new Date().toLocaleString()} ${req.url}`);
    res.setHeader('x-auth-token', 'Bearer TOKEN');
    res.setHeader("Content-Type", "text/html; charset=utf-8;");
    res.statusCode = 200;
    res.write(`<h1>${req.url} PAGE</h1>`);
    res.end();
  })
  .on('error', err => console.error(err))
  .on('listening', () => console.log('Listen server...'))
  .listen(PORT, () => console.log('Server has started on port:'+PORT));