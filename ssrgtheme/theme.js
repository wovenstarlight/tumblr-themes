// #region TOP NAVIGATION PLACEMENT CALCULATOR
/** The standard page font size, for calculating padding. */
const em = parseFloat(getComputedStyle(document.documentElement).fontSize);
/** The minimal width of the user badge on the left displaying the user's name and title. */
const userBadgeMinimumWidth = Array.from(document.getElementById("userbadge").children)
		.map(el => el.offsetWidth).reduce((a, b) => a + b, 0)	// Width of content
		+ 0.6 * em												// Spacing between icon and text
		+ (1.3 * em * 2);										// Inline padding of userbadge itself
/** The top navigation bar visible by default. */
const topNav = document.getElementById("resourcenav");
/** The links in the top navigation bar. Will always contain at least the "Home" link. */
const topNavChildren = Array.from(topNav.children);
/** The minimal width of the top navigation bar. */
const topMinimumWidth = topNavChildren.map(el => el.offsetWidth).reduce((a, b) => a + b, 0)
		+ (0.6 * (1.2 * em) * (topNavChildren.length - 1))	// Spacing between links
		+ (2.5 * em);											// Inline padding of topnav itself, plus a little extra for breathing room
/** The dropdown navigation's toggle, for assisting in the top nav's placement. */
const dropdownNavToggle = document.getElementById("moreinfo").firstElementChild;
/** The dropdown navigation's contents, for containing the collapsed top nav's children. */
const dropdownNavContents = document.getElementById("moreinfo").lastElementChild;

/** Moves the links in the top nav (home, etc.) to the dropdown if the page size is too small to fit all the links on one line. */
function moveTopNav() {
	let topNavAvailableSpace = dropdownNavToggle.offsetLeft - userBadgeMinimumWidth;

	if (topNavAvailableSpace < topMinimumWidth && topNav.childElementCount !== 0) {
		var topNode = dropdownNavContents.firstElementChild;
		topNavChildren.forEach(el => {
			dropdownNavContents.insertBefore(el, topNode);
		})
		topNav.classList.add("empty");
	} else if (topNavAvailableSpace > topMinimumWidth && topNav.childElementCount === 0) {
		topNav.classList.remove("empty");
		topNavChildren.forEach(el => {
			topNav.append(el);
		})
	}
}

/** Reassess top nav's ideal placement on window resize. */
window.addEventListener("resize", () => { moveTopNav() });
/** Check top nav's ideal placement upon initial page load. */
moveTopNav();
// #endregion