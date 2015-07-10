'use strict';

module.exports = function (io) {
    var Main = {};

    Main.connection = function (socket) {
        console.log('--> connection [%s]', socket.id);

        console.log('<-- name');
        socket.emit('name');
    };

    Main.disconnect = function (socket) {
        console.log('--> disconnect [%s]', socket.id);
    };

    Main.name = function (socket, data) {
        console.log('--> name [%s]: %s', socket.id, data);

        socket.user_name = data;
    };

    /* */
    return Main;
}