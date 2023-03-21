function ChangeImage(event) {
	const nextPreview = event.target;

	document.getElementById('previewer').setAttribute('background-image', nextPreview.getAttribute('background-image'));
}
