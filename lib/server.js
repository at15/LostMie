/**
 * Created by gpl on 15/10/17.
 */
var path = require('path');
var fs = require('fs');
var http = require('http');

// express server
var express = require('express');
var morgan = require('morgan');
var app = express();
app.use(morgan('tiny'));
// static files are served first.
app.use(express.static(path.join(path.dirname(__filename), '../public')));

var server = http.createServer(app);

// socket.io server
var io = require('socket.io').listen(server);
io.on('connection', function(socket){
    console.log('a user connected');
});



var mie = {};
mie.start = function () {


    var port = 3000;
    server.listen(port, function () {
        console.log('server listen on port ' + port);
    });
};

module.exports = mie;