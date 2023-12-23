// Note : this is a test file:)
const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json({
            msg: 'user Get api works!'
        })
    })
    .post((req, res) => {
        res.json({
            msg: 'user Post api works!',
            data: req.body
        })
    });

module.exports = router;