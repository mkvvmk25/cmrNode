// db.js
const mysql = require("mysql2");

// Create pool
const pool = mysql.createPool({
	host: "localhost", // add host
	user: process.env.DB_USER_NAME,
	password: process.env.DB_USER_PASS,
	database: process.env.DATABASE_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

// Export pool
module.exports = pool.promise();
