var express = require('express');
var router = express.Router();
var db =  require('../models');
var helpers = require("../helpers/buckets");

router.route('/')
    .get(helpers.getBuckets)
    .post(helpers.createBucket)
    
router.route('/:bucketId')
    .get(helpers.getBucket)
    .put(helpers.updateBucket)
    .delete(helpers.deleteBucket)

module.exports = router;