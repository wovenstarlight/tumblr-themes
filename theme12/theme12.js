$(document).ready( function() {

	// #region Color mode on first load
	const page = $("html");

	const currPalette = localStorage.getItem("palette");
	if ( currPalette == "alt" ) {
		page.addClass("alt");
	} else if ( currPalette == "normal") {
		page.removeClass("alt");
	} // else palette is unset; use default

	// Color mode button click
	$("#palette").on("click keypress", function() {
		page.toggleClass("alt");
		
		var newPalette = "normal";
		if (page.hasClass("alt")) {
			newPalette = "alt";
		}
		localStorage.setItem("palette", newPalette);
	});
	// #endregion

	// #region Audio post setup
	customAudio({
		playButton: "<i class='ph-play'></i>",
		pauseButton: "<i class='ph-pause'></i>",
		errorIcon: "<i class='ph-x'></i>",
		callAfterLoad: null
	});
	// #endregion

	// #region Photoset setup
	npfPhotosets("article", {
		includeCommonPhotosets: true,
		photosetMargins: "2"
	});
	// #endregion

	// #region TODO: CHOOSE TOOLTIPS AND ICON SET
	// Set up tooltips
	$("[title]").style_my_tooltips();
	// Set up tooltips
	tippy("[data-tippy-content]", {
		theme: 'standard'
	});

	// Set up all SVG icons on initial load
	feather.replace();
	// #endregion

	// Remove stray paragraph tags
	$(".bodyitemcontent p:first-child:empty").remove();

});