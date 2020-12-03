const createErr = require('http-errors');
const express   = require('express');
const app       = express();


app.use((req, res, next) => {
  if (!req.user)
    return next(createErr(401, 'Unauthorized user. Pls login first.', {
      // expose: false,   // can be used to signal if message should be sent to the client, defaulting to false when status >= 500
      // headers,         // can be an object of header names to values to be sent to the client, defaulting to undefined. When defined, the key names should all be lower-cased
      // message,         // the traditional error message, which should be kept short and all single line
      // status,          // the status code of the error, mirroring statusCode for general compatibility
      // statusCode,      // the status code of the error, defaulting to 500
    })); 
  next();
});

app.listen(5000, () => console.log('server run on port 5000'));