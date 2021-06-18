const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Codem.1jan',
    database: 'BlogDB'
});

module.exports = db;