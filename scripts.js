let redCrab;
let blueCrab;
let greenCrab;
let yellowCrab;

function setup() {
	createCanvas(windowWidth-20, windowHeight-20);
	redCrab = loadImage(`./assets/red.svg`);
	blueCrab = loadImage(`./assets/blue.svg`);
	greenCrab = loadImage(`./assets/green.svg`);
	yellowCrab = loadImage(`./assets/yellow.svg`);
	background(`white`);
}


function redCrabMove(img, x, y) {
	image(img, x, y, 50, 50);
}
function blueCrabMove(img, x, y) {
	image(img, x, y, 50, 50);
}
function greenCrabMove(img, x, y) {
	image(img, x, y, 50, 50);
}
function yellowCrabMove(img, x, y) {
	image(img, x, y, 50, 50);
}

function ai() {
	let randomX;
	let randomY;

	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	blueCrabMove(blueCrab, randomX, randomY);

	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	greenCrabMove(greenCrab, randomX, randomY);

	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	yellowCrabMove(yellowCrab, randomX, randomY);

	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	redCrabMove(redCrab, randomX, randomY);
}

// Draw happens EVERY FRAME
function draw() {}

// Handles all key press conditions
function keyPressed() {
	ai();
}