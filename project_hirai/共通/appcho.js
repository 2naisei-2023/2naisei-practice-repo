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


var isFirstValidation = true; // 最初の呼び出し時のフラグ

function validateRequiredFields() {
    isFirstValidation = true; // フラグをリセット
    
    var requiredFields1 = ["cho_shouken12", "cho_meisai12", "cho_hoshou12", "cho_shumoku12", "cho_eigyou1", "cho_eigyou2", "cho_dairi1", "cho_dairi2", "cho_kihon12"];
    var requiredFields2 = ["cho_shouken34", "cho_meisai34", "cho_hoshou34", "cho_shumoku34", "cho_eigyou3", "cho_eigyou4", "cho_dairi3", "cho_dairi4", "cho_kihon34"];
    var requiredFields3 = ["cho_shouken56", "cho_meisai56", "cho_hoshou56", "cho_shumoku56", "cho_eigyou5", "cho_eigyou6", "cho_dairi5", "cho_dairi6", "cho_kihon56"];
    
    var isFields1Valid = isAnyInputInGroup(requiredFields1);
    var isFields2Valid = isAnyInputInGroup(requiredFields2);
    var isFields3Valid = isAnyInputInGroup(requiredFields3);
    
    // 入力のあるグループのみを考慮し、必須項目が全て埋まっている場合に true を返す
    if ((isFields1Valid && isAllRequiredFieldsFilled(requiredFields1)) ||
        (isFields2Valid && isAllRequiredFieldsFilled(requiredFields2)) ||
        (isFields3Valid && isAllRequiredFieldsFilled(requiredFields3))) {
    return true;
}
    
    // requiredFields1のチェック
    if (isFields1Valid) {
        validateGroup(requiredFields1);
    } else {
        resetGroup(requiredFields1); // 入力がない場合は赤色の枠をリセット
    }
    
    // requiredFields2のチェック
    if (isFields2Valid) {
        validateGroup(requiredFields2);
    } else {
        resetGroup(requiredFields2); // 入力がない場合は赤色の枠をリセット
    }
    
    // requiredFields3のチェック
    if (isFields3Valid) {
        validateGroup(requiredFields3);
    } else {
        resetGroup(requiredFields3); // 入力がない場合は赤色の枠をリセット
    }
    
    return false; // 未入力がある場合は false を返す
}

function isAnyInputInGroup(group) {
    // グループ内のいずれかの入力があるかどうかをチェック
    return group.some(function(fieldId) {
        return document.getElementById(fieldId).value.trim() !== "";
    });
}

function validateGroup(group) {
    group.forEach(function(fieldId) {
        var field = document.getElementById(fieldId);
        if (field.value.trim() === "") {
            // 最初の呼び出し時のみポップアップを表示
            if (isFirstValidation) {
                alert("必須項目が未入力です。");
                isFirstValidation = false; // 最初の呼び出し後はフラグをfalseに設定
            }
            // 未入力の場合は赤色の枠を追加
            field.classList.add("error");
        } else {
            // 入力がある場合は赤色の枠を削除
            field.classList.remove("error");
        }
    });
}

function resetGroup(group) {
    group.forEach(function(fieldId) {
        var field = document.getElementById(fieldId);
        field.classList.remove("error"); // 赤色の枠を削除
    });
}

function isAllRequiredFieldsFilled(group) {
    return group.every(function(fieldId) {
        return document.getElementById(fieldId).value.trim() !== "";
    });
}
