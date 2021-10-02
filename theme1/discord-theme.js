$(document).ready( function() {
	$("#servers .more").click( function() {
		$(this).toggleClass("active");
		$("#sidebar").toggleClass("active");
	});

	$("#tmblr-controls-toggle").click(function(){
		$("body").toggleClass("controls-click");
	});

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