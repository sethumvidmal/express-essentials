const express  = require('express');
const router = express.Router();

router.route('/')
.get((req,res)=>{
    res.send({
        'msg':'Get api works!',
        'id':req.id
    })
})
.post((req,res)=>{
    res.send({
        'msg':'Post api works!',
        'data':req.body
    })
});

module.exports = router;