var http = require('http');

var handleReguest = function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Witaj bogdan\n");
};

var server = http.createServer(handleReguest);
const port = process.env.PORT || 3000;

server.listen(port, 'localhost');