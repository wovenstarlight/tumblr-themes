$(document).ready( function() {

	// audio post setup
	customAudio();

	// photoset setup
	npfPhotosets("article", {
		includeCommonPhotosets: true,
		photosetMargins:""
	});

	const body = $("body");

	// Color mode on first load
	const currTheme = localStorage.getItem("theme");
	if ( currTheme == "light" ) {
		body.addClass("light");
	}
	// Color mode button click
	$("#darklight").click( function() {
		body.toggleClass("light");
		
		var newTheme = "dark";
		if (body.hasClass("light")) {
			newTheme = "light";
		}
		localStorage.setItem("theme", newTheme);
	});

	// Tumblr settings display button
	$("#tmblriframe").click( function() {
		$(this).toggleClass("active");
		$(".tmblr-iframe").toggleClass("active")
	});

	// Remove stray paragraph tags
	$(".bodyitemcontent p:first-child:empty").remove();

});