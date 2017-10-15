var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/bucket-api');

mongoose.Promise = Promise;

module.exports.Bucket = require("./bucket");