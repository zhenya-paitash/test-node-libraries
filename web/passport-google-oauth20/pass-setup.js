const 
  passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.serializeUser((user, done) => done(null, user.id));
// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => done(err, user))
// });
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // User.findOrCreate({ googleId: profile.id }, (err, user) => {
      // return done(err, user);
    // });
    return done(null, profile);
  }
));