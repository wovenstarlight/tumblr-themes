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
	$("#palette").on("click keypress", function() {
		page.toggleClass("alt");

		var newPalette = "normal";
		if (page.hasClass("alt")) {
			newPalette = "alt";
		}
		localStorage.setItem("palette", newPalette);
	});

	// About section show/hide toggle
	$("#toggle").on("click keypress", function() {
		$("aside").toggleClass("collapsed");
	});

	// Nesting ask links correctly
	$(".ask").each(function() {
		asker = $(this).find(".asker");
		if ( asker.length ) {
			$(this).find("i").remove();
			asker.unwrap().unwrap()
				.toggleClass("asker user")
				.wrapInner("<span class='username'></span>");
		asker.children(".username").prepend('<i class="ph-envelope-open"></i>');
		}
	});

	// Displaying links on "Submitted by" labels
	$(".submitted").each(function() {
		if ( $(this).attr("data-url").length ) {
			let label = $(this).html().split(" "),
				url = $(this).attr("data-url");
			label[label.length - 1] = "<a href=\'"+url+"\'>"+label[label.length - 1]+"</a>";
			$(this).html(label.join(" "));
		}
	});

	// Tooltip setup
	$("[title]").style_my_tooltips();

	// Audio post setup
	customAudio({
		playButton: "<i class='ph-play'></i>",
		pauseButton: "<i class='ph-pause'></i>",
		errorIcon: "<i class='ph-x'></i>",
		callAfterLoad: null
	});

	// Photoset setup
	npfPhotosets("article", {
		includeCommonPhotosets: true,
		photosetMargins: "2"
	});

	// Remove stray paragraph tags
	$(".bodyitemcontent p:first-child:empty").remove();

});