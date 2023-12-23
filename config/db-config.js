const mySql = require('mysql2');

db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ICET@1234',
    database: 'institute_crm'
});

module.exports = db;