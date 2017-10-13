var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000


var bucketRoutes = require('./routes/buckets')

app.get('/', function(req, res){
	res.send("Hello from the root route!")
})

app.use("/api/buckets", bucketRoutes)


app.listen(port, function(){
	console.log("GOGOGOGOGOGOGO!")
})

// mongo ds023510.mlab.com:23510/bucketlist