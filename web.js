var express = require('express');
var app = express.createServer(express.logger());

var fs = require("fs"); 
var buf = new Buffer(fs.readFileSync('index.html'), 'utf-8');

var app = express.createServer(express.logger());

app.get('/', function(req, res) {
  res.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
