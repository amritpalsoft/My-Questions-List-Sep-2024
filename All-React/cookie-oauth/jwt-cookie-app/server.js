const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('./auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(session({
    secret: 'your_session_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/protected');
    }
);

app.get('/protected', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(`Hello ${req.user.displayName}`);
    } else {
        res.redirect('/');
    }
});

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
