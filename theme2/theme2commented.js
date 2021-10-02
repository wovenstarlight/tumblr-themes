/**
 * Commented version of the JS for Theme 2.
 * Original script is present in the file theme2.html.
 */

// Set up all SVG icons on initial load
feather.replace();

/*************************** RESPONSIVENESS SETUP ***************************/
var em = parseInt("{text:Font size}");

// Get basic value for page width
var narrow1width = ( parseInt("{text:Post width}")
					+ $("#bloginfo").width() + 3*em );

// Adjust page width if pagessearch is showing
if ($("body").hasClass("haspages") || $("body").hasClass("hassearch")) {
	narrow1width += ( $("#pagessearch").width() + 3*em );
}

// Updating the positioning of main/pagessearch
var maintop, searchtop;
function updatetops(narrowness) {
	// Remove preexisting positioning (important when moving between narrow1/narrow2)
	$("main, #pagessearch").removeAttr("style");
	
	var bloginfoHeight = $("#bloginfo").height();
	var pagessearchHeight = $("#pagessearch").height();

	maintop = bloginfoHeight;
	
	// If pagessearch is displaying, adjust positioning of both
	if ($("body").hasClass("haspages") || $("body").hasClass("hassearch")) {
		
		if (narrowness === "narrow1") {
			// Position main just under both sidecards
			maintop = Math.max(maintop, pagessearchHeight);
			maintop -= 1.5*em;
		}
		else { //narrowness === narrow2
			// Position pagessearch under bloginfo and adjust main positioning
			searchtop = maintop;
			maintop += pagessearchHeight;
			
			$("#pagessearch").css( "top", "calc(35% + " + searchtop + "px - " + 2*em + "px" )
		}
	}
	// Position main
	$("main").css( "top", "calc(35% + " + maintop + "px" );
}

// Set up actual repositioning calls
var narrow2width = 32*em;
$(window).resize( function() {
		
	var width = $(window).width();
		
	if ( width < narrow2width ) {
		$("body").addClass("narrow1");
		$("body").addClass("narrow2");
		
		updatetops("narrow2");
	}
	else if ( width < narrow1width ) {
		$("body").addClass("narrow1");
		$("body").removeClass("narrow2");
		
		updatetops("narrow1");
	}
	else {
		$("main, #pagessearch").removeAttr("style");
		$("body").removeClass("narrow1");
		$("body").removeClass("narrow2");
	}

});

// Position everything on initial pageload
$(window).resize();

</script>