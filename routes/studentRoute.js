let express = require("express");
let router = express.Router();
let studentController = require("./../controllers/studentController");

router.get("/all", studentController.getStudents);
router.post("/signup", studentController.addNewStudent);
// router.get("/top10", studentController.getTOP10Students);

module.exports = router;

/* 
  TYPES OF FUNS 
  EXPRESS JS 
  MVC ARHCTECTURE 
  IMEDIATLY INVOKED FUNS 
  CONTROLEERS 
  ROUTERS 
  STATUS CODES 
  MIDDLE WARE 
  NODEMON DEV DEP
*/
