document.getElementById('zisin').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});


document.getElementById('zisin1').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});


document.getElementById('hansou').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});


document.getElementById('fami').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('dap').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('home').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

document.getElementById('koshou').addEventListener('focus', function () {
    // 一時的にblurイベントを無効にし、focusが外れる前に再度有効にする
    this.removeEventListener('blur', handleBlur);
    this.addEventListener('blur', handleBlur);
});

function handleBlur() {
    validateInput(this.id, this.value, this.maxLength);
}

function validateInput(inputId, inputValue, expectedLength) {
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
