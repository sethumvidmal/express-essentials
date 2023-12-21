const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Request get successfully!',
        firstName: 'John',
        lastName: "Doe",
        age: 25,
        address: '123 Main St',
        city: 'AnyTown',
        state: 'CA',
        zip: '12345'
    });
});


module.exports = router;