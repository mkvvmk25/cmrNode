// server.js
let app = require("./app.js");

let port = 3004;
app.listen(port, "localhost", (err) => {
	if (err) {
		console.log(err.message);
	} else console.log("running on port " + port);
});
