const request = require('request');
// {
//   get: [Function (anonymous)],
//   head: [Function (anonymous)],
//   options: [Function (anonymous)],
//   post: [Function (anonymous)],
//   put: [Function (anonymous)],
//   patch: [Function (anonymous)],
//   del: [Function (anonymous)],
//   delete: [Function (anonymous)],
//   jar: [Function (anonymous)],
//   cookie: [Function (anonymous)],
//   defaults: [Function (anonymous)],        
//   forever: [Function (anonymous)],
//   Request: [Function: Request],
//   initParams: [Function: initParams],
//   debug: [Getter/Setter]
// }

request('https://jsonplaceholder.typicode.com/users', (err, res, body) => {

  console.table(JSON.parse(body), [
    'name', 'username', 'email', 'phone', 'website', 'address', 'company'
  ]);

});