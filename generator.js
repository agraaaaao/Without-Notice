// Universal nav
const nav = `
	<nav class="nav" data-active="0">
		<a href="/" class="nav-desktop-link">Home</a>
		<a href="/" class="nav-desktop-link">Catalogue</a>
		<a href="/" class="nav-logo">
			<svg viewBox="0 0 180.4 37.3" class="logo"><path d="M179.3,28.3c-1.6,3.3-4.2,5-7.2,5c-5.6,0-8-5.6-7.9-10.6c0-0.6,0.1-1.1,0.1-1.6h14.9l0.2-0.4c0.1-0.4,0.1-0.8,0.1-0.8 c0-4.5-2.8-8.4-8.2-8.4c-5.4,0-10.9,3.8-10.9,12.7c0,8.3,4.9,12.5,10,12.5c3.9,0,8-2.6,10.1-7.9L179.3,28.3z M170.6,13.5 c2.1,0,4.1,1.3,4.1,3.8c0,1.5-0.8,1.7-2.9,1.7h-7.4C165.3,15.2,168.2,13.5,170.6,13.5z"/><path d="M148.9,36.7c4.2,0,8.3-2.8,10.3-8l-1.1-0.5c-1.5,3.3-4.3,5.1-7.3,5.1c-5.4,0-7.9-5.5-7.9-10.7c0-4.8,2-9,6.5-9 c3,0,3.8,1.8,4.4,4.1c0.3,1.2,1.4,1.9,2.2,1.9c1.3,0,2.3-1,2.3-2.1c0-1.9-3.1-5.9-8.6-5.9c-6.8,0-10.8,6-10.8,12.5 C139,29.8,142,36.7,148.9,36.7z"/><path d="M126.6,36.2h12.9V35c-4.1-0.2-4.3-1.1-4.3-2.1V12.3l-0.8-0.3c-2.7,1.4-4.2,2-7.9,3.3l0.4,1.1c0.6-0.2,1.3-0.3,1.9-0.3 c1.4,0,2.1,0.5,2.1,2.9v14c0,0.9-0.2,1.9-4.3,2.1V36.2z"/><path d="M118.7,36.7c2.6,0,4.8-2.3,6.3-4.8l-0.9-0.6c-1,1.3-2.2,1.9-3.4,1.9c-1.9,0-3.3-1.4-3.3-4V14.5h3.2c7.6,0,14.5-5.1,14.5-11 c0-2.3-1-3.5-2.6-3.5c-1.6,0-2.7,1.2-2.7,2.7c0,0.9,0.4,1.5,0.7,2c1.9,2.7,0.5,4.9-2.3,6.2c-3.2,1.4-6.8,1.2-10.1,1.2h-0.7V7h-0.6 l-6.9,7l0.3,0.5h3v15.4C113.3,34.3,116,36.7,118.7,36.7z"/><path d="M98.8,11.5c-6.2,0-11.7,5.4-11.7,12.7c0,7.4,5.1,12.5,11.5,12.5c6.4,0,11.2-5,11.2-12.7C109.8,16.4,104.8,11.5,98.8,11.5z M98.8,34.7c-5.7,0-7.2-7-7.2-11.3s1.5-9.8,6.5-9.8c5.7,0,7.2,6.9,7.2,11.2S103.8,34.7,98.8,34.7z"/><path d="M47,14.1c-2.7,0-4.8,2-4.8,4.6c0,2.6,2,4.8,4.8,4.8c2.5,0,4.5-2.1,4.5-4.8S49.5,14.1,47,14.1z M47,21.5 c-1.6,0-2.8-1.2-2.8-2.7c0-1.5,1.2-2.7,2.8-2.7c1.4,0,2.6,1.2,2.6,2.7S48.4,21.5,47,21.5z"/><path d="M29.3,37.3h2.2L41,12.8h-2.1L29.3,37.3z"/><path d="M26.4,14.6c-0.9,0-1.6,0.8-1.6,1.7c0,2.2,3.7,1.6,3.7,7.2c0,6.2-4.8,10.3-8.4,10.3c-1.9,0-3-1.2-3.8-3.6 c3.7-4.6,6-10.1,6-12.6c0-1.5-0.9-2.8-2.2-2.8c-3.3,0-7.2,7.9-7.2,13.9c0,0.7,0.1,1.5,0.2,2.2c-2,1.9-3.6,2.7-5.5,2.7 c-3.1-0.1-4.3-1.9-4.3-4c0-3.9,4.6-7,6.6-8.4c3.4-2.4,4.9-3.7,4.9-5.4c0-1.4-1-1.7-1.6-1.7c-1.1,0-1.7,1.1-1.7,2.7v0.3 C9.3,15,7,14,5.4,14c-2.1,0-4.9,1.6-4.9,3.7c0,1,0.6,1.7,1.5,1.7c0.8,0,1.7-0.5,1.7-1.6v-1.2c0-0.7,0.4-0.9,0.8-0.9 c1.3,0,3.3,1.9,5.4,3.8l-0.1,0.1C3.5,23.6,0,26.6,0,30.8c0,3.8,2.9,6,6,5.9c2.6-0.1,5.3-1.5,7.8-4.1h0.1c0.8,2.6,2.9,4.1,5.5,4.1 c5.7,0,11.2-7.4,11.2-14.4C30.5,17.9,28.2,14.6,26.4,14.6z M15.5,28.4c-0.3-1.1-0.2-2.3-0.2-3c0-2,1-7.8,3.4-7.8c0.9,0,1,0.7,1,1.4 c0,2.2-1.7,6.3-4.1,9.4H15.5z"/><path d="M83.2,36.7h0.6V3.6c0-1,0.2-2,4.3-2.2V0.2h-11v1.2c4.2,0.2,4.4,1.2,4.4,2.2v24.1h-0.1L59.5,0.2h-6.1v1.4 c1.1,0.3,1.8,0.7,3,2.2l1.4,1.7v27.2c0,1-0.3,2-4.4,2.2v1.2h10.9V35c-4.2-0.2-4.3-1.2-4.3-2.2V8.2h0.1L83.2,36.7z"/></svg>
		</a>
		<a href="/" class="nav-desktop-link">About</a>
		<a href="/" class="nav-desktop-link">Licensing</a>

		<button class="nav-mobile-toggle" onclick="toggleNav();"><span class="symbol">menu</span></button>
		<div class="nav-mobile">
			<a href="/">Home</a>
			<a href="/">Catalogue</a>
			<a href="/">About</a>
			<a href="/">Licensing</a>
		</div>
	</nav>
`;

