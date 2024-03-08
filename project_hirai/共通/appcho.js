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

        function validateKeyNumber() {
            var keyNumber = document.getElementById("FirstName").value.trim();
            // キー番号が未入力の場合にアラートを表示
            if (keyNumber === "") {
                alert("キー番号を入力してください。");
                return false; // 送信をキャンセル
            }
            return true; // 送信を許可
        }

        function callTwoFunctions() {
            // ラジオボタンの選択とキー番号の入力を確認
            if (validateSelection() || validateKeyNumber()) {
                // ページ遷移処理をここに追加（例: window.location.href = "次のページのURL";）
                 validateSelection();
            　　　pageInputTransition();
            }
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



/*半角英数字で入力されているか確認*/
function isAlphaNumeric(inputString) {
    // 英数字（半角英字と半角数字の組み合わせ）の正規表現を使用してチェック
    return /^[a-zA-Z0-9]+$/.test(inputString);
}


// カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('choshokenbanngou12').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    //this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
   // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('choshokenbanngou34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    //this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('choshokenbanngou56').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    //this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('chomeisai12').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
   // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('chomeisai34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('chomeisai56').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
     // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('hoshou12').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
   // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('hoshou34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('hoshou56').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('shumoku12').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
   // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('shumoku34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('shumoku56').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    
   document.getElementById('choeigyou1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });

    document.getElementById('choeigyou2').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    document.getElementById('choeigyou3').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    document.getElementById('choeigyou4').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    document.getElementById('choeigyou5').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
   
   document.getElementById('choeigyou6').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    document.getElementById('chodairi1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });

    document.getElementById('chodairi2').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    document.getElementById('chodairi3').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });

    document.getElementById('chodairi4').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    document.getElementById('chodairi5').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });

    document.getElementById('chodairi6').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
/*------------------------------------------------------------------------*/

function handleBlur() {
    validateInput(this.id, this.maxLength,);
}

function validateInput(inputId, expectedLength) {
    var inputField = document.getElementById(inputId).value.trim();
    

    // 入力が期待される桁数の英数字であるかをチェック
    if (!isAlphaNumeric(inputField)) {
        alert(`半角英数字で入力してください。`);
    } else if (inputField.length !== expectedLength) {
        alert(`${expectedLength}桁で入力してください。`);
    }
}