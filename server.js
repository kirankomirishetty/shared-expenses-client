var express = require('express');

var server = express();
server.use(express.static(__dirname + '/app'));

var port = 10001;

/*server.get('/', function(req, res){
  res.redirect('/index.html');
});*/

server.listen(port, function() {
	console.log('Server listening on port '+ port);
});