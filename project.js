

let b = document.querySelector('#answer');
b.addEventListener('click', greeting);
b.addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest() {
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/g1-0300-j.json';
	let url2= 'https://www.nishita-lab.org/web-contents/jsons/nhk/g1-0700-j.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}




function greeting() {
	let a = document.querySelector('input[name="TV1"]');
	let TV1 = a.value;
	console.log('検索結果は'+TV1+'です！！');
	let cs = document.querySelectorAll('input[name="TV2"]');
    for (let c of cs) {
        if (c.checked) {
            console.log(c.value);
        }
    }
}