var express = require('express');
var app       = express();
var routes    = require("./routes/index");

  
app.listen(3000, function () {
		console.log('so_node_test is listening on port 3000!')
})

app.use("/",routes); // Set default route to route folder
module.exports = app;

