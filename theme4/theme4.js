$(document).ready( function() {

	$("#top").click( function() {
		$('html, body').animate({
			scrollTop: 0
		}, 300);
	});

	const body = $("body");
			
	const currTheme = localStorage.getItem("theme");

	if ( currTheme == "light" ) {
		body.addClass("light");
	}

	$("#darklight").click( function() {
		body.toggleClass("light");
		
		var newTheme = "dark";
		if (body.hasClass("light")) {
			newTheme = "light";
		}
		localStorage.setItem("theme", newTheme);
	});
	
});