var db =  require('../models');

exports.getBuckets = function(req, res){
    db.Bucket.find()
    .then(function(buckets){
        res.json(buckets);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createBucket = function(req, res){
    db.Bucket.create(req.body)
    .then(function(newBucket){
        res.status(201).json(newBucket);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getBucket = function(req, res){
    db.Bucket.findById(req.params.bucketId)
    .then(function(foundBucket){
        res.json(foundBucket)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateBucket = function(req, res){
    db.Bucket.findOneAndUpdate({_id: req.params.bucketId}, req.body, {new: true})
    .then(function(bucket){
        res.json(bucket)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteBucket = function(req, res){
    db.Bucket.remove({_id: req.params.bucketId})
    .then(function(){
        res.json({message: "deleted!!"})
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;