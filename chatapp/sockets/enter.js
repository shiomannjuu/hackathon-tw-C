'use strict';

module.exports = function (socket){

    // 入室メッセージをクライアントに送信する
    socket.on('enterEvent', function (data) {
        console.log('クライアントの入力値:'+ data);
        //他ユーザにログイン情報を送信
        socket.broadcast.emit('enterEvent',data + 'さんが入室しました。');
    });
};
