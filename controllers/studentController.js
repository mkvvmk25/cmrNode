let pool = require("./../db.js");
let getStudents = async (req, res) => {
	let k = req.query.val;

	console.log(k);
	let ans = await pool.query(`show ${k}`);
	ans = ans[0];
	// console.log(req);

	// "show "databases""

	res.status(200).json({
		status: "success",
		data: ans,
		param: req.query,
	});
};
// a1b2c3e1@123
// abbccce@123

let addNewStudent = (req, res) => {
	console.log(req.body);
	
	res.status(201);
	res.json({
		status: "success",
		data: "student has signed up",
	});
};

let getTOP10Students = (req, res) => {
	res.end("hi");
};
let getLAST5 = (req, res) => {
	res.end("hi");
};

module.exports = { getStudents, getTOP10Students, getLAST5, addNewStudent };
