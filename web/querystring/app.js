const qs = require('querystring');
// {
//   unescapeBuffer: [Function: unescapeBuffer],
//   unescape: [Function: qsUnescape],
//   escape: [Function: qsEscape],
//   stringify: [Function: stringify],
//   encode: [Function: stringify],
//   parse: [Function: parse],
//   decode: [Function: parse]
// }

(() => {
  const url = 'https://catalog.onliner.by/notebook?diagonalnb%5Bfrom%5D=150&diagonalnb%5Bto%5D=170&display_resnb%5Bfrom%5D=1920x1080&display_resnb%5Bto%5D=3840x2400&display_technb%5B0%5D=ips&display_technb%5B1%5D=oled&display_technb%5B2%5D=ipseink&display_technb%5Boperation%5D=union&ram_sizenb%5Bfrom%5D=8gb&ram_sizenb%5Bto%5D=32gb&hdd_type%5B0%5D=ssd&hdd_type%5Boperation%5D=union';

  console.log(qs.decode(url));
  console.log(qs.encode({ user: 'chel', exp: ['HTML', 'CSS', 'JS'] }, null, null, { maxKeys: 30 } ));
  console.log(qs.parse('hello=12'));
})();