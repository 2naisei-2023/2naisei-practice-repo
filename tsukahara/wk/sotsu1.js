function searchByKeyNumber() {
    const keyNumber = document.getElementById('keyNumber').value;

    // Lambdaにキー番号を渡して検索を実行する
    fetch('https://yimkqk8xbb.execute-api.ap-northeast-1.amazonaws.com/test1_tsukahara/Lambda', {
        method: 'POST',
        body: JSON.stringify({ "keyNumber": keyNumber }), // リクエストボディにキー番号を含める
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // レスポンスをコンソールに出力
        // レスポンスから受け取った情報に基づいて画面遷移を行う
        if (data.found) {
            window.location.href = 'page2.html'; // 対象が見つかった場合の遷移先
        } else {
            window.location.href = 'page3.html'; // 対象が見つからなかった場合の遷移先
        }
    })
    .catch(error => {
        console.error('There was a problem with the request:', error);
    });
}