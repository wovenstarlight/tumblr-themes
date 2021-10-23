$(document).ready( function() {

	// Color mode toggle
	$("#darklight").click( function() { body.toggleClass("light"); });

	// Date display on top left
	var d = new Date();
	var month = d.getMonth();
	var date = d.getDate();
	var day = d.getDay();
	var year = d.getFullYear();
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

	$("#currdate").html(days[day]+" "+months[month]+" "+date+", "+year);

});