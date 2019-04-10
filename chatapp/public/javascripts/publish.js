'use strict';


// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    socket.emit('sendMessageEvent',message,userName);
    // 投稿内容を送信
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する

socket.on('receiveMessageEvent', function (message,userName) {

    $('#thread').prepend('<p>' + userName + 'さん:' + message + '</p>');

});
