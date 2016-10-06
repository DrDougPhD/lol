var arm = [
  '|',       // |
  '\\',      // \
  '&#8210;', // ‒
  '&#8767;', // ∿
  '&#8210;', // ‒
  '/'        // /
];
var i = 0;
var l,r;

function flail() {
  i++;
  r.innerHTML = arm[6-i];
  i %= 6;
  l.innerHTML = arm[i];
};

window.onload = function() {
  l = document.getElementById('l');
  r = document.getElementById('r');
  flail();
  window.setInterval(flail, 250);
};
