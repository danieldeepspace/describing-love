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
// Use site url as form submission origin
window.addEventListener('message', (event) => {
	console.log(event.origin);
	// Check the origin of the message for security purposes
	const regex = /^https?:\/\/(oh.connectionofcommunity.com)/i;
	if (!regex.test(event.origin)) {
	  return;
	}
  
	// Process the received message
	if (event.data === 'requestParentURL') {
		console.log('sending origin to Seeker Portal!')
	  // Send the parent URL back to the iframe
	  event.source.postMessage(
		{ type: 'parentURL', url: window.location.href },
		event.origin
	  );
	}
});
