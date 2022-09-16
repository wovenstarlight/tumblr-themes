$(document).ready( function() {

	const page = $("html");

	// Color mode on first load
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

	// set up tooltips
	$("[title]").style_my_tooltips();

	// audio post setup
	customAudio({
		playButton: "<i class='ph-play'></i>",
		pauseButton: "<i class='ph-pause'></i>",
		errorIcon: "<i class='ph-x'></i>",
		callAfterLoad: null
	});

	// photoset setup
	npfPhotosets("article", {
		includeCommonPhotosets: true,
		photosetMargins: "2"
	});

	// Remove stray paragraph tags
	$(".bodyitemcontent p:first-child:empty").remove();

});