var mongoose = require('mongoose');
mongoose.set('degub', true);
mongoose.connect('mongodb://@ds023510.mlab.com:23510/bucketlist');

mongoose.Promise = Promise;


module.exports.Bucket = require("./bucket");