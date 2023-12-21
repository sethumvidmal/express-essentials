const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send({
            'msg': 'user Get api works!'
        })
    })
    .post((req, res) => {
        res.send({
            'msg': 'user Post api works!',
            'data': req.body
        })
    });

module.exports = router;