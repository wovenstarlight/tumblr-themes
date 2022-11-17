function tumblrNotesInserted() {
	// set up tooltips for notes on permalink pages
	$("[title]").style_my_tooltips();
}

$(document).ready( function() {

	// #region Color mode
	// On first load
	const page = $("html");

	const currPalette = localStorage.getItem("palette");
	if ( currPalette == "alt" ) {
		page.addClass("alt");
	} else if ( currPalette == "normal") {
		page.removeClass("alt");
	} // else palette is unset; use default

	// Button click
	$("#palette").on("click keypress", function() {
		page.toggleClass("alt");
		
		var newPalette = "normal";
		if (page.hasClass("alt")) {
			newPalette = "alt";
		}
		localStorage.setItem("palette", newPalette);
	});
	// #endregion

	// Navigation dropdown on small screens
	$("#shownav").on("click keypress", function() {
		$(this).parent().toggleClass("active");
	});

	// Search toggle
	$("#opensearch, #back").on("click keypress", function() {
		$("body").toggleClass("showsearch");
		if ($("body").hasClass("showsearch")) {
			$("#q").focus();
		}
		if ($("#dropnav").hasClass("active")) {
			$("#dropnav").removeClass("active");
		}
	});
	
	// #region Audio post setup
	customAudio({
		playButton: "Play",
		pauseButton: "Pause",
		errorIcon: "Error",
		callAfterLoad: null
	});
	// #endregion

	// #region Photoset setup
	npfPhotosets("article", {
		includeCommonPhotosets: true,
		photosetMargins: "2"
	});
	// #endregion

	// Set up tooltips
	$("[title]").style_my_tooltips();

	// Remove stray paragraph tags
	$(".bodyitemcontent p:first-child:empty").remove();

	// Fix heading levels structure
	$(".bodyitemcontent h2").each( function() {
		$(this).replaceWith("<h6>" + $(this).html() + "</h6>");
	});
	$(".bodyitemcontent h1").each( function() {
		$(this).replaceWith("<h5>" + $(this).html() + "</h5>");
	});

});