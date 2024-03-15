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
    document.getElementById('shokenbanngou1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    //this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
    });
});

// カーソルが合わせられたときにチェックが実行されないように修正
document.getElementById('shokenbanngou34').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    //this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});
// カーソルが合わせられたときにチェックが実行されないように修正
document.getElementById('shokenbanngou56').addEventListener('focus', function () {
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


document.getElementById('keiyakusha1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('keiyakusha2').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('keiyakusha3').addEventListener('focus', function () {
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
        
        
        if (inputValue.length > 0) {
            var firstChar = inputValue.charAt(0).toLowerCase();

            if (firstChar === 'a') {
                targetUrl = 'input.html';
            } else if (firstChar === 'b') {
                targetUrl = 'choinput.html';
            }
        }


        // 遷移先URLが設定されている場合に遷移
        if (targetUrl) {
            window.location.href = targetUrl;
        } else {
            console.log("処理を実行");
            }
            }
 }
 
function validateForm() {
    // 1行目の各要素を取得
    var shokenbanngou1 = document.getElementById("shokenbanngou1");
    var meisai12 = document.getElementById("meisai12");
    var eigyou1 = document.getElementById("eigyou1");
    var dairi1 = document.getElementById("dairi1");
    var kihon1 = document.getElementById("kihon1");

    // 必須項目が空であるかをチェック
    if (shokenbanngou1.value.trim() === '' || meisai12.value.trim() === '' || eigyou1.value.trim() === '' || dairi1.value.trim() === '' || kihon1.value.trim() === '') {
        highlightEmptyFields(shokenbanngou1, meisai12, eigyou1, dairi1, kihon1);
        alert("必須項目が未入力です。");
        return false; // フォームの送信を防止
    }
    return true; // フォーム送信を許可
}

// 未入力項目を赤くハイライトする関数
function highlightEmptyFields(shokenbanngou1, meisai12, eigyou1, dairi1, kihon1) {
    // 各要素の未入力チェックを行い、未入力の場合は赤くハイライト
    if (shokenbanngou1.value.trim() === '') {
        shokenbanngou1.classList.add('highlight');
    } else {
        shokenbanngou1.classList.remove('highlight');
    }

    if (meisai12.value.trim() === '') {
        meisai12.classList.add('highlight');
    } else {
        meisai12.classList.remove('highlight');
    }

    if (eigyou1.value.trim() === '') {
        eigyou1.classList.add('highlight');
    } else {
        eigyou1.classList.remove('highlight');
    }

    if (dairi1.value.trim() === '') {
        dairi1.classList.add('highlight');
    } else {
        dairi1.classList.remove('highlight');
    }

    if (kihon1.value.trim() === '') {
        kihon1.classList.add('highlight');
    } else {
        kihon1.classList.remove('highlight');
    }
}


