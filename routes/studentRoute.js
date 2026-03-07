let express = require("express");
let router = express.Router();
let studentController = require("./../controllers/studentController");

router.get("/all", studentController.getStudents);
// router.get("/top10", studentController.getTOP10Students);

module.exports = router;
