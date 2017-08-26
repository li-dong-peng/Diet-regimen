var express = require("express");
var router = express.Router();

var url = require("url");
var data = require("./data.js");


router.all("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

router.get("/all", function(req, res) {
	res.json(200, data);
});

router.get("/food", function(req, res) {
	res.json(200, data.data.food);
});
router.get("/car", function(req, res) {
	res.json(200, data.data.rank);
});
router.get("/address", function(req, res) {
	res.json(200, data.data.address);
});
router.get("/itemList", function(req, res) {
	res.json(200, data.data.itemList);
});
//我的数据
router.get("/myAll", function(req, res) {
	res.json(200, data.myData);
});
router.get("/examination", function(req, res) {
	res.json(200, data.myData.examination);
});
router.get("/information", function(req, res) {
	res.json(200, data.myData.information);
	
});
router.get("/home", function(req, res) {
	res.json(200, data.data.home);
});
module.exports = router;
