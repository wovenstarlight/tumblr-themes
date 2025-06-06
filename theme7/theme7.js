$(document).ready( function() {

	// adding name to original posts
	$(".viasource .BLOGNAME").append($("html").css("--name").replace(/"/g, ""));

	// set up tooltips
	$("[title]").style_my_tooltips();

	// photoset setup
	npfPhotosets("article", {
		includeCommonPhotosets: true,
		photosetMargins: "4"
	});

	// audio post setup
	customAudio({
		playButton: "<svg width='1.5rem' height='1.5rem' viewBox='18 15 13 16' fill='currentColor'><path d='M30.592 23.578L19.52 30.3a1 1 0 0 1-1.52-.854V16a1 1 0 0 1 1.519-.855l11.073 6.723a1 1 0 0 1 0 1.71z'></path></svg>",
		pauseButton: "<svg viewBox='5 3 14 18' width='1.5rem' height='1.5rem' fill='currentColor'><rect width='4' height='16' x='15' y='4' rx='1'></rect><rect width='4' height='16' x='5' y='4' rx='1'></rect></svg>",
		errorIcon: "<svg viewBox='0 0 16 16' width='1.5rem' height='1.5rem' fill='currentColor'><path d='M9.527 8l6.164-6.188a1.066 1.066 0 0 0 0-1.5 1.053 1.053 0 0 0-1.495 0L8 6.531 1.805.311a1.053 1.053 0 0 0-1.495 0 1.064 1.064 0 0 0 0 1.5L6.473 8 .31 14.188a1.064 1.064 0 0 0 0 1.501 1.052 1.052 0 0 0 1.495 0L8 9.47l6.195 6.22a1.052 1.052 0 0 0 1.495 0 1.066 1.066 0 0 0 0-1.5L9.527 8z'></path></svg>",
		callAfterLoad: null
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
	});

	var form = $("#search");
	$("#searcher").on("click keypress", function() {
		form.show();
		$("#searcher").prop("disabled", true);
	});
	$("#close").on("click keypress", function() {
		form.hide();
		$("#searcher").removeProp("disabled");
	});

	$("#showright").on("click keypress", function() {
		$('body, #showright').toggleClass('showright')
	});

	// Remove stray paragraph tags
	$(".bodyitemcontent p:first-child:empty").remove();

});