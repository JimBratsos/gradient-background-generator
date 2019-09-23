var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.createElement("button");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function defaultValue(){
	color1.setAttribute("value", "#ff0000");
	color2.setAttribute("value", "#ffff00");
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomizedBtn(){
	btn.innerHTML = "Surprise Me";
	document.body.appendChild(btn);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

randomizedBtn();

defaultValue();

setGradient();

btn.onclick = function(){
	var rcol1 = getRandomColor();
	var rcol2 = getRandomColor();
	color1.setAttribute("value",rcol1);
	color2.setAttribute("value",rcol2);
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
