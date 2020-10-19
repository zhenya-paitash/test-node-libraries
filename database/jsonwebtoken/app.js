const jwt = require('jsonwebtoken');
// {
//   decode: [Function (anonymous)],
//   verify: [Function (anonymous)],
//   sign: [Function (anonymous)],
//   JsonWebTokenError: [Function: JsonWebTokenError],
//   NotBeforeError: [Function: NotBeforeError],
//   TokenExpiredError: [Function: TokenExpiredError]
// }

(async () => {
  try {
    
    const signature = require('crypto').randomBytes(64).toString('hex');
    const data = {
      email: 'example@email.com',
      password: await require('bcrypt').hash('password123', 10)
    };

    // Sign the token
    const token = jwt.sign(data, signature, { expiresIn: '10s' });
    console.log(token);

    // Decode
    const decoded = jwt.decode(token, signature);
    console.log(decoded);
    
    // Verify token
    jwt.verify(token, signature, {}, (err, res) => {
      if (!err) {
        const isValid = setInterval(() => {
          const time = res.exp*1000 - new Date().getTime();
          time > 0
            ? console.log(time)
            : clearInterval(isValid)
        }, 1000);
      }
    });

  } catch (err) {
    console.log(err);
  }
})();