var left = document.createElement("span"),
    right = document.createElement("span"),
    i = 0,
    cycle = ['|', '\\', '&#8210;', '&#8767;', '&#8210;', '/'];

function flail() {
	i++;
	right.innerHTML = cycle[6-i];
	i %= 6;
	left.innerHTML = cycle[i];
};

window.onload = function() {
	var div = document.createElement("div");

	div.appendChild(left);
	div.appendChild(
		document.createTextNode("o")
	);
	div.appendChild(right);
	document.getElementById("inner").appendChild(div);

	flail();
	window.setInterval(flail, 250);
};
