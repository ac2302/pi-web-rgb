require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

fs = require("fs");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`server live on port ${port}`);
});

app.post("/change-color", (req, res) => {
	console.log(req.body.color);
	writeToColor(req.body.color);
	res.redirect("/");
});

function writeToColor(color) {
	fs.writeFile(__dirname + "/color", color + "\n", (err, fd) => {});
}
