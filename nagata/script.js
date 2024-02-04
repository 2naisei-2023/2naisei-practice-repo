// script.js
document.addEventListener('DOMContentLoaded', function () {
    // フォームの送信イベントを拾って画面遷移を実行
    document.getElementById('SubmitBtn').addEventListener('click', function (event) {
        // 選択されたラジオボタンの値を取得
        var selectedItem = document.querySelector('input[name="Item"]:checked');
        if (selectedItem && selectedItem.value === 'Item-1') {
            // Item-1が選択されたらindex.htmlに画面遷移
            window.location.href = 'end.html';
        } else {
            // ラジオボタンが選択されていないか、Item-1以外が選択された場合の処理
            alert('自動車を選択してください。');
        }

        // キー番号の入力値を取得
        var keyNumber = document.getElementById('FirstName').value;

        // 半角英数以外の文字が含まれているかチェック
        if (!/^[a-zA-Z0-9]+$/.test(keyNumber)) {
            alert('キー番号には半角英数のみを入力してください。');
            event.preventDefault(); // デフォルトのフォーム送信を防ぐ
        }
    });
});
