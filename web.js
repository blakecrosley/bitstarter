var express = require('express');

var sys=require("sys"), fs=require("fs");
var content=fs.readFileSync("index.html", "utf8");
sys.puts(JSON.parse(content));

buffer.toString('utf8')

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
