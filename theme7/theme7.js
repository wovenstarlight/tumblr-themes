$(document).ready( function() {

	// set up tooltips
	$("[title]").style_my_tooltips();

	// photoset setup
	npfPhotosets("article", {
		includeCommonPhotosets: true,
		photosetMargins: "2"
	});

	const page = $("html");

	// Color mode on first load
	const currPalette = localStorage.getItem("palette");
	if ( currPalette == "alt" ) {
		page.addClass("alt");
		$("#palette").addClass("alt");
	} // else palette is normal

	// Color mode button click
	$("#palette").on("click keypress", function() {
		$(this).toggleClass("alt");
		page.toggleClass("alt");
		
		var newPalette = "normal";
		if ($(this).hasClass("alt")) {
			newPalette = "alt";
		}
		localStorage.setItem("palette", newPalette);
	});

	$(".dots").on("click keypress", function() {
        $(this).toggleClass("active");
		$(this).next().fadeToggle(150);
    })

	// Remove stray paragraph tags
	$(".bodyitemcontent p:first-child:empty").remove();

});