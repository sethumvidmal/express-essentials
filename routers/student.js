const express = require('express');
const router = express.Router();
const db = require('../config/db-config');
router.get('/', (req, res) => {
    let sqlGetAll = 'SELECT * FROM student_entity';
    db.query(sqlGetAll, (err, data, fields) => {
        if (err) {
            throw err;
        }
        res.json({
            status: 200,
            message: 'Fetching a list of all students successfully',
            data: data
        });
    });
});

module.exports = router;