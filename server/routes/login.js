let express = require('express');
let router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {Pool} = require('pg')

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const pool = new Pool({
    user: 'postgres',
    host: 'postgres',
    database: 'hiking_guardian',
    password: 'postgres',
    port: 5432,
});

const saltRounds = 10;

router.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error: 'Database connection error'});
    }
});

router.post('/', async (req, res) => {
    const {username, password} = req.body;
    try {
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        console.log(result.rows)
        if (result.rows.length === 0) {
            return res.status(401).json({error: 'User not found'});
        }
        const user = result.rows[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({error: 'Invalid credentials'});
        }
        const token = jwt.sign({id: user.id, username: user.username}, JWT_SECRET, {expiresIn: '1h'});
        res.json({token});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Server error'});
    }
});

module.exports = router;
