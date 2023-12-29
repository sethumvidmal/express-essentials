const db = require('../../config/db-config');

//GET
const getAllStudents = (req, res) => {
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
};

//POST
const createStudent = (req, res) => {
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
};

//PUT
const updateStudent = (req, res) => {
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
};

//DELETE
const removeStudent = (req, res) => {
    const studentId = req.params.id; // Get the student ID from the path variable

    let sqlDelete = `DELETE FROM student_entity WHERE id = ?`;
    const values = [studentId];

    db.query(sqlDelete, values, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.json({
                message: 'Student deleted successfully'
            });
        }
    });
};

module.exports = {
    getAllStudents,
    createStudent,
    updateStudent,
    removeStudent
};