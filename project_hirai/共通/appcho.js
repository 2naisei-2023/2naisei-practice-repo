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
    document.getElementById('cho_shouken12').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    //this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
   // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('cho_shouken34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    //this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('cho_shouken56').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    //this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('cho_meisai12').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
   // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('cho_meisai34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('cho_meisai56').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
     // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('cho_hoshou12').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
   // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('cho_hoshou34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('cho_hoshou56').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('cho_shumoku12').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
   // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('cho_shumoku34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('cho_shumoku56').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    
   document.getElementById('cho_eigyou1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });

    document.getElementById('cho_eigyou2').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    document.getElementById('cho_eigyou3').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    document.getElementById('cho_eigyou4').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    document.getElementById('cho_eigyou5').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
   
   document.getElementById('cho_eigyou6').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    document.getElementById('cho_dairi1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });

    document.getElementById('cho_dairi2').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    document.getElementById('cho_dairi3').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });

    document.getElementById('cho_dairi4').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    document.getElementById('cho_dairi5').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });

    document.getElementById('cho_dairi6').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    document.getElementById('cho_keiyaku12').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    document.getElementById('cho_keiyaku34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
    
    document.getElementById('cho_keiyaku56').addEventListener('focus', function () {
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