var css = document.querySelector('h3');
var color1 = document.querySelector("input[name='color1']");
var color2 = document.querySelector("input[name='color2']");
var body = document.querySelector('body');

function bgColors() {
	body.style.background = 'linear-gradient(to right,' + color1.value + ', ' + color2.value + ')';
	css.textContent = body.style.background + ';';
}

color1.addEventListener('input', bgColors);
color2.addEventListener('input', bgColors);

// EXERCISE
