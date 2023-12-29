const express = require('express');
const router = express.Router();
const studentService = require('../service/StudentService');

router.get('/', studentService.getAllStudents);
router.post('/', studentService.createStudent);
router.put('/:id', studentService.updateStudent);
router.delete('/:id', studentService.removeStudent);

module.exports = router;