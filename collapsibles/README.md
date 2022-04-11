# Collapsible sections guide
So you want collapsible sections, or dropdowns, to display some of your content. Here's a guide on how to style your blog pages to add as many collapsible sections as you want!

I'll take you through each step in ways that hopefully even those of you unfamiliar with code will be able to understand.

## Step 1: Understanding how a collapsible section works
Each collapsible section or division (`div`) has two parts:
- the collapsible section's toggle button (`clpbutton`); click to open/close the section
- the collapsible content (`clpcontent`)

Here is a look at the basic structure in HTML:
```
<div class="collapsible">
	<p class="clpbutton">Click to open the collapsible</p>
	<div class="clpcontent">
		<p>Collapsible content goes here. Add any HTML you want!</p>
	</div>
</div>
```
You can place anything you want inside the content section. I recommend placing standard text inside `<p>` tags to ensure a decent amount of spacing around it on either side. This means you'd surround your text with `<p>` and `</p>` tags, like this: `<p>Sample text here!</p>`

To see the collapsibles in action, find the appropriate preview link in the theme table below.

## Step 2: Getting the styling right
Before you create your collapsible sections, you'll want to import the code that makes them look right. To do that, follow these steps:
- Go to https://www.tumblr.com/customize/YOUR_BLOG_NAME_HERE (replaced with your blog's name).
- Scroll to the bottom of the Customize menu and open "Advanced options".
- Under `Custom CSS`, insert your theme's corresponding Collapsibles CSS. You can find the corresponding CSS by locating your theme in the table below and opening the code linked alongside. Copy everything on the page and paste it into the `Custom CSS` box.

