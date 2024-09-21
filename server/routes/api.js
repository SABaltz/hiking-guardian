let express = require('express');
let router = express.Router();

const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'postgres',
    database: 'hiking_guardian',
    password: 'postgres',
    port: 5432,
});

router.get('/test-db', async (req, res) => {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
});

router.get('/test-users', async (req, res) => {
    const result = await pool.query('SELECT * FROM users;');
    res.json(result.rows);
});

module.exports = router;
