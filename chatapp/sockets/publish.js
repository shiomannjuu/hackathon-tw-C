'use strict';

module.exports = function (socket, io) {

    socket.on('sendMessageEvent', function (data) {
      if (!data) {
        return;
      }

 console.log('ユーザの入力値:' +data);
  io.sockets.emit('receiveMessageEvent',data);

    
    });
};
