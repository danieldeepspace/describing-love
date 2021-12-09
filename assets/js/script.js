const getConnected = document.getElementById('get-connected');
const formWrapper = document.getElementById('form-wrapper');
if (getConnected) {
	getConnected.addEventListener('click', (e) => {
		getConnected.classList.add('hidden');
		const iframe = document.createElement('iframe');

		//iframe.src = 'http://oh.lvh.me:3000/cn?utm_countrycode=CN';
		iframe.src = 'https://oh.connect-grow.com/cn?utm_countrycode=CN';
		formWrapper.appendChild(iframe);
	});
}
