var http = require('http');
var fs = require('fs');
//var dt = require('./main-mobile.js');

http.createServer(function (req, res) {
    fs.readFile('./../simulador/simulador-mobile.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
}).listen(8080);