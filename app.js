// app.js
let express = require("express");
// let studentController = require("./controllers/studentController")
let studentRouter = require("./routes/studentRoute");

let app = express();   // 

// /students/all
app.use(
	(req, res, next) => {
	req.startTime = Date.now();
	next();
	}
);

app.use((req, res, next) => {
	next();
});
app.use("/student", studentRouter);
app.use("/faculty", studentRouter);
app.use("/driver", studentRouter);

module.exports = app;
