let c1, c2, c3, c4, c5;
const themes = [`coral`, `forest`, `viridian`, `valentine`, `punch`];
function setup() {
	createCanvas(windowWidth - 5, windowHeight - 5);
	const random = Math.floor(Math.random() * 5);
	let theme = themes[random];
	c1 = loadImage(`./assets/themes/${theme}/${theme}-1.svg`);
	c2 = loadImage(`./assets/themes/${theme}/${theme}-2.svg`);
	c3 = loadImage(`./assets/themes/${theme}/${theme}-3.svg`);
	c4 = loadImage(`./assets/themes/${theme}/${theme}-4.svg`);
	c5 = loadImage(`./assets/themes/${theme}/${theme}-5.svg`);
}
function keyPressed() {
	const randomX = Array.from({ length: 5 }, () => Math.floor(Math.random() * windowWidth));
	const randomY = Array.from({ length: 5 }, () => Math.floor(Math.random() * windowHeight));
	image(c1, randomX[0], randomY[0], 50, 50);
	image(c2, randomX[1], randomY[1], 50, 50);
	image(c3, randomX[2], randomY[2], 50, 50);
	image(c4, randomX[3], randomY[3], 50, 50);
	image(c5, randomX[4], randomY[4], 50, 50);
}