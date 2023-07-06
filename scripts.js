let c1, c2, c3, c4, c5;
const themes = [`coral`, `forest`, `viridian`, `valentine`, `punch`];

function setup() {
	createCanvas(windowWidth - 20, windowHeight - 20);

	const random = Math.floor(Math.random() * 5);
	let theme = themes[random];
	c1 = loadImage(`./assets/themes/${theme}/${theme}-1.svg`);
	c2 = loadImage(`./assets/themes/${theme}/${theme}-2.svg`);
	c3 = loadImage(`./assets/themes/${theme}/${theme}-3.svg`);
	c4 = loadImage(`./assets/themes/${theme}/${theme}-4.svg`);
	c5 = loadImage(`./assets/themes/${theme}/${theme}-5.svg`);
	background(`white`);
}

function draw() { }

function keyPressed() {
	let randomX;
	let randomY;
	
	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	image(c1, randomX, randomY, 50, 50);
	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	image(c2, randomX, randomY, 50, 50);
	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	image(c3, randomX, randomY, 50, 50);
	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	image(c4, randomX, randomY, 50, 50);
	randomX = Math.floor(Math.random() * windowWidth);
	randomY = Math.floor(Math.random() * windowHeight);
	image(c5, randomX, randomY, 50, 50);
}