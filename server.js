// server.js
let dotenv = require("dotenv");
dotenv.config();
let app = require("./app.js");

let port = process.env.PORT;
app.listen(port, "localhost", (err) => {
	if (err) {
		console.log(err.message);
	} else console.log("running on port " + port);
});
