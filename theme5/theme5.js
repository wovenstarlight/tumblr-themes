$(document).ready( function() {

	// set up tooltips
	tippy("[data-tippy-content]", {
		theme: 'standard'
	});

	// audio post setup
	customAudio({
		playButton: "<i class='cp cp-volume'></i>",
		pauseButton: "<i class='cp cp-mute'></i>",
		errorIcon: "<i class='cp cp-cross'></i>",
		callAfterLoad: null
	});

	// photoset setup
	npfPhotosets("article", {
		includeCommonPhotosets: true,
		photosetMargins:""
	});

	const body = $("body, html");

	// Color mode on first load
	const currTheme = localStorage.getItem("theme");
	if ( currTheme == "light" ) {
		body.addClass("light");
	}
	// Color mode button click
	$("#darklight").on("click keypress", function() {
		body.toggleClass("light");
		
		var newTheme = "dark";
		if (body.hasClass("light")) {
			newTheme = "light";
		}
		localStorage.setItem("theme", newTheme);
	});

	// Remove stray paragraph tags
	$(".bodyitemcontent p:first-child:empty").remove();

});