No. | Name | Collapsibles CSS file | Preview
--- | ---- | --------------------- | -------
1 | Discord | [theme1.css](https://raw.githubusercontent.com/wovenstarlight/tumblr-themes/main/collapsibles/theme1_collapsibles.css) | [Preview link](https://starlightpreviews.tumblr.com/theme1/collapsibles)
2 | Paint Job | [theme2.css](https://raw.githubusercontent.com/wovenstarlight/tumblr-themes/main/collapsibles/theme2_collapsibles.css) | [Preview link](https://starlightpreviews.tumblr.com/theme2/collapsibles)
3 | Newsprint | [theme3.css](https://raw.githubusercontent.com/wovenstarlight/tumblr-themes/main/collapsibles/theme3_collapsibles.css) | [Preview link](https://starlightpreviews.tumblr.com/theme3/collapsibles)
4 | Sans Comic | [theme4.css](https://raw.githubusercontent.com/wovenstarlight/tumblr-themes/main/collapsibles/theme4_collapsibles.css) | [Preview link](https://starlightpreviews.tumblr.com/theme4/collapsibles)
5 | Jupiter | [theme5.css](https://raw.githubusercontent.com/wovenstarlight/tumblr-themes/main/collapsibles/theme5_collapsibles.css) | [Preview link](https://starlightpreviews.tumblr.com/theme5/collapsibles)
6 | Horizon | [theme6.css](https://raw.githubusercontent.com/wovenstarlight/tumblr-themes/main/collapsibles/theme6_collapsibles.css) | [Preview link](https://starlightpreviews.tumblr.com/theme6/collapsibles)
7 | Unite | [theme7.css](https://raw.githubusercontent.com/wovenstarlight/tumblr-themes/main/collapsibles/theme7_collapsibles.css) | [Preview link](https://starlightpreviews.tumblr.com/theme7/collapsibles)

Once you've copied the CSS as instructed above and saved it, you're ready to start making collapsible sections!

## Step 3: Creating sections in your page
If you don't already have a custom blog page you want to put these sections on:
- Back out of "Advanced options" into the main Customize page.
- Just above "Advanced options", select the option reading `Add a page +`. This will open the page editor on a blank page in Standard Layout mode.

If your target page is already created, click that instead to open the page editor.

Once you're on the page editor, check the page type on the top left to ensure you're on a Standard Layout page or a Custom Layout page. If you're on a Standard Layout page, under the title bar, select the `<html>` option to switch to the HTML editor mode.

Once you're in HTML editor mode, copy the following Collapsibles template into the page:

```HTML
<div class="collapsible">
	<p class="clpbutton">Click to open the collapsible</p>
	<div class="clpcontent">
		<p>Collapsible content goes here. Add any HTML you want!</p>
	</div>
</div>

<script>
// Close all collapsible sections on initial pageload
$(".collapsible .clpcontent").hide();

// Make nested collapsibles have alternating backgrounds
$(".collapsible").each( function() {
	if ($(this).parent(".clpcontent").parent(".collapsible").hasClass("odd")) {
		$(this).addClass("even")
	}
	else { $(this).addClass("odd") }
});

// Click to collapse functionality
$(".collapsible > .clpbutton").click( function() {
	var collapsible = $(this).parent();
	var content = $(this).next();
	if (collapsible.hasClass("active")) { content.slideUp() }
	else { content.slideDown() }
	collapsible.toggleClass("active");
});
</script>
```

Make sure you get everything, including the `<script>` tags! This will make your dropdowns functional. **Ensure that the script tags are below all your collapsible sections, as well. Otherwise they will not load correctly.**

Now you can get started on editing! Add as many collapsibles as you want, and [nest](#nesting-collapsibles) as many as you want (i.e. place one collapsible section inside another collapsible section). Once you're done, make sure to `Update Preview` and check that everything works and looks right, then hit `Save`.

***IMPORTANT NOTE:*** Make sure you don't put a link inside the `clpbutton`! Since this is the text to open/close the dropdown, you don't want to add something clickable that DOESN'T open the dropdown. The text is already link-colored, so you might confuse people, and they won't be able to open the collapsible section.

### Nesting collapsibles
When nesting collapsibles, you should place the inner collapsible `div` inside the `clpcontent` of the outer collapsible `div`. See below for the basic structure of a nested collapsible:
```HTML
<div class="collapsible">
	<p class="clpbutton">Click to open the collapsible</p>
	<div class="clpcontent">
		<p>Collapsible content goes here. This one's got a nested collapsible.</p>
		
		<div class="collapsible">
			<p class="clpbutton">Click to open the collapsible</p>
			<div class="clpcontent">
				<p>This is a nested collapsible! It'll appear inside the main collapsible.</p>
			</div>
		</div>
		
	</div>
</div>
```

Here's another example; this one's a shortened excerpt from the "My S-Ranks" section on the sample page.

```HTML
<div class="collapsible">
	<p class="clpbutton">The S-Ranks That I’ve Raised</p>
	<div class="clpcontent">

		<!-- Nested sections start here! -->

		<div class="collapsible">
			<p class="clpbutton">midnight musings [SERIES]</p>
			<div class="clpcontent">
				
				<!-- This one has another nested layer. -->
				<div class="collapsible">
					<p class="clpbutton">i don't think this is what pillow talk means</p>
					<div class="clpcontent">
						<p>“Yoojin-ah…?”</p>
					</div>
				</div>
				
				<div class="collapsible">
					<p class="clpbutton">midnight musings</p>
					<div class="clpcontent">
						<blockquote>
							<p>There's something about nighttime that makes people weirdly honest.</p>
							<p>Or maybe that's just Yoojin.</p>
						</blockquote>
					</div>
				</div>

			</div>
		</div>

		<div class="collapsible">
			<p class="clpbutton">the glitter of our iron crowns</p>
			<div class="clpcontent">
				<p><a href="https://archiveofourown.org/works/28848645">Read on AO3 →</a></p>
			</div>
		</div>

	</div>
</div>
```

## Completion
And you're done! If you have any trouble or have questions about this, [send me an ask](https://starlightthemes.tumblr.com/ask).

## Using collapsibles in the description/other parts of the blog
Unfortunately, adding collapsible sections to non-custom pages is not possible. I will not answer requests to add functionality for collapsibles in descriptions or the same, though you are welcome to try and implement it yourself.
