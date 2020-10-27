// IMPORT
const 
  express       = require('express'),
  cors          = require('cors'),
  bodyParser    = require('body-parser'),
  passport      = require('passport'),
  cookieSession = require('cookie-session'),
  app           = express();

require('dotenv').config();
require('./pass-setup');

// CONFIG
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession({
  name: 'pgo20-test-session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// MIDDLEWARE
const isLoggedIn = (req, res, next) => req.session.length ? next() : res.sendStatus(401);

// ROUTES
app.get('/', isLoggedIn, (req, res) => {
  res.json(req.session.passport);
});
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get(
  '/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    console.log(req.user);
    res.redirect('/');
  }
);
app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

// SERVER
app.listen(3000, () => console.log('Server run http://localhost:3000'));