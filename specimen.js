// Add functionality to testers
function initializeTesters() {
	for (let tester of document.querySelectorAll('.specimen-tester')) {
		const testerText = tester.querySelector('.specimen-tester-editable');

		// Add event listeners for selection dropdowns
		for (let option of tester.querySelectorAll('[data-type="single"] .specimen-tester-select-option')) {
			option.addEventListener('click', () => {toggleSingleSelect(option)})
		}
		for (let option of tester.querySelectorAll('[data-type="multi"] .specimen-tester-select-option')) {
			option.addEventListener('click', () => {toggleMultiSelect(option)})
		}

		// Controls
		const sliderFontsize = tester.querySelector('#fontsize');
		const sliderFontsizeOutput = tester.querySelector('#fontsizevalue');
		const sliderLeading = tester.querySelector('#leading');
		const sliderLeadingOutput = tester.querySelector('#leadingvalue');
		const sliderTracking = tester.querySelector('#tracking');
		const sliderTrackingOutput = tester.querySelector('#trackingvalue');
		const alignLeft = tester.querySelector('#alignleft');
		const alignCenter = tester.querySelector('#aligncenter');
		const alignRight = tester.querySelector('#alignright');
		const reset = tester.querySelector('#reset');
		sliderFontsize.addEventListener('input', () => {
			testerText.style.fontSize = sliderFontsize.value + 'vw';
		})
		sliderLeading.addEventListener('input', () => {
			testerText.style.lineHeight = sliderLeading.value + 'em';
		})
		sliderTracking.addEventListener('input', () => {
			testerText.style.letterSpacing = sliderTracking.value + 'em';
		})
		alignLeft.addEventListener('click', () => {
			testerText.style.textAlign = 'left';
			alignLeft.dataset.active = 1;
			alignCenter.dataset.active = 0;
			alignRight.dataset.active = 0;
		})
		alignCenter.addEventListener('click', () => {
			testerText.style.textAlign = 'center';
			alignLeft.dataset.active = 0;
			alignCenter.dataset.active = 1;
			alignRight.dataset.active = 0;
		})
		alignRight.addEventListener('click', () => {
			testerText.style.textAlign = 'right';
			alignLeft.dataset.active = 0;
			alignCenter.dataset.active = 0;
			alignRight.dataset.active = 1;
		})
		reset.addEventListener('click', () => {
			initSettings();
		})

		// Init
		function initSettings() {
			testerText.style.fontSize = tester.dataset.fontsize + 'vw';
			sliderFontsize.value = parseFloat(tester.dataset.fontsize).toFixed(1);
			sliderFontsizeOutput.value = parseFloat(tester.dataset.fontsize).toFixed(1);
			testerText.style.lineHeight = tester.dataset.lineheight + 'em';
			sliderLeading.value = parseFloat(tester.dataset.lineheight).toFixed(2);
			sliderLeadingOutput.value = parseFloat(tester.dataset.lineheight).toFixed(2);
			testerText.style.letterSpacing = tester.dataset.letterspacing + 'em';sliderTracking.value = parseFloat(tester.dataset.letterspacing).toFixed(2);
			sliderTrackingOutput.value = parseFloat(tester.dataset.letterspacing).toFixed(2);
			testerText.style.textAlign = tester.dataset.align;
			if (tester.dataset.align == 'left') {
				alignLeft.dataset.active = 1;
				alignCenter.dataset.active = 0;
				alignRight.dataset.active = 0;
			} else if (tester.dataset.align == 'center') {
				alignLeft.dataset.active = 0;
				alignCenter.dataset.active = 1;
				alignRight.dataset.active = 0;
			} else if (tester.dataset.align == 'right') {
				alignLeft.dataset.active = 0;
				alignCenter.dataset.active = 0;
				alignRight.dataset.active = 1;
			}

			// STYLES
			// Set default value
			let selectedStyle = fontStyles[tester.dataset.style];
			for (let currentStyle of Object.keys(selectedStyle)) {
				testerText.style[currentStyle] = selectedStyle[currentStyle];
			}
			// Show default value in dropdown
			let dropdown = tester.querySelector('.specimen-tester-select-dropdown');
			dropdown.innerHTML = `${tester.dataset.style} <span class="symbol">arrow_drop_down</span>`;

			// OPTIONS
			// Set default value
			testerText.style.fontFeatureSettings = tester.dataset.features;
			// Set correct default toggles
			for (let option of tester.querySelectorAll('[data-type="multi"] .specimen-tester-select-option')) {
				if (option.classList.contains('specimen-glyphs-features')) {
					continue
				}
				if (tester.dataset.features.includes(fontFeatures[option.dataset.option])) {
					option.dataset.active = 1;
				} else {
					option.dataset.active = 0;
				}
			}
		}
	}
}
initializeTesters();

function toggleSingleSelect(elmnt) {
	// Close options menu
	let options = elmnt.closest('.specimen-tester-select-options');
	options.dataset.active = 0;

	// Apply style to specimen tester
	let tester = elmnt.closest('.specimen-tester');
	let testerEditable = tester.querySelector('.specimen-tester-editable');
	let selectedStyle = fontStyles[elmnt.dataset.option];
	for (let currentStyle of Object.keys(selectedStyle)) {
		testerEditable.style[currentStyle] = selectedStyle[currentStyle];
	}

	// Change dropdown display to current style
	let dropdown = tester.querySelector('.specimen-tester-select-dropdown');
	dropdown.innerHTML = `${elmnt.dataset.option} <span class="symbol">arrow_drop_down</span>`;
}

