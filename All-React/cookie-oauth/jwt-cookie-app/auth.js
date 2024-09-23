// auth.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

passport.use(new GoogleStrategy({
    // clientID: process.env.GOOGLE_CLIENT_ID || "379687908249-qdp1n1d6l1vilfpmpctln350ko4pgagm.apps.googleusercontent.com",
    // clientSecret: process.env.GOOGLE_CLIENT_SECRET || "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",
    callbackURL: '/auth/google/callback'
},
    (token, tokenSecret, profile, done) => {
        return done(null, profile);
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});
