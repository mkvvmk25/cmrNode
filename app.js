// app.js
let express = require("express");
// let studentController = require("./controllers/studentController")
let studentRouter = require("./routes/studentRoute");
const { log } = require("node:console");

let app = express();

// /students/all
app.use((req, res, next) => {
  // console.log(2);
  // console.log(Date.now());
  req.startTime = Date.now();
  setTimeout(() => {
    next();
    
  }, 2000);
  


  
});
app.use((req, res, next) => {
  
  setTimeout(() => {
		next();
  }, 2000);
  // next();
  
});
app.use((req, res, next) => {
  setTimeout(() => {
		next();
  }, 2000);

  // next();
  
});
app.use("/student", studentRouter);


module.exports = app;
