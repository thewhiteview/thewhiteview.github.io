function loadExternalHtml(name) {
	fetch('/' + name + '.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById(name).innerHTML = data;
		});
}

window.onload = function () {
	loadExternalHtml('navbar');
	loadExternalHtml('footer');
};
