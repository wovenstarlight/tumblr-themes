$(document).ready( function() {

	// switch between tabs
	$("#tapes [data-page]").click( function() {
		$("#tapes [data-page]").removeClass("active");
		$(this).addClass("active");
		$("#main section").fadeOut();
		$("#" + $(this).attr("data-page")).fadeIn();
	});

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
		photosetMargins: "2"
	});

	// Remove stray paragraph tags
	$(".bodyitemcontent p:first-child:empty").remove();

});