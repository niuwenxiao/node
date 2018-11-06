#!/usr/bin/node

var http = require('http'),
    log = console.log;

http.createServer(function(req,res){
  if(req.url === '/' && res.method==='POST'){
    log('$(req.method) $(req.url) HTTP/$(req.httpVersion)');
    log(req.headers);
    log('');
    req.pipe(process.stdout);
  }
  else{
    res.statusCode = 404;
    res.end('Error!')
  }

}).listen(8080);
