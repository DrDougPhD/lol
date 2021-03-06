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

/* Google analytics, 'cause I'm watching you */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-80565060-3', 'auto');
ga('send', 'pageview');
