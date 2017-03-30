var http = require("http");
var port = 8080;

var server = http.createServer(function(request, response){
	console.log(request.url);
	response.end("hello from nodeJS server");
});

server.listen(port, function(){
	console.log("server is listening port: " +port)
});