const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your_jwt_refresh_secret_key';

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}));

// Function to generate Access Token
const generateAccessToken = (user) => {
    return jwt.sign(user, JWT_SECRET, { expiresIn: '1m' });
};

// Function to generate Refresh Token
const generateRefreshToken = (user) => {
    return jwt.sign(user, JWT_REFRESH_SECRET, { expiresIn: '7d' });
};

// Route to login and set JWT
app.post('/login', (req, res) => {
    const { username } = req.body;
    if (username) {
        const user = { username };
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/refresh-token' // Refresh token should have a specific path
        });
        return res.json({ message: 'Login successful' });
    }
    res.status(400).json({ message: 'Username is required' });
});

// Route to refresh Access Token
app.post('/refresh-token', (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(403);

    jwt.verify(refreshToken, JWT_REFRESH_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const newAccessToken = generateAccessToken({ username: user.username });
        res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });
        res.json({ message: 'Access token refreshed' });
    });
});

// Protected route
app.get('/protected', (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.sendStatus(403);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        res.json({ message: `Hello ${user.username}` });
    });
});

// Route to logout and clear cookies
app.post('/logout', (req, res) => {
    res.clearCookie('accessToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/refresh-token'
    });
    res.json({ message: 'Logout successful' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
