const express = require('express');
const router = express.Router();
const studentController = require('../controllers/StudentController');

router.use('/student', studentController);

module.exports = router;