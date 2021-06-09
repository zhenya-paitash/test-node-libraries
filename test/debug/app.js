// IMPORTS
import debug from 'debug'
import http from 'http'

// VARIABLES
const appName = 'Simple Debug Test APP',
  PORT = 3000,
  [a, b] = [debug('worker:a'), debug('worker:b')]

// SERVER
debug('booting %o', appName)
http
  .createServer((req, res) => {
    debug([req.method, req.url].join` `)
    res.end('hello\n')
  })
  .listen(PORT, () => debug('listening'))

// WORKER
function aWork() {
  a('"a" worker')
  setTimeout(aWork, Math.random() * 1000)
}
aWork()

function bWork() {
  b('"b" worker')
  setTimeout(bWork, Math.random() * 2000)
}
bWork()
