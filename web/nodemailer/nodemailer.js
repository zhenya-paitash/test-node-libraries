const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    // from test https://ethereal.email service
    // host: 'smtp.ethereal.email',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    // auth: {
    //   user: 'alena23@ethereal.email',
    //   pass: 'ACuN3mE42CsPQ4NsB5',
    // },

    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'nodemailerzp@gmail.com',
      pass: 'zpnodemailer',
    },
  },
  {
    from: 'NODEMAILER <nodemailerzp@gmail.com>',
  }
);

const mailer = msg => {
  transporter.sendMail(msg, (err, info) => {
    if (err) return console.log(err);
    console.log(info);
  });
};

module.exports = mailer;
