const
  express = require('express'),
  session = require('express-session'),
  flash   = require('connect-flash'),
  cookie  = require('cookie-parser'),
  app     = express();


app.use(cookie( require('crypto').randomBytes(64).toString('hex') ));
app.use(session({ cookie: { maxAge: 10 * 3600 } }));
app.use(flash());

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello to flash test</h1>
    <a href="/">CLEAR</a>
    <a href="/success">Success</a>
    <a href="/info">Info</a>
    <a href="/warning">Warning</a>
    <a href="/danger">Danger</a>
    <hr/>
    <h2> SUCCESS: ${req.flash('success')}</h2>
    <h2> INFO: ${req.flash('info')}</h2>
    <h2> WARNING: ${req.flash('warning')}</h2>
    <h2> DANGER: ${req.flash('danger')}</h2>
  `);
});

app.get('/success', (req, res) => {
  req.flash('success', 'Success flash');
  res.redirect('/');
});
app.get('/info', (req, res) => {
  req.flash('info', 'Info flash'); 
  res.redirect('/');
});
app.get('/warning', (req, res) => {
  req.flash('warning', 'Warnign flash'); 
  res.redirect('/');
});
app.get('/danger', (req, res) => {
  req.flash('danger', 'Danger flash'); 
  res.redirect('/');
});

app.listen(3000, () => console.log(`Server run http://localhost:3000`));