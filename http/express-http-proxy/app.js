// https://webdraftt.com/tutorial/nodejs/proxy
const
  express      = require('express'),
  // Node js сервер, как и любой другой веб-сервер, может выступать в качестве прокси 
  // для всех или только части запросов. Для проксирования запросов через сервер Node js,
  // работающий в связке с фреймворком Express, используется npm модуль express-http-proxy.
  proxy        = require('express-http-proxy'),
  [HOST, PORT] = ['localhost', 5000],
  app          = express();


app.use('*', proxy('http://www.google.com', {
  timeout: 5000
}));


app.listen(PORT, HOST, () => console.log(`Server run: http://${HOST}:${PORT}`));