let x;
let y;
let xspeed;
let yspeed;
let dvd;

function preload(){
	dvd = loadImage(jiffdvd);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = random(width);
	y = random(height);
	xspeed = 10;
	yspeed = 10;
	frameRate(30);
}

function draw(){
	background(0);
	image(dvd,x,y);
	x += xspeed;
	y += yspeed;
	
	if(x >= width - dvd.width){
		xspeed = -xspeed;
		x = width - dvd.width;
	}
	else if(x <= 0){
		xspeed = -xspeed;
		x = 0;
	}
	if(y >= height - dvd.height){
		yspeed = -yspeed;
		y = height - dvd.height;
	}
	else if(y <= 0){
		yspeed = -yspeed;
		y = 0;
	}
  if((x >= width - dvd.width && y >= height - dvd.height) || 
     (x >= width - dvd.width && y <= 0) ||
     (x <= 0 && y >= height - dvd.height) ||
     (x <= 0 && y <= 0)){
     dvd = loadImage(jiffshook);
}
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}