// CHRONO COMIC PAGINATION CORRECTION
// Helpers
function swapPrevNext(previouspage, nextpage) {
	const prevurl = previouspage.attr("href");
	previouspage.attr("href", nextpage.attr("href"));
	nextpage.attr("href", prevurl);
}
function updateLink(oldLink, newHTML, newLink, oldclass, newclass) {
	oldLink.html(newHTML)
		   .attr("href", newLink)
		   .toggleClass(oldclass + " " + newclass);
}
// Main
function chronoCheck(firstHTML, prevHTML, nextHTML, lastHTML, totalpages, firstURL) {
	const url = window.location.href;

	if (url.search(/\/tagged\/.*\/chrono/) > -1) {
		const arr = url.split("/");
		const first = $(".pagination .firstpage");
		const prev = $(".pagination .prevpage");
		const next = $(".pagination .nextpage");
		const last = $(".pagination .lastpage");

		if (prev.length && next.length) {
			swapPrevNext(prev, next);

			if (last.length) { last.attr("href", "/tagged/" + arr[arr.length - 4] + "/chrono/page/" + totalpages); }
		}

		else if (prev.length) {
			// Change to next/latest
			updateLink(first, nextHTML, prev.attr("href"), "firstpage", "nextpage");

			updateLink(prev, lastHTML, "/tagged/" + arr[arr.length - 2] + "/chrono/page/" + totalpages, "prevpage", "lastpage");
		}

		else if (next.length) {
			// Change to first/prev
			updateLink(last, prevHTML, next.attr("href"), "lastpage", "prevpage");

			updateLink(next, firstHTML, firstURL, "nextpage", "firstpage");
		}
	}
};

$(document).ready( function() {

	// set up tooltips
	tippy("[data-tippy-content]", {
		theme: 'standard'
	});

	// audio post setup
	customAudio({
		playButton: "<i class='fas fa-play'></i>",
		pauseButton: "<i class='fas fa-pause'></i>",
		errorIcon: "<i class='fas fa-times'></i>",
		callAfterLoad: null
	});

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
	$("#darklight").on("click keypress", function() {
		body.toggleClass("light");

		var newTheme = "dark";
		if (body.hasClass("light")) {
			newTheme = "light";
		}
		localStorage.setItem("theme", newTheme);
	});

	// Tumblr settings display button
	$("#tmblriframe").on("click keypress", function() {
		$(this).toggleClass("active");
		$(".tmblr-iframe").toggleClass("active")
	});

	// Remove stray paragraph tags
	$(".bodyitemcontent p:first-child:empty").remove();

});