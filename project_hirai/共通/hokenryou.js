

document.getElementById('kihon1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', hokenryouHandleBlur);
    this.addEventListener('blur', hokenryouHandleBlur);
});


document.getElementById('bengo1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', hokenryouHandleBlur);
    this.addEventListener('blur', hokenryouHandleBlur);
});


document.getElementById('hansou1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', hokenryouHandleBlur);
    this.addEventListener('blur', hokenryouHandleBlur);
});


document.getElementById('fami1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', hokenryouHandleBlur);
    this.addEventListener('blur', hokenryouHandleBlur);
});

document.getElementById('dap1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', hokenryouHandleBlur);
    this.addEventListener('blur', hokenryouHandleBlur);
});

document.getElementById('houzin1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', hokenryouHandleBlur);
    this.addEventListener('blur', hokenryouHandleBlur);
});

document.getElementById('bengosi1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', hokenryouHandleBlur);
    this.addEventListener('blur', hokenryouHandleBlur);
});

document.getElementById('phyd1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', hokenryouHandleBlur);
    this.addEventListener('blur', hokenryouHandleBlur);
});

document.getElementById('koshousongai1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', hokenryouHandleBlur);
    this.addEventListener('blur', hokenryouHandleBlur);
});

function updateSelect(changedSelectId, targetSelectId) {
  // 変更されたセレクトボックスの値を取得
  var selectedValue = document.getElementById(changedSelectId).value;

  // もう片方のセレクトボックスに逆の値を設定
  var targetSelect = document.getElementById(targetSelectId);
  targetSelect.value = (selectedValue === 'plus') ? 'minus' : 'plus';
}
//

function hokenryouHandleBlur() {
    validateInput1(this.id, this.value);
}

function validateInput1(inputId, inputValue) {
    // 正規表現で数字のみを検証
    var isNumeric = /^[0-9]+$/.test(inputValue);

    // 数字以外が含まれている場合
    if (!isNumeric) {
        alert('半角数字を入力してください。');
    } else {
        // 数字の範囲を検証
        var numberValue = parseInt(inputValue, 10);
        if (numberValue < 1 || numberValue > 99999999999) {
            alert('1から99999999999の範囲で入力してください。');
        }
    }
}



 // イベントリスナーを追加
        var calculationInputs = document.getElementsByClassName('calculation-input');
        for (var i = 0; i < calculationInputs.length; i++) {
            calculationInputs[i].addEventListener('input', calculateTotal);
        }

        // 合計を計算する関数
        function calculateTotal() {
            var total = 0;

            for (var i = 0; i < calculationInputs.length; i++) {
                var inputValue = calculationInputs[i].value.trim();

                // 空白でない場合、数値に変換して合計に加算
                if (inputValue !== "") {
                    total += parseFloat(inputValue);
                }
            }

            // 結果を表示するフィールドにセット
            document.getElementById('totalResult').value = total;
        }