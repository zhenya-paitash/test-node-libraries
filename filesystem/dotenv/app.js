const env = require('dotenv');
// { 
//   config: [Function: config], 
//   parse: [Function: parse]
// }

// CONFIG
// config прочитает ваш .env файл, проанализирует содержимое, назначит его process.env и вернет объект 
// с parsed ключом, содержащим загруженное содержимое, или error ключ, если он не удался.
// Вы можете использовать опцию командной строки--require ( -r) для предварительной загрузки dotenv
// node -r dotenv/config app.js
env.config({
  path: "./second.env",
  encoding: "utf8",
  debug: process.env.DEBUG
});

const url = process.env.PROTOCOL + '://' + process.env.HOST + ':' + process.env.PORT + '/' + process.env.HOMEPAGE;
console.log(url);

// PARSE
// Движок, который анализирует содержимое вашего файла, содержащего переменные среды.
// Он принимает строку или буфер и возвращает объект с проанализированными ключами и значениями.
const buf = Buffer.from('FROM_BUFFER=true');
const config = env.parse(buf);
console.log(config);

const fs = require('fs');
const envConfig = env.parse(fs.readFileSync('.env.test'));
for (const i in envConfig) 
  process.env[i] = envConfig[i];

console.log(process.env);