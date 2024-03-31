// Set page colors
if ((typeof pageColors === "undefined")) {
	var pageColors = {'primary': [214, 50, 19], 'secondary': [0, 0, 89]};
}
pageColorsBackup = structuredClone(pageColors);
const primaryHue = document.querySelector('#primary-hue');
const primarySaturation = document.querySelector('#primary-saturation');
const primaryLightness = document.querySelector('#primary-lightness');
const secondaryHue = document.querySelector('#secondary-hue');
const secondarySaturation = document.querySelector('#secondary-saturation');
const secondaryLightness = document.querySelector('#secondary-lightness');
function initPageColors() {
	primaryHue.querySelector('input').value = pageColors['primary'][0];
	primarySaturation.querySelector('input').value = pageColors['primary'][1];
	primaryLightness.querySelector('input').value = pageColors['primary'][2];
	secondaryHue.querySelector('input').value = pageColors['secondary'][0];
	secondarySaturation.querySelector('input').value = pageColors['secondary'][1];
	secondaryLightness.querySelector('input').value = pageColors['secondary'][2];

	primaryHue.querySelector('output').value = pageColors['primary'][0];
	primarySaturation.querySelector('output').value = pageColors['primary'][1];
	primaryLightness.querySelector('output').value = pageColors['primary'][2];
	secondaryHue.querySelector('output').value = pageColors['secondary'][0];
	secondarySaturation.querySelector('output').value = pageColors['secondary'][1];
	secondaryLightness.querySelector('output').value = pageColors['secondary'][2];

	document.documentElement.style.setProperty('--color1', `hsl(${pageColors['primary'][0]}deg, ${pageColors['primary'][1]}%, ${pageColors['primary'][2]}%)`);
	document.documentElement.style.setProperty('--color2', `hsl(${pageColors['secondary'][0]}deg, ${pageColors['secondary'][1]}%, ${pageColors['secondary'][2]}%)`);
}
initPageColors();

// Update page primary and secondary colors
function updatePageColor(color, index, value) {
	pageColors[color][index] = parseInt(value);
	document.documentElement.style.setProperty('--color1', `hsl(${pageColors['primary'][0]}deg, ${pageColors['primary'][1]}%, ${pageColors['primary'][2]}%)`);
	document.documentElement.style.setProperty('--color2', `hsl(${pageColors['secondary'][0]}deg, ${pageColors['secondary'][1]}%, ${pageColors['secondary'][2]}%)`);
}

// Light and dark mode
let colorMode = 'light';
function changeColorMode() {
	const body = document.querySelector('body');
	if (colorMode == 'light') {
		colorMode = 'dark';
	} else {
		colorMode = 'light';
	}
	body.dataset.mode = colorMode;
}

// Toggle element outlines
let outlines = false;
function toggleOutlines() {
	const body = document.querySelector('body');
	if (outlines) {
		outlines = false;
	} else {
		outlines = true;
	}
	body.dataset.outlines = outlines;
}

// Reset pagewide visual settings
function resetPageSettings() {
	const body = document.querySelector('body');
	colorMode = 'light';
	body.dataset.mode = colorMode;
	outlines = false;
	body.dataset.outlines = outlines;
	pageColors = structuredClone(pageColorsBackup);
	initPageColors();
}

// Open and close page color settings
function openPageSettings() {
	const pageSettingsToggle = document.querySelector('.controls-toggle');
	const pageSettingsMenu = document.querySelector('.controls');
	pageSettingsToggle.dataset.active = 0;
	pageSettingsMenu.dataset.active = 1;
}
function closePageSettings() {
	const pageSettingsToggle = document.querySelector('.controls-toggle');
	const pageSettingsMenu = document.querySelector('.controls');
	pageSettingsToggle.dataset.active = 1;
	pageSettingsMenu.dataset.active = 0;
}