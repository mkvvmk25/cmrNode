let pool = require("./../db.js");
let bcrypt = require("bcrypt");
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

let login = async (req, res) => {
	let email = req.body.email;
	let pass = req.body.password;

	let [row] = await pool.query("select * from users where email=?", [email]);

	if (row.length == 0) {
		res.status(401).json({
			status: "fail",
			message: "no user found",
		});
		return;
	}

	let user = row[0];

	let isMatch = await bcrypt.compare(pass, user.password);
	if (!isMatch) {
		res.status(401).json({
			status: "fail",
			message: "invalid pass",
		});
		// return;
	}

	res.json({ data: isMatch });
};

let addNewStudent = async (req, res) => {
	console.log(req.body);
	let em = req.body.email;
	let pass = req.body.password;

	let hashpass = await bcrypt.hash(pass, 10);

	let ins = await pool.query(
		`insert into users (email, password) values (?,?)`,
		[em, hashpass],
	);

	console.log(ins);

	res.status(201);
	res.json({
		status: "success",
		data: ins,
	});
};

let getTOP10Students = (req, res) => {
	res.end("hi");
};
let getLAST5 = (req, res) => {
	res.end("hi");
};

module.exports = {
	getStudents,
	getTOP10Students,
	getLAST5,
	addNewStudent,
	login,
};
