'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = $('#userName').val();
    // 退室メッセージイベントを送信する
    socket.emit( 'sendExitEvent', userName );

    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('sendExitEvent', function (userName) {
    $('#thread').prepend('<p>' + userName + 'さんが退室しました。' + '</p>');
});
