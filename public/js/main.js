'use strict';

$(function () {
    var Main = {
        debug: true
    };

    Main.socket = io();

    Main.socket.on('connect', function () {
        Main.log('--> connect');
    });

    Main.socket.on('name', function () {
        var name = 'JohnT';
        Main.log('<-- name: ' + name);
        Main.socket.emit('name', name);
    });

    Main.log = function (str) {
        if (Main.debug) {
            console.log(str);
        }
    };
});
