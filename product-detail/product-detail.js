function ChangeImage(event) {
	console.log("Entrei");
	const nextPreviewStyle = getComputedStyle(event.target);
	let currentPreviewStyle = getComputedStyle(document.getElementById('previewer'));
	document.getElementById('previewer').style.backgroundImage = nextPreviewStyle.backgroundImage;
	// currentPreviewStyle.backgroundImage = nextPreviewStyle.backgroundImage
}
