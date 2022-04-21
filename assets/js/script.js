const getConnected = document.getElementById('get-connected');
const formWrapper = document.getElementById('form-wrapper');
const queryString = window.location.search;
const iframe = document.getElementById('iframe');
const buttonList = document.getElementsByClassName('button')
for (let button of buttonList) {
	button.href = button.href + queryString
}

if (iframe) {
	iframe.src = 'https://oh.connectionofcommunity.com/oh-form/cn/'+queryString;
	// iframe.src = 'http://localhost:3000/oh-form/cn'+queryString;
}
