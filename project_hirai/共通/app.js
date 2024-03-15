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

/*-----------------------------自動車------------------------------------*/
/*英数字と桁数のチェック*/
/*桁数チェック関数*/
document.addEventListener('DOMContentLoaded', function () {
    // カーソルが合わせられたときにチェックが実行されないように修正
    document.getElementById('shouken12').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    //this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
});

// カーソルが合わせられたときにチェックが実行されないように修正
document.getElementById('shouken34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    //this.removeEventListener('blur', handleBlur);
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
 
   function validateRow(rowId) {
            var requiredFields = ["shouken" + rowId, "meisai" + rowId, "eigyou" + rowId + "_1", "eigyou" + rowId + "_2", "dairi" + rowId + "_1", "dairi" + rowId + "_2", "keiyaku" + rowId];
            var hasInput = false;

            // 各行の入力があるかどうかをチェック
            for (var i = 0; i < requiredFields.length; i++) {
                var field = document.getElementById(requiredFields[i]);
                if (field.value.trim() !== "") {
                    hasInput = true;
                    break;
                }
            }

            // 入力がある場合に他の必須項目のチェックを行う
            if (hasInput) {
                var isValid = true;

                for (var i = 0; i < requiredFields.length; i++) {
                    var field = document.getElementById(requiredFields[i]);

                    if (field.value.trim() === "") {
                        // エラー時に赤色の枠を追加
                        field.classList.add("error");
                        isValid = false;
                    } else {
                        // エラー解消時に赤色の枠を削除
                        field.classList.remove("error");
                    }
                }

                return isValid;
            }

            // 入力がない場合は常に true を返す
            return true;
        }

        function validateForm() {
            var isValid = true;
            var numRows = 3;

            for (var row = 1; row <= numRows; row++) {
                if (!validateRow(row)) {
                    isValid = false;
                }
            }

            return isValid;
        }


