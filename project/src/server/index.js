var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = require("./routers"); 

app.use(bodyParser.urlencoded({
	extended: true
}));


app.use("/", router);


app.listen(3000, function() {
	console.log("服务器已开启...");
})