// Automatic site build date/time
const datetime = new Date();
let datetimeHours = datetime.getHours();
let datetimeHoursAMPM = "am";
if (datetimeHours >= 12) {
	datetimeHours = datetimeHours - 12;
	if (datetimeHours == 0) {
		datetimeHours = 12;
	}
	datetimeHoursAMPM = "pm";
}
const buildDatetime = `
	${datetime.getDate()} ${datetime.toLocaleString('default', { month: 'long' })} ${datetime.getFullYear()} at ${datetimeHours}:${datetime.getMinutes()}${datetimeHoursAMPM}
`;

// Universal footer
const footer = `
	<footer class="footer">
		<a href="/" class="footer-logo">
			<svg viewBox="0 0 180.4 37.3"><path d="M179.3,28.3c-1.6,3.3-4.2,5-7.2,5c-5.6,0-8-5.6-7.9-10.6c0-0.6,0.1-1.1,0.1-1.6h14.9l0.2-0.4c0.1-0.4,0.1-0.8,0.1-0.8 c0-4.5-2.8-8.4-8.2-8.4c-5.4,0-10.9,3.8-10.9,12.7c0,8.3,4.9,12.5,10,12.5c3.9,0,8-2.6,10.1-7.9L179.3,28.3z M170.6,13.5 c2.1,0,4.1,1.3,4.1,3.8c0,1.5-0.8,1.7-2.9,1.7h-7.4C165.3,15.2,168.2,13.5,170.6,13.5z"/><path d="M148.9,36.7c4.2,0,8.3-2.8,10.3-8l-1.1-0.5c-1.5,3.3-4.3,5.1-7.3,5.1c-5.4,0-7.9-5.5-7.9-10.7c0-4.8,2-9,6.5-9 c3,0,3.8,1.8,4.4,4.1c0.3,1.2,1.4,1.9,2.2,1.9c1.3,0,2.3-1,2.3-2.1c0-1.9-3.1-5.9-8.6-5.9c-6.8,0-10.8,6-10.8,12.5 C139,29.8,142,36.7,148.9,36.7z"/><path d="M126.6,36.2h12.9V35c-4.1-0.2-4.3-1.1-4.3-2.1V12.3l-0.8-0.3c-2.7,1.4-4.2,2-7.9,3.3l0.4,1.1c0.6-0.2,1.3-0.3,1.9-0.3 c1.4,0,2.1,0.5,2.1,2.9v14c0,0.9-0.2,1.9-4.3,2.1V36.2z"/><path d="M118.7,36.7c2.6,0,4.8-2.3,6.3-4.8l-0.9-0.6c-1,1.3-2.2,1.9-3.4,1.9c-1.9,0-3.3-1.4-3.3-4V14.5h3.2c7.6,0,14.5-5.1,14.5-11 c0-2.3-1-3.5-2.6-3.5c-1.6,0-2.7,1.2-2.7,2.7c0,0.9,0.4,1.5,0.7,2c1.9,2.7,0.5,4.9-2.3,6.2c-3.2,1.4-6.8,1.2-10.1,1.2h-0.7V7h-0.6 l-6.9,7l0.3,0.5h3v15.4C113.3,34.3,116,36.7,118.7,36.7z"/><path d="M98.8,11.5c-6.2,0-11.7,5.4-11.7,12.7c0,7.4,5.1,12.5,11.5,12.5c6.4,0,11.2-5,11.2-12.7C109.8,16.4,104.8,11.5,98.8,11.5z M98.8,34.7c-5.7,0-7.2-7-7.2-11.3s1.5-9.8,6.5-9.8c5.7,0,7.2,6.9,7.2,11.2S103.8,34.7,98.8,34.7z"/><path d="M47,14.1c-2.7,0-4.8,2-4.8,4.6c0,2.6,2,4.8,4.8,4.8c2.5,0,4.5-2.1,4.5-4.8S49.5,14.1,47,14.1z M47,21.5 c-1.6,0-2.8-1.2-2.8-2.7c0-1.5,1.2-2.7,2.8-2.7c1.4,0,2.6,1.2,2.6,2.7S48.4,21.5,47,21.5z"/><path d="M29.3,37.3h2.2L41,12.8h-2.1L29.3,37.3z"/><path d="M26.4,14.6c-0.9,0-1.6,0.8-1.6,1.7c0,2.2,3.7,1.6,3.7,7.2c0,6.2-4.8,10.3-8.4,10.3c-1.9,0-3-1.2-3.8-3.6 c3.7-4.6,6-10.1,6-12.6c0-1.5-0.9-2.8-2.2-2.8c-3.3,0-7.2,7.9-7.2,13.9c0,0.7,0.1,1.5,0.2,2.2c-2,1.9-3.6,2.7-5.5,2.7 c-3.1-0.1-4.3-1.9-4.3-4c0-3.9,4.6-7,6.6-8.4c3.4-2.4,4.9-3.7,4.9-5.4c0-1.4-1-1.7-1.6-1.7c-1.1,0-1.7,1.1-1.7,2.7v0.3 C9.3,15,7,14,5.4,14c-2.1,0-4.9,1.6-4.9,3.7c0,1,0.6,1.7,1.5,1.7c0.8,0,1.7-0.5,1.7-1.6v-1.2c0-0.7,0.4-0.9,0.8-0.9 c1.3,0,3.3,1.9,5.4,3.8l-0.1,0.1C3.5,23.6,0,26.6,0,30.8c0,3.8,2.9,6,6,5.9c2.6-0.1,5.3-1.5,7.8-4.1h0.1c0.8,2.6,2.9,4.1,5.5,4.1 c5.7,0,11.2-7.4,11.2-14.4C30.5,17.9,28.2,14.6,26.4,14.6z M15.5,28.4c-0.3-1.1-0.2-2.3-0.2-3c0-2,1-7.8,3.4-7.8c0.9,0,1,0.7,1,1.4 c0,2.2-1.7,6.3-4.1,9.4H15.5z"/><path d="M83.2,36.7h0.6V3.6c0-1,0.2-2,4.3-2.2V0.2h-11v1.2c4.2,0.2,4.4,1.2,4.4,2.2v24.1h-0.1L59.5,0.2h-6.1v1.4 c1.1,0.3,1.8,0.7,3,2.2l1.4,1.7v27.2c0,1-0.3,2-4.4,2.2v1.2h10.9V35c-4.2-0.2-4.3-1.2-4.3-2.2V8.2h0.1L83.2,36.7z"/></svg>
		</a>

		<div class="footer-links">
			<div>
				<h2>Sans</h2>
				<ul>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
				</ul>
			</div>
			<div>
				<h2>Serif</h2>
				<ul>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
				</ul>
			</div>
			<div>
				<h2>Mono</h2>
				<ul>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
				</ul>
			</div>
			<div>
				<h2>Others</h2>
				<ul>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
					<li><a href="/">Typeface</a></li>
				</ul>
			</div>
			<div class="footer-links-spacer"></div>
			<div>
				<h2>Information</h2>
				<ul>
					<li><a href="/">About</a></li>
					<li><a href="/">Blog</a></li>
					<li><a href="/">Designers</a></li>
					<li><a href="/">Commissions</a></li>
				</ul>
			</div>
			<div>
				<h2>Support</h2>
				<ul>
					<li><a href="/">Contact</a></li>
					<li><a href="/">FAQs</a></li>
					<li><a href="/">Licensing</a></li>
				</ul>
			</div>
		</div>
		<div class="footer-crumbs">
			<div>
				<p>© ${datetime.getFullYear()} Without Notice Foundry, All rights reserved</p>
				<ul>
					<li><a href="/">Terms & Conditions</a></li>
					<li><a href="/">Privacy Policy</a></li>
				</ul>
			</div>
			<div>
				<h3>Follow us</h3>
				<ul>
					<li><a href="/" target="_blank">Instagram</a></li>
					<li><a href="/" target="_blank">Facebook</a></li>
					<li><a href="/" target="_blank">Contact</a></li>
					<li><a href="/" target="_blank">Newsletter</a></li>
				</ul>
			</div>
			<div class="footer-build">
				<p><span class="symbol">wysiwyg</span> Site build ${buildDatetime}</p>
			</div>
		</div>
	</footer>
`;

