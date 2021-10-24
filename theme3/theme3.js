$(document).ready( function() {

	// Persistent color mode toggle
	const body = $("body"); // This will also be useful in responsiveness setup
			
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

	// Date display on top left
	var d = new Date();
	var month = d.getMonth();
	var date = d.getDate();
	var day = d.getDay();
	var year = d.getFullYear();
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	$("#currdate").html(days[day]+" "+months[month]+" "+date+", "+year);

	// On permalink pages, link to day page instead of displaying current date on top left
	if ($(".currdate").length) { // class=currdate exists; only true on permalink pages
		$("#currdate").html("");
		$("#currdate").append($(".currdate a"));
	}

});