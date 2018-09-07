window.onload = init;

function init() {
	var map = document.getElementById("map");
	map.onmousemove = showCoords;
};

function showCoords(event) {
	var coords = document.getElementById("coords")

	var xPoint = event.clientX;
	var yPoint = event.clientY;

	coords.innerHTML = "Współrzędne na mapie: " + xPoint + ", " + yPoint; 
}