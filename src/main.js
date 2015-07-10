'use strict';

module.exports = function (io) {
    var Main = {};

    Main.connection = function (socket) {
        console.log('connection: ' + socket.id);
    };

    Main.name = function (socket, data) {
        console.log('name [' + socket.id + ']: ' + data);

        socket.user_name = data;
    };

    /* */
    return Main;
}