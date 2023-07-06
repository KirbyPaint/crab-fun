let c1, c2, c3, c4, c5;

function setup() {
	createCanvas(windowWidth - 20, windowHeight - 20);

	const random = Math.floor(Math.random() * 5);
	switch (random) {
		case 0:
			console.log(`Coral`)
			c1 = loadImage(`./assets/themes/coral/coral-1.svg`);
			c2 = loadImage(`./assets/themes/coral/coral-2.svg`);
			c3 = loadImage(`./assets/themes/coral/coral-3.svg`);
			c4 = loadImage(`./assets/themes/coral/coral-4.svg`);
			c5 = loadImage(`./assets/themes/coral/coral-5.svg`);
			break;
		case 1:
			console.log(`Forest`)
			c1 = loadImage(`./assets/themes/forest/forest-1.svg`);
			c2 = loadImage(`./assets/themes/forest/forest-2.svg`);
			c3 = loadImage(`./assets/themes/forest/forest-3.svg`);
			c4 = loadImage(`./assets/themes/forest/forest-4.svg`);
			c5 = loadImage(`./assets/themes/forest/forest-5.svg`);
			break;
		case 2:
			console.log(`Viridian`)
			c1 = loadImage(`./assets/themes/viridian/viridian-1.svg`);
			c2 = loadImage(`./assets/themes/viridian/viridian-2.svg`);
			c3 = loadImage(`./assets/themes/viridian/viridian-3.svg`);
			c4 = loadImage(`./assets/themes/viridian/viridian-4.svg`);
			c5 = loadImage(`./assets/themes/viridian/viridian-5.svg`);
			break;
		case 3:
			console.log(`Valentine`)
			c1 = loadImage(`./assets/themes/valentine/valentine-1.svg`);
			c2 = loadImage(`./assets/themes/valentine/valentine-2.svg`);
			c3 = loadImage(`./assets/themes/valentine/valentine-3.svg`);
			c4 = loadImage(`./assets/themes/valentine/valentine-4.svg`);
			c5 = loadImage(`./assets/themes/valentine/valentine-5.svg`);
			break;
		case 4:
			console.log(`Punch`)
			c1 = loadImage(`./assets/themes/punch/punch-1.svg`);
			c2 = loadImage(`./assets/themes/punch/punch-2.svg`);
			c3 = loadImage(`./assets/themes/punch/punch-3.svg`);
			c4 = loadImage(`./assets/themes/punch/punch-4.svg`);
			c5 = loadImage(`./assets/themes/punch/punch-5.svg`);
			break;
	}
	background(`white`);
}

function crabMove(img, x, y) {
	image(img, x, y, 50, 50);
}

function ai() {
	let randomX;
	let randomY;

	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	crabMove(c1, randomX, randomY);
	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	crabMove(c2, randomX, randomY);
	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	crabMove(c3, randomX, randomY);
	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	crabMove(c4, randomX, randomY);
	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	crabMove(c5, randomX, randomY);
}

// Draw happens EVERY FRAME
function draw() { }

// Handles all key press conditions
function keyPressed() {
	ai();
}