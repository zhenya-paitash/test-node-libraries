const express = require('express');
const app = express();
const parser = require('body-parser');
const methods = require('method-override');

const mailer = require('./nodemailer');
let USER;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));
app.use(parser.urlencoded({ extended: false }));
app.use(methods('_method'));


app.get('/', (req, res) => {
  if (!USER) return res.render('index');
  res.status(201).send('Регистрация прошла успешно! Данные отправлены на указанный email: ' + USER.email);
  USER = null;
});

app.post('/registration', (req, res) => {
  if (!req.body.checkbox) return res.sendStatus(400);
  USER = req.body;

  mailer({
    // from: 'Nodemailer Test <alena23@ethereal.email>',  // для удобства лучше перенести в транспортер по умолчанию
    to: USER.email,
    subject: 'NODEMAILER TEST SEND',
    html: `
      <h1>Nodemailer work!</h1>
      <hr/>
      <i>SEND DATA: </i>
      <ul>
        <li>email: ${USER.email} </li>
        <li>message: ${USER.message} </li>
      </ul> 
    `
  });

  res.redirect('/');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("\x1b[34m%s\x1b[0m", 'Start Server: http://localhost:' + PORT));
