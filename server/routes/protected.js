const express = require('express');
const jwt = require('jsonwebtoken');
let router = express.Router();
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

router.get('/', authenticateToken, (req, res) => {
    res.json({
        message: 'This is a protected route',
        user: req.user,
    });
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Invalid token
        req.user = user;
        next();
    });
}

module.exports = router;