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

 

/*英数字と桁数のチェック*/
/*桁数チェック関数*/

    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('shouken12').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });


// カーソルが合わせられたときにチェックが実行されないように修正
document.getElementById('shouken34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});
// カーソルが合わせられたときにチェックが実行されないように修正
document.getElementById('shouken56').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    //this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});



document.getElementById('meisai12').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('meisai34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('meisai56').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});


document.getElementById('eigyou1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('eigyou2').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('eigyou3').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});
document.getElementById('eigyou4').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});
document.getElementById('eigyou5').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});
document.getElementById('eigyou6').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});


document.getElementById('dairi1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('dairi2').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('dairi3').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('dairi4').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('dairi5').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('dairi6').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});


document.getElementById('keiyaku12').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('keiyaku34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('keiyaku56').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});


function handleBlur() {
    validateInput1(this.id, this.maxLength,);
}

function validateInput1(inputId, expectedLength) {
    var inputField = document.getElementById(inputId).value.trim();
    

    // 入力が期待される桁数の英数字であるかをチェック
    if (!isAlphaNumeric(inputField)) {
        alert(`半角英数字で入力してください。`);
    } else if (inputField.length !== expectedLength) {
        alert(`${expectedLength}桁で入力してください。`);
    }
}

function clearRadioButtons() {
        // 自動車と超保険のラジオボタンを取得
        var carRadioButton = document.getElementById("car");
        var choRadioButton = document.getElementById("cho");

        // ラジオボタンの選択を解除
        carRadioButton.checked = false;
        choRadioButton.checked = false;
    
    var inputElement = document.getElementById("FirstName"); // inputElementId は実際の入力項目のIDに置き換えてください
    if (inputElement) {
        inputElement.value = "";
    }
    }
    


function updateInputStatus() {
    // ラジオボタンと入力項目の要素を取得
    var carRadioButton = document.getElementById("car");
    var choRadioButton = document.getElementById("cho");
    var inputElement = document.getElementById("FirstName"); // inputElementId は実際の入力項目のIDに置き換えてください

    // ラジオボタンが選択されているか確認
    var isCarSelected = carRadioButton.checked;
    var isChoSelected = choRadioButton.checked;

    // 入力項目が入力されているか確認
    var isInputFilled = inputElement.value.trim() !== "";
    var inputValue = inputElement.value.trim();
    



    // 選択された状態により非活性を設定
    if (isCarSelected) {
        inputElement.disabled = true;
        choRadioButton.disabled = false;
    } else if (isChoSelected) {
        inputElement.disabled = true;
        carRadioButton.disabled = false;
    } else {
        inputElement.disabled = false;
        carRadioButton.disabled = true;
        choRadioButton.disabled = true;
    }
}

function clearSelectionAndInput() {
    // ラジオボタンと入力項目の要素を取得
    var carRadioButton = document.getElementById("car");
    var choRadioButton = document.getElementById("cho");
    var inputElement = document.getElementById("FirstName"); // inputElementId は実際の入力項目のIDに置き換えてください

    // ラジオボタンの選択を解除
    carRadioButton.checked = false;
    choRadioButton.checked = false;

    // 入力項目をクリア
    inputElement.value = "";

    // 非活性を解除
    inputElement.disabled = false;
    carRadioButton.disabled = false;
    choRadioButton.disabled = false;
}

 function validateAndAlert() {
            var carRadioButton = document.getElementById("car");
            var choRadioButton = document.getElementById("cho");
            var inputElement = document.getElementById("FirstName");

            var isCarSelected = carRadioButton.checked;
            var isChoSelected = choRadioButton.checked;
            var isInputFilled = inputElement.value.trim() !== "";
            
            var inputValue = inputElement.value.trim();

            if (!isCarSelected && !isChoSelected && !isInputFilled) {
                alert("新規の場合はラジオボタン、中断再開の場合は中断キーを入力してください");
            } else {
              // ラジオボタンに応じて遷移先URLを設定
        var targetUrl = isCarSelected ? 'input.html' : (isChoSelected ? 'choinput.html' : '');

        // 遷移先URLが設定されている場合に遷移
        if (targetUrl) {
            window.location.href = targetUrl;
        } else {
            console.log("処理を実行");
            }
            }
 }
 
var isFirstValidation = true; // 最初の呼び出し時のフラグ

function validateRequiredFields() {
    isFirstValidation = true; // フラグをリセット
    
    var requiredFields1 = ["shouken12", "meisai12", "eigyou1", "eigyou2", "dairi1", "dairi2", "kihon12"];
    var requiredFields2 = ["shouken34", "meisai34", "eigyou3", "eigyou4", "dairi3", "dairi4", "kihon34"];
    var requiredFields3 = ["shouken56", "meisai56", "eigyou5", "eigyou6", "dairi5", "dairi6", "kihon56"];
    
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







