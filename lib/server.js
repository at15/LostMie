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
var server = http.createServer(app);
// socket.io server
var io = require('socket.io').listen(server);

// socket.io logic
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

// express route
app.use(morgan('tiny'));
// static files are served first.
app.use(express.static(path.join(path.dirname(__filename), '../public')));
// trigger alert
app.get('/alert/new', function (req, res) {
    io.emit('alert', {name: 'test'});
    res.json({ok: 1});
});

var mie = {};
mie.start = function () {
    var port = 3000;
    server.listen(port, function () {
        console.log('server listen on port ' + port);
    });
};

module.exports = mie;