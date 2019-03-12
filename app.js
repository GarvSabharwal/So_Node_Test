var express = require('express');
var app       = express();
var path = require("path");
var routes    = require("./routes/index");

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, function () {
		console.log('so_node_test is listening on port 3000!')
})

app.use("/",routes); // Set default route to route folder
module.exports = app;

