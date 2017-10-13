var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function(req, res){
	db.Bucket.find()
	.then(function(buckets){
		res.json(buckets);
	})
	.catch(function(err){
		res.send(err);
	})
});


module.exports = router;