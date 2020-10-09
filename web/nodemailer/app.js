const express = require('express');
const app = express();
const parser = require('body-parser');
const methods = require('method-override');

const mailer = require('./nodemailer');
let USER = undefined;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));
app.use(parser.urlencoded({ extended: false }));
app.use(methods('_method'));


app.get('/', (req, res) => {
  if (typeof USER === 'undefined') return res.render('index');
  res.status(201).send('Регистрация прошла успешно! Данные отправлены на указанный email: ' + USER.email);
  USER = undefined;
});

app.post('/registration', (req, res) => {
  if (!req.body.checkbox) return res.sendStatus(400);
  USER = req.body;

  mailer({
    // from: 'Nodemailer Test <alena23@ethereal.email>',  // для удобства лучше перенести в транспортер по умолчанию
    to: USER.email,
    subject: 'NODEMAILER',
    text: `
      Nodemailer work!

      Data from form: 
      > login : ${USER.email}
      > password: ${USER.password}
    `
  });

  res.redirect('/');
});

// asdasdas
// dasdasdasd

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("\x1b[34m%s\x1b[0m", 'Start Server: http://localhost:' + PORT));
