var http = require("http");
var fs = require('fs');
var port = 3000;
var file = 'urllist.txt';


function getRandomURL(filename) {
	var data = fs.readFileSync(filename, 'utf8');
	var str = data.toString();
	var lines = str.split('\n');
	return lines[Math.floor(Math.random() * lines.length)];
}


http.createServer(function (request, response) {
	var text = 'https://' + getRandomURL(file);
	var url = encodeURI(text.trim());
	response.writeHead(302, {'location':url});
	console.log(url);
	response.end();
}).listen(port);

console.log(`Listening on port ${port}...`);
