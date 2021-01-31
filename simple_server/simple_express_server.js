var express = require('express');

var server = express();
server.use(express.static(__dirname + '/public'));

server.listen(3001);
console.log("1!!1!!1!!")
