// app.js
let express = require("express");
// let studentController = require("./controllers/studentController")
let studentRouter = require("./routes/studentRoute");

// 1XX
// 2XX
// 3XX
// 4XX
// 5XX

let app = express();

app.use("/student", studentRouter);
// app.use("/faculty", studentRouter);

// app.get("/student/all",studentController.getStudents);
// app.get("/student/top10", studentController.getLAST5);
// app.get("/students/last5", studentController.getTOP10Students);
// app.get("/fac/all",studentController.getStudents);
// app.get("/fac/top10", studentController.getLAST5);
// app.get("/students/last5", studentController.getTOP10Students);
// app.get("/last5", (req, res) => {
//   res.status(200);
// });

module.exports = app;
