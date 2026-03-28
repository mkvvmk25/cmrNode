let pool = require("./../db.js");
let getStudents = async (req, res) => {
	let ans = await pool.query("show databases");
	console.log();
	ans = ans[0];
	console.log(req);
	
	
	res.status(200).json({
		status: "success",
		data: ans,
		param:req.query
	});
};

let addNewStudent = (req, res) => {
	res.status(201);
	res.json({
		status: "success",
		data: "got all students",
	});
};

let getTOP10Students = (req, res) => {
	res.end("hi");
};
let getLAST5 = (req, res) => {
	res.end("hi");
};

module.exports = { getStudents, getTOP10Students, getLAST5, addNewStudent };
