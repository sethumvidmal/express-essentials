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
router.post('/', (req, res) => {
    const {age, address, first_name, gender, last_name, nic} = req.body;
    if (!age || !address || !first_name || !gender || !last_name || !nic) {
        return res.status(400).json({
            status: 400,
            message: 'Missing required fields'
        });
    }
    let sqlInsert = `INSERT INTO student_entity (age, address, first_name, gender, last_name, nic) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [age, address, first_name, gender, last_name, nic];
    db.query(sqlInsert, values, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.json({
                message: 'Student created successfully'
            });
        }
    });
});
router.put('/:id', (req, res) => {
    const studentId = req.params.id;  // Get the student ID from the path variable
    const {age, address, first_name, gender, last_name, nic} = req.body;

    if (!age || !address || !first_name || !gender || !last_name || !nic) {
        return res.status(400).json({
            status: 400,
            message: 'Missing required fields'
        });
    }

    let sqlUpdate = `UPDATE student_entity SET 
                    age = ?,
                    address = ?,
                    first_name = ?,
                    gender = ?,
                    last_name = ?,
                    nic = ?
                  WHERE id = ?`;
    const values = [age, address, first_name, gender, last_name, nic, studentId];

    db.query(sqlUpdate, values, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.json({
                message: 'Student updated successfully'
            });
        }
    });
});

module.exports = router;