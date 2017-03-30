var http = require("http");
var cool = require("cool-ascii-faces");
var port = 8080;

var server = http.createServer(function(request, response){
	console.log(request.url);
	switch(request.url) {
		case "/":
			response.end("Main page");
			break;
		case "/about":
			response.end("about page");
			break;
		case "/contact":
			response.end("See contact");
			break;
		case "/cool":
			response.end(cool());
			break;
		default:
			response.end("Page 404 - Not Found :(")
	}
	response.end("hello from nodeJS server");
});

server.listen(port, function(){
	console.log("server is listening port: " +port)
});