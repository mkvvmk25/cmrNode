// db.js
const mysql = require("mysql2");

// Create pool
const pool = mysql.createPool({
	host: "localhost", // add host
	user: "root",
	password: "root",
	database: "stu",
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});




// Export pool
module.exports = pool.promise();
