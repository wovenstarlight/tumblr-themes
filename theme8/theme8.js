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
	$("#darklight").on("click keypress", function() {
		page.toggleClass("alt");

		var newPalette = "normal";
		if (page.hasClass("alt")) {
			newPalette = "alt";
		}
		localStorage.setItem("palette", newPalette);
	});

	// switch between tabs
	$("#tapes [data-page]").click( function() {
		$("#tapes [data-page]").removeClass("active");
		$(this).addClass("active");
		$("#main > section").fadeOut();
		$("#" + $(this).attr("data-page")).fadeIn();
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