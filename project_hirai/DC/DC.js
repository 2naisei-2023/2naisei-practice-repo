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