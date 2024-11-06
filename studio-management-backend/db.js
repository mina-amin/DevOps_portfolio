const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // replace with your MySQL username
  password: '', // replace with your MySQL password
  database: 'studio_db'
});

module.exports = pool.promise();
