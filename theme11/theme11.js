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

	// #region Sidebar
	// Mobile toggle
	$("#sidebar, #back").on("click keypress", function() {
		$("#sidebar").toggleClass("active");
		$("#body").toggleClass("showright");
	});

	// Rules/FAQ dropdown sections
	$(".dropper li").each(function() {
		var parts = $(this).html().split("[more]");
		parts.forEach((e, i, a) => {a[i] = e.trim()});
		console.log(parts);
		var newrule = "<span class=\"label\">" + parts[0] + "</span>";
		if (parts[1]) {
			newrule += "<span class=\"more\">" + parts[1] + "</span>";
			$(this).addClass("hasmore");
		}
		$(this).html(newrule);
	});
	$(".dropper li.hasmore .label").on("click keypress", function() {
		$(this).parent().toggleClass("show");
	});
	// #endregion

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

});