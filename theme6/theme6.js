$(document).ready( function() {

	// set up tooltips
	$("[title]").style_my_tooltips();

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

	const page = $("html");

	// Color mode on first load
	const currTheme = localStorage.getItem("theme");
	if ( currTheme == "light" ) {
		page.removeClass("light dark").addClass("light");
	} else if ( currTheme == "dark" ) {
		page.removeClass("light dark").addClass("dark");
	} // else localStorage.theme is not set; use default

	// Color mode button click
	$("#darklight").on("click keypress", function() {
		page.toggleClass("light dark");
		
		var newTheme = "dark";
		if (page.hasClass("light")) {
			newTheme = "light";
		}
		localStorage.setItem("theme", newTheme);
	});

	$("#dropdown").on("click keypress", function() {
        $("#blognav, .tmblr-iframe").toggleClass("active")
    })

	// Remove stray paragraph tags
	$(".bodyitemcontent p:first-child:empty").remove();

});