function validateSelection() {
    // ラジオボタンの要素を取得
    var radioButton1 = document.getElementById("car");
    var radioButton2 = document.getElementById("cho");
    
    // どちらのラジオボタンも選択されていない場合にアラートを表示
    if (!radioButton1.checked && !radioButton2.checked) {
        alert("種目を選択してください。");
        return false; // 送信をキャンセル
    }
    return true; // 送信を許可
}

/*１０文字で入力しているか｀*/
function checkInputLength(inputText) {
    if (inputText.length != 10) {
        alert("10字で入力してください");
    } else{
        return;
    }
}

// 使用例
var userInput = "abcdefghij";
checkInputLength(userInput);

/*5文字で入力しているか｀*/
function checkInputLength5(inputText) {
    if (inputText.length !== 5) {
        alert("5字で入力してください");
    } else {
        return;
    }
}

// 使用例
var userInput = "abcdefghij";
checkInputLength(userInput);

/*4文字で入力しているか｀*/
function checkInputLength(inputText) {
    if (inputText.length != 4) {
        alert("10字で入力してください");
    } else{
        return;
    }
}

// 使用例
var userInput = "abcd";
checkInputLength(userInput);


/*半角数字で入力されているか確認｀*/
function isHalfWidthNumeric(inputString) {
    // 半角数字の正規表現を使用してチェック
    return /^[0-9]+$/.test(inputString);
}

document.addEventListener('DOMContentLoaded', function () {
    var inputElement = document.getElementById('YourInputElementId'); // 入力フィールドのIDに適切な値を設定

    inputElement.addEventListener('input', function () {
        var inputValue = inputElement.value;

        if (!isHalfWidthNumeric(inputValue)) {
            alert('半角数字で入力してください');
            // または、エラーメッセージを表示する他の方法を選択
            // 例: エラーメッセージを表示するための特定の要素にメッセージを設定する
        }
    });
});

/*1~99999999以外の数字が入力されているケース*/
document.addEventListener('DOMContentLoaded', function () {
    var inputElement = document.getElementById('YourInputElementId'); // 入力フィールドのIDに適切な値を設定

    inputElement.addEventListener('input', function () {
        var inputValue = parseInt(inputElement.value, 10); // 入力値を整数に変換

        if (isNaN(inputValue) || inputValue < 1 || inputValue > 9999999999) {
            alert('入力内容が間違っています。1から9999999999の範囲で入力してください。');
            // または、エラーメッセージを表示する他の方法を選択
            // 例: エラーメッセージを表示するための特定の要素にメッセージを設定する
        }
    });
});

/*必須項目が入力されているかの確認*/
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('yourFormId'); // フォームのIDに適切な値を設定

    form.addEventListener('submit', function (event) {
        // 必須項目の要素を取得
        var requiredInputs = form.querySelectorAll('.required');

        // フォーム送信前に必須項目が空でないかチェック
        for (var i = 0; i < requiredInputs.length; i++) {
            var input = requiredInputs[i];

            if (input.value.trim() === '') {
                alert('必須項目が入力されていません。');
                event.preventDefault(); // フォームの送信を中止
                return;
            }
        }
    });
});