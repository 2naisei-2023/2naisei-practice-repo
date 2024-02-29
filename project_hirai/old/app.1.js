<!-- app.js -->
/*開始画面へ遷移｀*/
function pageStartTransition(){
    //遷移先のURL
    var url = 'start.html';
    // ページ遷移
    window.location.href = url;
}


/*入力画面へ遷移｀*/
function pageInputTransition(){
   // 選択されたラジオボタンの値を取得
            var selectedPage = document.querySelector('input[name="sentaku"]:checked');

            // 選択されたラジオボタンの値に基づいて遷移
            window.location.href = selectedPage.value + '.html';
}


/*種目選択しているか｀*/
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

/*入力開始ボタン押下時に種目選択とページ遷移の関数２つを呼び込む*/
function callTwoFunctions() {
            // 2つの関数を呼び出す
            validateSelection();
            pageInputTransition();
        }

/*完了画面へ遷移｀*/
function pageEndTransition(){
    //遷移先のURL
    var url = 'complete.html';
    // ページ遷移
    window.location.href = url;
}

/*中断完了画面へ遷移｀*/
function pageInterruptTransition(){
    //遷移先のURL
    var url = 'interrupt.html';
    // ページ遷移
    window.location.href = url;
}


/*１０文字で入力しているか｀*/
function checkInputLength10(inputText) {
    if (inputText.length != 10) {
        alert("10字で入力してください");
    } else{
        return;
    }
}
    
    /*5文字で入力しているか｀*/
function checkInputLength5(inputText) {
    if (inputText.length != 5) {
        alert("5字で入力してください");
    } else{
        return;
    }
}
        
/*4文字で入力しているか｀*/
function checkInputLength4(inputText) {
    if (inputText.length != 4) {
        alert("4字で入力してください");
    } else{
        return;
    }
}

/*半角数字で入力されているか確認｀*/
function isHalfWidthNumeric(inputString) {
    // 半角数字の正規表現を使用してチェック
    return /^[0-9]+$/.test(inputString);
}

function validateInput(inputId, errorMessageId, expectedLength) {
    var inputField = document.getElementById(inputId).value.trim();
    var errorMessageElement = document.getElementById(errorMessageId);

    // 入力が期待される桁数の数字であるかをチェック
    if (new RegExp(`^\\d{${expectedLength}}$`).test(inputField)) {
        errorMessageElement.textContent = ''; // エラーメッセージをクリア
    } else {
        errorMessageElement.textContent = `${expectedLength}桁の数字を入力してください。`;
    }
}

// カーソルが離れたときに桁数チェックを行う
document.getElementById('inputField1').addEventListener('blur', function () {
    validateInput('inputField1', 'error-message1', 4);
});

document.getElementById('inputField2').addEventListener('blur', function () {
    validateInput('inputField2', 'error-message2', 6);
});

// 各項目に対するblurイベントを追加
