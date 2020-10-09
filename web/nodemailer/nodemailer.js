const nodemailer = require('nodemailer');

// const config = "smtp://nodemailerzp@gmail.com:zpnodemailer@smtp.gmail.com";  // if secure: true => smtps://...
const config = "smtp://nodemailerzp@gmail.com:zpnodemailer@smtp.gmail.com/?pool=true";

const transporter = nodemailer.createTransport(
  // {
  //   // ? from test https://ethereal.email service
  //   // host: 'smtp.ethereal.email',
  //   // port: 587,
  //   // secure: false, // true for 465, false for other ports
  //   // auth: {
  //   //   user: 'alena23@ethereal.email',
  //   //   pass: 'ACuN3mE42CsPQ4NsB5',
  //   // },

  //   // ? GMAIL
  //   // host: 'smtp.gmail.com',
  //   // port: 587,
  //   // secure: false, // true for 465, false for other ports
  //   // auth: {
  //   //   user: 'nodemailerzp@gmail.com',
  //   //   pass: 'zpnodemailer',
  //   // },

  //   // ? GMAIL для массовой рассылки
  //   pool: true,
  //   // ? гибкая настройка
  //   // maxConnections: 5,  // default
  //   // socketTimeout: 1000000,
  //   // maxMessages: 'infinity',
  //   // rateLimit: 2,
  //   // rateDelta: 2000,
  //   host: 'smtp.gmail.com',
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: 'nodemailerzp@gmail.com',
  //     pass: 'zpnodemailer',
  //   },
  // },
  config,
  {
    from: 'NODEMAILER <nodemailerzp@gmail.com>',
  }
);

// проверка связи с почтовым сервером
transporter.verify((err, success) => {
  err ? console.log(err) : console.log('Mail Server: ', success)
});

const mailer = msg => {
  transporter.sendMail(msg, (err, info) => {
    if (err) return console.log(err);
    console.log(info);
    // ? закрыть после отправки
    transporter.close();
  });
};

module.exports = mailer;
