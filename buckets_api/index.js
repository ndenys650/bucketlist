var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
    
var bucketRoutes = require('./routes/buckets')
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send("Hi from root route!");
});

app.use('/api/buckets', bucketRoutes);

app.listen(port, function(){
    console.log("GOGOGGOGGOGOGO");
});