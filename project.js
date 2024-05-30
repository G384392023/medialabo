

let b = document.querySelector('#answer');
b.addEventListener('click', greeting);

function greeting() {
	let a = document.querySelector('input[name="TV1"]');
	let TV1 = a.value;
	console.log('検索結果は'+TV1+'です！');
let cs = document.querySelectorAll('input[name="youbi"]');
	for (let c of cs) {
        if (c.checked) {
			console.log('曜日は：'+c.value);
        }
    }
}