const fs = require('fs');

// Get JSON
const archive = require('./fonts.json');

// Convert to JSON object format
let archiveJSON = {};
for (let i of Object.keys(archive)) {
	let entry = archive[i];
	let key = entry['url'];
	archiveJSON[key] = entry;
}
console.log(archiveJSON);
generatePages();

function generatePages() {
	for (let url of Object.keys(archiveJSON)) {
		let entry = archiveJSON[url];

		// Skip unfinished entries
		if (entry['active'] == false) {
			continue
		}

		// ————————————————————————————————————
		// SPECIMEN PAGE
		// ————————————————————————————————————
		let pageColors = '';
		for (let pageColor of Object.keys(entry['colors'])) {
			if (pageColor == "primary") {
				pageColors += `--color1: hsl(${entry['colors'][pageColor][0]}deg, ${entry['colors'][pageColor][1]}%, ${entry['colors'][pageColor][2]}%)`;
			} else if (pageColor == "secondary") {
				pageColors += `--color2: hsl(${entry['colors'][pageColor][0]}deg, ${entry['colors'][pageColor][1]}%, ${entry['colors'][pageColor][2]}%)`;
			}
		}

		// Generate single select options
		let singleSelectOptions = `<div class="specimen-tester-select-options" data-active="0">`;
		for (let style of Object.keys(entry['font-styles'])) {
			singleSelectOptions += `<div class="specimen-tester-select-option" data-option="${style}">${style}</div>`;
		}
		singleSelectOptions += `</div>`;

		// Generate multi select options
		let multiSelectOptions = `<div class="specimen-tester-select-options" data-active="0">`;
		for (let feature of Object.keys(entry['font-features'])) {
			multiSelectOptions += `
				<div class="specimen-tester-select-option" data-active="0" data-option="${feature}">
					<span class="symbol specimen-tester-select-option-inactive">check_box_outline_blank</span><span class="symbol specimen-tester-select-option-active">check_box</span> ${feature}
				</div>
			`;
		}
		multiSelectOptions += `</div>`;
		
		// Generate testers
		let testers = '';
		for (let data of entry['specimen-testers']) {
			let fontStyles = '';
			let fontStylesObj = entry['font-styles'][data['style']];
			for (let style of Object.keys(fontStylesObj)) {
				fontStyles += `${style}: ${fontStylesObj[style]};`;
			}

			let fontFeatures = '';
			if (data['features'] != "") {
				fontFeatures = `font-feature-settings: ${data['features']};`;
			}

			let alignment = '';
			if (data['align'] == "left") {
				alignment = `
					<button id="alignleft" data-active="1"><span class="symbol">format_align_left</span></button>
					<button id="aligncenter" data-active="0"><span class="symbol">format_align_center</span></button>
					<button id="alignright" data-active="0"><span class="symbol">format_align_right</span></button>
				`;
			} else if (data['align'] == "center") {
				alignment = `
					<button id="alignleft" data-active="0"><span class="symbol">format_align_left</span></button>
					<button id="aligncenter" data-active="1"><span class="symbol">format_align_center</span></button>
					<button id="alignright" data-active="0"><span class="symbol">format_align_right</span></button>
				`;
			} else if (data['align'] == "right") {
				alignment = `
					<button id="alignleft" data-active="0"><span class="symbol">format_align_left</span></button>
					<button id="aligncenter" data-active="0"><span class="symbol">format_align_center</span></button>
					<button id="alignright" data-active="1"><span class="symbol">format_align_right</span></button>
				`;
			}

			testers += `
				<div class="specimen-tester" data-style="${data['style']}" data-features="${data['features']}" data-fontsize="${data['fontsize']}" data-lineheight="${data['lineheight']}" data-letterspacing="${data['letterspacing']}" data-align="${data['align']}">
					<div class="specimen-tester-controls">
						<div class="specimen-tester-select" data-type="single">
							<div class="specimen-tester-select-dropdown">${data['style']} <span class="symbol">arrow_drop_down</span></div>
							${singleSelectOptions}
						</div>
			
						<div class="specimen-tester-select" data-type="multi">
							<div class="specimen-tester-select-dropdown">Features <span class="symbol">arrow_drop_down</span></div>
							${multiSelectOptions}
						</div>
			
						<div class="specimen-tester-controls-spacer"></div>
			
						<form class="specimen-tester-slider" data-type="fontsize">
							<label for="fontsize"><span class="symbol">format_size</span></label>
							<input type="range" min=".5" max="20" value="${data['fontsize']}" id="fontsize" step="0.1" oninput="this.parentNode.querySelector('output').value = parseFloat(this.parentNode.querySelector('input').value).toFixed(1)">
							<output id="fontsizevalue" for="fontsize" style="width: 3em;">${data['fontsize'].toFixed(1)}</output>
						</form>
			
						<form class="specimen-tester-slider" data-type="leading">
							<label for="leading"><span class="symbol">format_line_spacing</span></label>
							<input type="range" min="0.5" max="2" value="${data['lineheight']}" step="0.01" id="leading" oninput="this.parentNode.querySelector('output').value = parseFloat(this.parentNode.querySelector('input').value).toFixed(2)">
							<output id="leadingvalue" for="leading" style="width: 3em;">${data['lineheight'].toFixed(2)}</output>
						</form>
			
						<form class="specimen-tester-slider" data-type="tracking">
							<label for="tracking"><span class="symbol">format_letter_spacing</span></label>
							<input type="range" min="-.2" max=".2" value="${data['letterspacing']}" step="0.01" id="tracking" oninput="this.parentNode.querySelector('output').value = parseFloat(this.parentNode.querySelector('input').value).toFixed(2)">
							<output id="trackingvalue" for="fontsize" style="width: 3em;">${data['letterspacing'].toFixed(2)}</output>
						</form>
			
						<div class="specimen-tester-toggles">
							<div class="specimen-tester-alignment">
								${alignment}
							</div>
							<div class="specimen-tester-toggles-spacer"></div>
							<button id="reset" class="specimen-tester-reset"><span class="symbol">refresh</span></button>
						</div>
					</div>
					<div class="specimen-tester-editable" style="font-size: ${data['fontsize']}vw; line-height: ${data['lineheight']}em; letter-spacing: ${data['letterspacing']}em; text-align: ${data['align']}; ${fontStyles} ${fontFeatures}">
						<div contenteditable="plaintext-only" spellcheck="false" style="columns: ${data['columns']};">${data["text"]}</div>
					</div>
				</div>

				<div class="specimen-divider"></div>
			`
		}

		// Generate font features
		let fontFeatures = "";
		if (entry['font-features'] != "") {
			let fontFeaturesBlocks = '';
			for (let feature of Object.keys(entry['font-features'])) {
				fontFeaturesBlocks += `
					<div>
						<h3>${entry['font-features'][feature]['code']}<br>${feature}</h3>
						<p>${entry['font-features'][feature]['preview']}</p>
					</div>
				`;
			}
			fontFeatures += `
				<section class="specimen-features" id="features">
					<h2 class="specimen-section-heading"><span class="symbol">hdr_auto</span> OpenType Features</h2>
					<div class="specimen-features-content">
						<p class="specimen-features-description">
							${entry["font-features-desc"]}
						</p>
						<div class="specimen-features-blocks">
							${fontFeaturesBlocks}
						</div>
					</div>
				</section>
			`;
		}

		// Generate default styles for lettersets
		let defaultStyle = '';
		let firstStyleEntry = entry['font-styles'][Object.keys(entry['font-styles'])[0]];
		for (let key of Object.keys(firstStyleEntry)) {
			defaultStyle += key + ": " + firstStyleEntry[key] + ";";
		}

		// Generate lettersets
		let lettersets = '';
		for (let lettersetCategory of Object.keys(entry['glyphs'])) {
			lettersets += `<div class="specimen-glyphs-letterset-category"><h2>${lettersetCategory}</h2><ul style="${defaultStyle};">`;
			let glyphArray = entry['glyphs'][lettersetCategory].split('');
			for (let glyph of glyphArray) {
				lettersets += `<li>${glyph}</li>`;
			}
			lettersets += '</ul></div>';
		}

		// Generate font info
		let fontInfo = "";
		let fontInfoIndex = 0;
		for (let section of Object.keys(entry['font-info'])) {
			fontInfo += `
				<div class="specimen-info-row">
					<h3>${section}</h3>
					<p>${entry['font-info'][section]}</p>
				</div>
			`;
			if (fontInfoIndex < Object.keys(entry['font-info']).length-1) {
				fontInfo += `
					<div class="specimen-info-divider"></div>
				`;
			}
			fontInfoIndex++;
		}

		// Generate tags (below download button)
		let tags = '';
		for (let tag of entry['tags']) {
			tags += `<p>${tag}</p>`;
		}

		let specimenContent = `
			<!DOCTYPE html>
			<html lang="en" style="${pageColors}">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Without Notice | ${entry['font-name']}</title>
				<link rel="stylesheet" href="../../style.css">
			</head>
			<body>
				${nav}

				<div class="specimen-nav">
					<div class="specimen-nav-block">
						<p>${entry['font-designer']}</p>
					</div>
					<div class="specimen-nav-spacer"></div>
					<div class="specimen-nav-block">
						<a href="#specimen">Specimens</a>
						<a href="#features">Features</a>
						<a href="#glyphs">Glyphs</a>
						<a href="#in-use">In use</a>
					</div>
					<div class="specimen-nav-block specimen-nav-block-end">
						<a href="#test"><span class="symbol">science</span> Test</a>
						<a href="#download"><span class="symbol">download</span> Download</a>
					</div>
				</div>

				<header class="specimen-header">
					<h1 class="specimen-header-name" style="font-size: 22vw;">Typeface</h1>
					<p class="specimen-header-description">
						${entry['font-description']}
					</p>
				</header>

				<div class="specimen-divider"></div>

				<section class="specimen-styles" id="specimen">
					<h2 class="specimen-section-heading"><span class="symbol">style</span> Specimen</h2>
					<div class="specimen-styles-content">
						<div>
							<p style="font-weight:100">Regular 100</p>
							<p style="font-weight:200">Regular 200</p>
							<p style="font-weight:300">Regular 300</p>
							<p style="font-weight:400">Regular 400</p>
							<p style="font-weight:500">Regular 500</p>
							<p style="font-weight:600">Regular 600</p>
							<p style="font-weight:700">Regular 700</p>
							<p style="font-weight:800">Regular 800</p>
							<p style="font-weight:900">Regular 900</p>
						</div>
						<div style="font-style: italic">
							<p style="font-weight:100">Italic 100</p>
							<p style="font-weight:200">Italic 200</p>
							<p style="font-weight:300">Italic 300</p>
							<p style="font-weight:400">Italic 400</p>
							<p style="font-weight:500">Italic 500</p>
							<p style="font-weight:600">Italic 600</p>
							<p style="font-weight:700">Italic 700</p>
							<p style="font-weight:800">Italic 800</p>
							<p style="font-weight:900">Italic 900</p>
						</div>
					</div>
				</section>

				<div class="specimen-divider"></div>
				
				<section class="specimen-testers" id="test">
					${testers}
				</section>

				${fontFeatures}

				<div class="specimen-divider"></div>

				<section class="specimen-glyphs" id="glyphs">
					<div class="specimen-glyphs-detail">
						<div class="specimen-glyphs-detail-info">
							<div class="specimen-glyphs-toggles">
								<button onclick="setGlyphView(this)" data-active="1" data-value="solid"><span class="symbol specimen-glyphs-toggle-active">radio_button_checked</span><span class="symbol specimen-glyphs-toggle-inactive">radio_button_unchecked</span> Solid</button>
								<button onclick="setGlyphView(this)" data-active="0" data-value="outline"><span class="symbol specimen-glyphs-toggle-active">radio_button_checked</span><span class="symbol specimen-glyphs-toggle-inactive">radio_button_unchecked</span> Outline</button>
							</div>
							<div class="specimen-tester-select specimen-glyphs-style" data-type="single">
								<div class="specimen-tester-select-dropdown">${Object.keys(entry['font-styles'])[0]} <span class="symbol specimen-glyphs-toggle-inactive">arrow_drop_down</span></div>
								${singleSelectOptions}
							</div>
							<div class="specimen-tester-select specimen-glyphs-features" data-type="multi">
								<div class="specimen-tester-select-dropdown">Features <span class="symbol specimen-glyphs-toggle-inactive">arrow_drop_down</span></div>
								${multiSelectOptions}
							</div>
							<div>
								<p class="specimen-glyphs-detail-code">U+0000</p>
								<p class="specimen-glyphs-detail-char">C</p>
							</div>
						</div>
						<div class="specimen-glyphs-detail-view">
							<div class="specimen-glyphs-detail-glyph" style="${defaultStyle};">A</div>
						</div>
					</div>
					<div class="specimen-glyphs-letterset">
						${lettersets}
					</div>
				</section>

				<div class="specimen-divider"></div>

				<section class="specimen-in-use" id="in-use">
					<h2 class="specimen-section-heading"><span class="symbol">visibility</span> In use</h2>
					<div class="specimen-in-use-content">
						<a href="#" class="specimen-in-use-4col" target="_blank"><img src=""></a>
						<img class="specimen-in-use-4col" src="">
						<img class="specimen-in-use-3col" src="">
						<img class="specimen-in-use-5col" src="">
					</div>
				</section>

				<div class="specimen-divider"></div>

				<section class="specimen-info" id="info">
					<div class="specimen-info-overview">
						<p class="specimen-info-desc">
							${entry['overview']}
						</p>
						<a href="${entry['specimen']}" class="specimen-info-download" target="_blank"><span class="symbol">text_snippet</span>Download specimen</a>
					</div>
					<div class="specimen-info-details">
						${fontInfo}
					</div>
				</section>

				<div class="specimen-divider"></div>

				<section class="specimen-download" id="download">
					<div class="specimen-download-header">
						<p>${entry['font-name']}</p>
						<p>${entry['font-designer']}</p>
					</div>
					<a href="${entry['download']}" class="specimen-download-button" target="_blank"><span class="symbol">download</span>Download</a>
					<div class="specimen-download-footer">
						${tags}
					</div>
				</section>

				<div class="specimen-divider"></div>

				${footer}

				<button class="controls-toggle" onclick="openPageSettings();"><span class="symbol">light_mode</span></button>

				<div class="controls" data-active="0">
					<div>
						<h2>Primary Color</h2>
					</div>

					<div>
						<form class="controls-slider" oninput="primarycolorvalue.value = parseInt(primarycolor.value); updatePageColor('primary', 0, primarycolor.value);" id="primary-hue">
							<label for="primarycolor"><span class="symbol">colors</span></label>
							<input type="range" min="0" max="360" value="${entry['colors']['primary'][0]}" id="primarycolor">
							<output id="primarycolorvalue" for="primarycolor">${entry['colors']['primary'][0]}</output>
						</form>
						<form class="controls-slider" oninput="primarysaturationvalue.value = parseInt(primarysaturation.value); updatePageColor('primary', 1, primarysaturation.value);" id="primary-saturation">
							<label for="primarysaturation"><span class="symbol">opacity</span></label>
							<input type="range" min="0" max="100" value="${entry['colors']['primary'][1]}" id="primarysaturation">
							<output id="primarysaturationvalue" for="primarysaturation">${entry['colors']['primary'][1]}</output>
						</form>
						<form class="controls-slider" oninput="primarylightnessvalue.value = parseInt(primarylightness.value); updatePageColor('primary', 2, primarylightness.value);" id="primary-lightness">
							<label for="primarylightness"><span class="symbol">brightness_6</span></label>
							<input type="range" min="0" max="100" value="${entry['colors']['primary'][2]}" id="primarylightness">
							<output id="primarylightnessvalue" for="primarylightness">${entry['colors']['primary'][2]}</output>
						</form>
					</div>

					<div class="controls-spacer"></div>

					<div>
						<h2>Secondary Color</h2>
					</div>

					<div>
						<form class="controls-slider" oninput="secondarycolorvalue.value = parseInt(secondarycolor.value); updatePageColor('secondary', 0, secondarycolor.value);" id="secondary-hue">
							<label for="secondarycolor"><span class="symbol">colors</span></label>
							<input type="range" min="0" max="360" value="${entry['colors']['secondary'][0]}" id="secondarycolor">
							<output id="secondarycolorvalue" for="secondarycolor">${entry['colors']['secondary'][0]}</output>
						</form>
						<form class="controls-slider" oninput="secondarysaturationvalue.value = parseInt(secondarysaturation.value); updatePageColor('secondary', 1, secondarysaturation.value);" id="secondary-saturation">
							<label for="secondarysaturation"><span class="symbol">opacity</span></label>
							<input type="range" min="0" max="100" value="${entry['colors']['secondary'][1]}" id="secondarysaturation">
							<output id="secondarysaturationvalue" for="secondarysaturation">${entry['colors']['secondary'][1]}</output>
						</form>
						<form class="controls-slider" oninput="secondarylightnessvalue.value = parseInt(secondarylightness.value); updatePageColor('secondary', 2, secondarylightness.value);" id="secondary-lightness">
							<label for="secondarylightness"><span class="symbol">brightness_6</span></label>
							<input type="range" min="0" max="100" value="${entry['colors']['secondary'][2]}" id="secondarylightness">
							<output id="secondarylightnessvalue" for="secondarylightness">${entry['colors']['secondary'][2]}</output>
						</form>
					</div>

					<div class="controls-spacer"></div>

					<div>
						<button onclick="changeColorMode();"><span class="symbol">contrast</span> Switch colors</button>
						<button onclick="toggleOutlines();"><span class="symbol">border_all</span> Toggle outlines</button>
						<button onclick="resetPageSettings();"><span class="symbol">refresh</span> Reset</button>
					</div>

					<div>
						<button onclick="closePageSettings();"><span class="symbol">close</span> Close Menu</button>
					</div>
				</div>

				<script src="../../nav.js"></script>

				<script>pageColors = ${JSON.stringify(entry['colors'])};</script>
				<script src="../../page-colors.js"></script>

				<script>fontStyles = ${JSON.stringify(entry['font-styles'])};</script>
				<script>fontFeatures = ${JSON.stringify(entry['font-features'])};</script>
				<script src="../../specimen.js"></script>
			</body>
			</html>
		`;
		

		// Check if directory already exists
		// If not, create directory
		let dir = 'fonts/' + url;
		if (!fs.existsSync(dir)){
			fs.mkdirSync(dir);
		}

		// Create index file in directory
		fs.writeFile(`${dir}/index.html`, specimenContent, err => {
			if (err) {
				console.error(err);
			}
		});
	}

	// ————————————————————————————————————
	// HOMEPAGE
	// ————————————————————————————————————
	let homepageContent = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Without Notice</title>
			<link rel="stylesheet" href="style.css">
		</head>
		<body>
			${nav}

			

			${footer}

			<button class="controls-toggle" onclick="openPageSettings();"><span class="symbol">light_mode</span></button>

			<div class="controls" data-active="0">
				<div>
					<h2>Primary Color</h2>
				</div>

				<div>
					<form class="controls-slider" oninput="primarycolorvalue.value = parseInt(primarycolor.value); updatePageColor('primary', 0, primarycolor.value);" id="primary-hue">
						<label for="primarycolor"><span class="symbol">colors</span></label>
						<input type="range" min="0" max="360" value="120" id="primarycolor">
						<output id="primarycolorvalue" for="primarycolor">120</output>
					</form>
					<form class="controls-slider" oninput="primarysaturationvalue.value = parseInt(primarysaturation.value); updatePageColor('primary', 1, primarysaturation.value);" id="primary-saturation">
						<label for="primarysaturation"><span class="symbol">opacity</span></label>
						<input type="range" min="0" max="100" value="100" id="primarysaturation">
						<output id="primarysaturationvalue" for="primarysaturation">120</output>
					</form>
					<form class="controls-slider" oninput="primarylightnessvalue.value = parseInt(primarylightness.value); updatePageColor('primary', 2, primarylightness.value);" id="primary-lightness">
						<label for="primarylightness"><span class="symbol">brightness_6</span></label>
						<input type="range" min="0" max="100" value="50" id="primarylightness">
						<output id="primarylightnessvalue" for="primarylightness">120</output>
					</form>
				</div>

				<div class="controls-spacer"></div>

				<div>
					<h2>Secondary Color</h2>
				</div>

				<div>
					<form class="controls-slider" oninput="secondarycolorvalue.value = parseInt(secondarycolor.value); updatePageColor('secondary', 0, secondarycolor.value);" id="secondary-hue">
						<label for="secondarycolor"><span class="symbol">colors</span></label>
						<input type="range" min="0" max="360" value="120" id="secondarycolor">
						<output id="secondarycolorvalue" for="secondarycolor">120</output>
					</form>
					<form class="controls-slider" oninput="secondarysaturationvalue.value = parseInt(secondarysaturation.value); updatePageColor('secondary', 1, secondarysaturation.value);" id="secondary-saturation">
						<label for="secondarysaturation"><span class="symbol">opacity</span></label>
						<input type="range" min="0" max="100" value="100" id="secondarysaturation">
						<output id="secondarysaturationvalue" for="secondarysaturation">120</output>
					</form>
					<form class="controls-slider" oninput="secondarylightnessvalue.value = parseInt(secondarylightness.value); updatePageColor('secondary', 2, secondarylightness.value);" id="secondary-lightness">
						<label for="secondarylightness"><span class="symbol">brightness_6</span></label>
						<input type="range" min="0" max="100" value="50" id="secondarylightness">
						<output id="secondarylightnessvalue" for="secondarylightness">120</output>
					</form>
				</div>

				<div class="controls-spacer"></div>

				<div>
					<button onclick="changeColorMode();"><span class="symbol">contrast</span> Switch colors</button>
					<button onclick="toggleOutlines();"><span class="symbol">border_all</span> Toggle outlines</button>
					<button onclick="resetPageSettings();"><span class="symbol">refresh</span> Reset</button>
				</div>

				<div>
					<button onclick="closePageSettings();"><span class="symbol">close</span> Close Menu</button>
				</div>
			</div>
			<script src="script.js"></script>
		</body>
		</html>
	`;

	// Create homepage file
	// fs.writeFile(`index.html`, homepageContent, err => {
	// 	if (err) {
	// 		console.error(err);
	// 	}
	// });
}

// TODO: add conditional dropdown menus if font doesnt have multiple styles or features
// TODO: conditional hiding of entire opentype features section
// TODO: lightbox
// TODO: specimen preview section at the top
// TODO: header + paragraphs
// TODO: set the correct default toggles for features on testers