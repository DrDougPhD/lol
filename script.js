var cycle = [
	'|',       // |
	'\\',      // \
	'&#8210;', // ‒
	'&#8767;', // ∿
	'&#8210;', // ‒
	'/'        // /
];
var i = 0;
var arms;

function flail() {
	i++;
	arms[1].innerHTML = cycle[6-i];
	i %= 6;
	arms[0].innerHTML = cycle[i];
};

window.onload = function() {
	arms = document.getElementsByTagName('span');
	flail();
	window.setInterval(flail, 250);
};