function toggleMultiSelect(elmnt) {
	// Apply style to specimen tester
	let tester = elmnt.closest('.specimen-tester');
	let testerEditable = tester.querySelector('.specimen-tester-editable');
	if (parseInt(elmnt.dataset.active) == 1) {
		elmnt.dataset.active = 0;
	} else {
		elmnt.dataset.active = 1;
	}

	// Get all active options and create settings
	let options = '';
	for (let option of tester.querySelectorAll('.specimen-tester-select[data-type="multi"] .specimen-tester-select-option')) {
		if (parseInt(option.dataset.active) == 1) {
			options += `"${fontFeatures[option.dataset.option]}",`;
		}
	}
	testerEditable.style.fontFeatureSettings = options.slice(0, -1); // remove last comma
}

// Glyph viewer
const glyphsLetterset = document.querySelector('.specimen-glyphs-letterset');
for (let li of glyphsLetterset.querySelectorAll('li')) {
	li.addEventListener('click', () => {setGlyph(li)})
}
function setGlyph(li) {
	for (let otherLi of glyphsLetterset.querySelectorAll('li')) {
		otherLi.dataset.active = 0;
	}
	li.dataset.active = 1;
	const glyphView = document.querySelector('.specimen-glyphs-detail-glyph');
	glyphView.innerHTML = li.innerText;

	const glyphCode = document.querySelector('.specimen-glyphs-detail-code');
	const glyphCar = document.querySelector('.specimen-glyphs-detail-char');
	glyphCode.innerText = "U+"+(li.innerText.charCodeAt()).toString().padStart(4, '0');
	glyphCar.innerHTML = `‘${li.innerText}’`;
}
function setGlyphView(elmnt) {
	const glyphToggles = document.querySelectorAll('.specimen-glyphs-toggles button');
	for (let toggle of glyphToggles) {
		toggle.dataset.active = 0;
	}
	elmnt.dataset.active = 1;

	const glyphView = document.querySelector('.specimen-glyphs-detail-glyph');
	glyphView.dataset.state = elmnt.dataset.value;
}

// Add event listeners for selection dropdowns for glyph viewer
const glyphView = document.querySelector('.specimen-glyphs');
for (let option of glyphView.querySelectorAll('[data-type="single"] .specimen-tester-select-option')) {
	option.addEventListener('click', () => {toggleSingleSelectGlyph(option)})
}
for (let option of glyphView.querySelectorAll('[data-type="multi"] .specimen-tester-select-option')) {
	option.addEventListener('click', () => {toggleMultiSelectGlyph(option)})
}

function toggleSingleSelectGlyph(elmnt) {
	// Close options menu
	let options = elmnt.closest('.specimen-tester-select-options');
	options.dataset.active = 0;

	// Apply style to glyph viewer
	let selectedStyle = fontStyles[elmnt.dataset.option];
	for (let ul of document.querySelectorAll('.specimen-glyphs-letterset-category ul')) {
		for (let currentStyle of Object.keys(selectedStyle)) {
			ul.style[currentStyle] = selectedStyle[currentStyle];
		}
	}
	let glyphView = document.querySelector('.specimen-glyphs-detail-glyph');
	for (let currentStyle of Object.keys(selectedStyle)) {
		glyphView.style[currentStyle] = selectedStyle[currentStyle];
	}

	// Change dropdown display to current style
	let dropdown = elmnt.parentNode.parentNode.querySelector('.specimen-tester-select-dropdown');
	dropdown.innerHTML = `${elmnt.dataset.option} <span class="symbol">arrow_drop_down</span>`;
}
function toggleMultiSelectGlyph(elmnt) {
	if (parseInt(elmnt.dataset.active) == 1) {
		elmnt.dataset.active = 0;
	} else {
		elmnt.dataset.active = 1;
	}

	let glyphView = document.querySelector('.specimen-glyphs-detail-glyph');
	let options = '';
	for (let option of document.querySelectorAll('.specimen-glyphs-features .specimen-tester-select-option')) {
		if (parseInt(option.dataset.active) == 1) {
			options += `"${fontFeatures[option.dataset.option]}",`;
		}
	}
	for (let ul of document.querySelectorAll('.specimen-glyphs-letterset-category ul')) {
		ul.style.fontFeatureSettings = options.slice(0, -1); // remove last comma
	}
	glyphView.style.fontFeatureSettings = options.slice(0, -1); // remove last comma
}

// Add dropdown event listeners
for (let dropdown of document.querySelectorAll('.specimen-tester-select-dropdown')) {
	let options = dropdown.parentNode.querySelector('.specimen-tester-select-options');
	dropdown.addEventListener('click', () => {toggleSelect(options)});
}
function toggleSelect(elmnt) {
	if (parseInt(elmnt.dataset.active) == 0) {
		elmnt.dataset.active = 1;
	} else {
		elmnt.dataset.active = 0;
	}
}
function openSelect(elmnt) {
	elmnt.dataset.active = 1;
}
function closeSelect(elmnt) {
	elmnt.dataset.active = 0;
}

// TODO: Close dropdown if clicked anywhere else
// window.addEventListener('click', () => {
// 	for (let dropdown of this.document.querySelectorAll('.specimen-tester-select-options')) {
// 		setTimeout(() => {
// 			if (parseInt(dropdown.dataset.active) == 1) {
// 				dropdown.dataset.active = 0;
// 			}
// 		}, 50)
// 	}
// }, false);