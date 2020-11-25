const
  express = require('express'),
  // Node js сервер, как и любой другой веб-сервер, может выступать в качестве прокси 
  // для всех или только части запросов. Для проксирования запросов через сервер Node js,
  // работающий в связке с фреймворком Express, используется npm модуль express-http-proxy.
  proxy   = require('express-http-proxy'),
  HOST    = 'localhost',
  PORT    = 5000,
  app     = express();


app.listen();