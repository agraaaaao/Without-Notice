// Nav
function toggleNav() {
	const nav = document.querySelector('.nav');
	if (parseInt(nav.dataset.active) == 1) {
		nav.dataset.active = 0;
	} else {
		nav.dataset.active = 1;
	}
}