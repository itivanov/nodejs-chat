/*
 Node.js + Socket.io = Chat
 Copyright (C) 2015  Ivan Ivanov <itanev@gmail.com>

 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along
 with this program; if not, write to the Free Software Foundation, Inc.,
 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

'use strict';

var compression = require('compression');
var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var main = require('./src/main')(io);

var port = 3000;

http.listen(port, function () {
    console.log('Server listening on *:3000');
});

app.use(compression());
app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
    try {
        main.connection(socket);

        socket.on('name', function (data) {
            main.name(socket, data);
        });

    } catch (e) {
        console.log('Exception : ' + e.message);
        console.log(e.stack);
    }

});