var mongoose = require('mongoose');

var bucketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'What\'s on the list!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Bucket = mongoose.model('Bucket', bucketSchema);

module.exports = Bucket;

// name
// complete
// created