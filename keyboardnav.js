// J/K post navigation inspired by eggdesign's https://static.tumblr.com/svdghan/uIEropkzb/keyboardscrolling.js
// and from https://yashmahalwal.medium.com/scrollspy-using-intersection-observer-36acb7520e46

/** The height at the top of the screen taken up by other elements; posts being navigated to will be this many px away from the top of the screen.
 * @type number
 */
let offset;

/** Fakes a small scroll, jittering to get the observer to fire and update the current post. */
function fakeScroll() {
	window.scrollBy(0, 2);
	window.scrollBy(0, -2);
}

/** Scrolls the viewport up by <offset>, the height of any headers or other top spacing. */
function scrollByOffset() {
	let diff = document.children[0].getBoundingClientRect().height - (window.scrollY + window.innerHeight)
	if (diff > 1) {  // not at bottom of window; jump back up after scrolling
		window.scrollBy(0, -1 * offset);
		fakeScroll();
	}
}

/** Sets up keyboard navigation for a given page of posts.
 * @param {Object} customOptions The selectors and values with which to set up keyboard navigation.
 * @param {string} [customOptions.postSelector=".post"] CSS selector for the posts themselves.
 * @param {string} [customOptions.postContainerSelector="#posts"] CSS selector for the container of the post elements.
 * @param {number} [customOptions.postOffset=0] Pixel height from the top of the screen that the posts should sit at; generally at least the height of any sticky header elements.
 * @param {function} [customOptions.scrollCallback] Callback function for any scroll actions (J/K post navigation and scroll to top). Called AFTER any scrolling is complete.
 * @param {string} [customOptions.nextPageSelector="#next"] CSS selector for the "next page" link.
 * @param {string} [customOptions.prevPageSelector="#prev"] CSS selector for the "previous page" link.
 * @param {string} [customOptions.searchSelector="#q"] CSS selector for the search input field.
 * @param {function} [customOptions.searchCallback] Callback function for opening/focusing on the search bar. Called BEFORE the search bar is focused on.
 * @param {string} [customOptions.reblogSelector=".customreblog"] CSS selector for the reblog button. This should be inside the post elements defined in postSelector.
 * @param {string} [customOptions.paletteToggleSelector="#palette"] CSS selector for the palette toggle button, if any.
 */
function keyboardNav(customOptions) {
	let options = Object.assign({
		postSelector: ".post",
		postContainerSelector: "#posts",
		postOffset: 0,
		nextPageSelector: "#next",
		prevPageSelector: "#prev",
		searchSelector: "#q",
		reblogSelector: ".customreblog",
		paletteToggleSelector: "#palette",
	}, customOptions);

	const sections = document.querySelectorAll(options.postSelector),
		container = options.postContainerSelector === document ? document : document.querySelector(options.postContainerSelector),
		next = document.querySelector(options.nextPageSelector),
		prev = document.querySelector(options.prevPageSelector),
		search = document.querySelector(options.searchSelector);
	let currPost, oldPost, y;

	offset = options.postOffset === null ? 0 : options.postOffset;

	// attach observers
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries)
				if (entry.isIntersecting) currPost = entry.target;
		},
		{rootMargin: `-${offset}px 0px -${window.innerHeight - offset}px`}  // top of screen
	);
	sections.forEach((e, i) => {
		observer.observe(e);
		e.setAttribute('tabindex', '-1');
	})


	document.addEventListener('keydown', (e) => {
		let key = e.key.toUpperCase();

		// Cancel if the user is typing in a search bar or other textbox
		if (document.activeElement.tagName === 'INPUT') { return }

		// post navigation
		if (key === 'J') {
			if (currPost == null) {
				currPost = sections[0];
				currPost.scrollIntoView();
				scrollByOffset();
				currPost.focus();
			}
			else {
				y = currPost.getBoundingClientRect().y;
				if (y > (offset + 2)) {
					// above post, scroll to its top
					currPost.scrollIntoView();
					scrollByOffset();
					currPost.focus();
				}
				else if (currPost.nextElementSibling != null) {
					// at top of post, scroll to next
					// for some reason this doesn't always update currPost properly so check and manually update as needed
					oldPost = currPost;
					let next = currPost.nextElementSibling;
					while (next && !next.matches(options.postSelector)) next = next.nextElementSibling;

					// Might not have a next post even if it does have a next sibling
					if (!next) return;

					next.scrollIntoView();
					if (currPost == oldPost) currPost = next;
					scrollByOffset();
					currPost.focus();
				}
				else {
					// last post on page; attempt skipping post
					container.scrollIntoView(false);
					// with some extra margin just to be sure!
					window.scrollBy(0, 20);
				}
			}
			if (options.scrollCallback) { options.scrollCallback() }
		}
		else if (key === 'K') {
			if (currPost == null) {
				currPost = sections[0];
				currPost.scrollIntoView();
				scrollByOffset();
			}
			else {
				y = currPost.getBoundingClientRect().y;
				if ((-2 - offset) > y) {
					// partway through post, scroll to its top
					currPost.scrollIntoView();
					scrollByOffset();
				}
				else if (currPost.previousElementSibling != null) {
					// at top of post, scroll to previous
					oldPost = currPost;

					let prev = currPost.previousElementSibling;
					while (prev && !prev.matches(options.postSelector)) prev = prev.previousElementSibling;

					// Might not have a previous post even if it does have a previous sibling
					if (!prev) return;

					prev.scrollIntoView();
					if (currPost == oldPost) currPost = prev;
					scrollByOffset();
				}
			}
			currPost.focus();
			if (options.scrollCallback) { options.scrollCallback() }
		}

		// scroll to top
		else if (key === '.') {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});  // jump to top of header, too
			currPost = sections[0];
			if (options.scrollCallback) { options.scrollCallback() }
		}

		// optional reblog
		else if (options.reblogSelector != null && e.shiftKey && key === 'R')
			currPost.querySelector(options.reblogSelector)?.click();

		// optional search
		else if (search != null && key === '?') {
			if (options.searchCallback) { options.searchCallback() }
			search.focus();
			e.preventDefault(); // Don't type the ? in the input field
		}

		// optional pagination
		else if (next != null && !(document.body.classList.contains('lightboxed') || document.querySelector("dialog[open]")) && e.key === 'ArrowRight')
			next.click();
		else if (prev != null && !(document.body.classList.contains('lightboxed') || document.querySelector("dialog[open]")) && e.key === 'ArrowLeft')
			prev.click();

		// optional palette toggle
		else if (options.paletteToggleSelector != null && e.shiftKey && key === 'P')
			document.querySelector(options.paletteToggleSelector).click();
	})
}