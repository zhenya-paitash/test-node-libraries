// https://webdevblog.ru/chto-takoe-cors/

// IMPORT
const
  express = require('express'),
  session = require('express-session'),
  bodyPrs = require('body-parser'),
  morgan  = require('morgan'),
  cors    = require('cors'),
  PORT    = process.env.PORT || 3000,
  HOST    = process.env.HOST || 'localhost',
  app     = express();

// CONFIG
app.use(session({
  secret: 'cors',
  cookie: { maxAge: 666999666 },
  saveUninitialized: true,
  resave: true
}));
app.use(bodyPrs.json());
// app.use(bodyPrs.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors({
  origin: 'http://localhost:3000,http://localhost:5000',
  methods: 'GET,POST'
}));

// ROUTE
app.get('/', (req, res) => res.json({
  GET: ['/', '/public', '/private'], 
  POST: ['/login', '/logout']
}));
app.get('/public', (req, res) => res.json({ msg: 'Public route' }));
app.post('/login', (req, res) => {
  if (req.body.password === 'cors') {
    req.session.loggedIn = true;
    res.json({ msg: 'Logged In!' });
  } else res.json({ msg: 'Wrong password!' });
});
app.post('/logout', (req, res) => {
  req.session.loggedIn = false;
  res.json({ msg: 'Logout!' });
});
app.get('/private', (req, res) => {
  req.session.loggedIn
    ? res.json({ msg: 'This is private route' })
    : res.json({ msg: 'Please login first' })
});

// SERVER
app.listen(PORT, HOST, err => err ? console.error(err) : console.log(`Server run http://${HOST}:${PORT}`));