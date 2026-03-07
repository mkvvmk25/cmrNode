let getStudents = (req, res) => {
	res.status(200).json({
		status: "success",
		data: "got all students",
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

module.exports = { getStudents, getTOP10Students, getLAST5 };
