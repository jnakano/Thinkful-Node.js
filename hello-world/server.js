var http= require('http');
var server = http.createServer(function(req,res){
	var url = 'http://thinkful.com';
	var body = '<span> Redirecting to <a href="' + url + '">' + url + '</a> </span>';
	res.statusCode = 302;
	var body = "Hello World";
	res.setHeader('Content-Length',body.length);
	res.setHeader('Content-Type','text/plain');
	res.end(body); 

})

server.listen(9000, function(){
	console.log('listening on port 9000');
	
})

