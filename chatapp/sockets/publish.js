'use strict';

module.exports = function (socket, io) {

    socket.on('sendMessageEvent', function (message,userName) {
      if (!message) {
        return;
      }


 console.log('ユーザの入力値:' +message,userName);
  io.sockets.emit('receiveMessageEvent',message,userName);
    });
};
