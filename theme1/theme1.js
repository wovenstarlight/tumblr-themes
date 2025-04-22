$(document).ready( function() {
	const body = $("body");

	// Color theme
	const currTheme = localStorage.getItem("theme");

	if ( currTheme == "light" ) {
		body.addClass("light");
		body.removeClass("dark");
	}

	$("#darklight").click( function() {
		body.toggleClass("dark light");

		var newTheme = "dark";
		if (body.hasClass("light")) {
			newTheme = "light";
		}
		localStorage.setItem("theme", newTheme);
	});

	// Expand sidebar on mobile
	$("#servers .more").click( function() {
		$(this).toggleClass("active");
		$("#sidebar").toggleClass("active");
	});

	// Show Tumblr controls on click
	$("#tmblr-controls-toggle").click(function(){
		body.toggleClass("controls-click");
	});

	// Photoset setup
	npfPhotosets(".post", {
		includeCommonPhotosets: true,
		photosetMargins: "2"
	});

	// Tooltips
	tippy("#servers a[data-tippy-content]", {
		placement: "right",
		offset: [0, 20],
		theme: "default big"
	});

	tippy("header .icons [data-tippy-content]", {
		placement: "bottom",
		theme: "default"
	});

	tippy("#navigate [data-tippy-content]", {
		placement: "top",
		theme: "default"
	});

	tippy(".timestamp [data-tippy-content], .actions [data-tippy-content]", { theme: "default" });
});