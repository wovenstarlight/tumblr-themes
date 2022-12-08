function cleanNotes(num) {
	if (num.length > 6) { return num.substring(0, num.length - 6) + "M" }
	else if (num.length > 3) { return num.substring(0, num.length - 3) + "K" }
	else { return num }
}

function tumblrNotesInserted() {
	// set up tooltips for notes on permalink pages
	$(".note [title]").style_my_tooltips();
}

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

	// Sidebar mobile toggle
	$("#sidebar, #back").on("click keypress", function() {
		$("#sidebar").toggleClass("active");
		$("#body").toggleClass("showright");
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

	// set up tooltips
	$("[title]").style_my_tooltips();
	$("#postnotes .note").addClass("smted");

	// Remove stray paragraph tags
	$(".bodyitemcontent p:first-child:empty").remove();

	// Fix heading levels structure
	$(".bodyitemcontent h2:not(.ptitle)").each( function() {
		$(this).replaceWith("<h4>" + $(this).html() + "</h4>");
	});
	$(".bodyitemcontent h1").each( function() {
		$(this).replaceWith("<h3>" + $(this).html() + "</h3>");
	});

});