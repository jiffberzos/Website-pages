//Making a webpage with the mandelbrot heart in the centre
// Connect the ith position to the i + n, where n increments for each connection


var factor = 1;
var total = 10;
var pos = 0;



function preload(){
  font = loadFont(fontfile); 
}  
function mouseWheel(event) {
  if(total<500){
		total += 5;
  }
	if(event.delta<0){
    pos += event.delta;
  }
  if((pos/3)<height+90 && event.delta>0){
    pos += event.delta;
}
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER);
	
}

function draw() {
  factor += 0.01;
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  fill(0);
  ellipse(0, 0, height - 10, height - 10);
  theta = TWO_PI / total;
  r = height / 2 -5;
  //circle_points();
  connect();
  blackbar();
  console.log((pos/3)-height-100, height/2);
}

function circle_points() {
  for (i = 0; i < total; i++) {
    let x = r * cos(i * theta);
    let y = r * sin(i * theta);
    stroke(255);
    fill(255);
    ellipse(x, y, 5, 5);
    
  }
}
  
function connect(){
  for(i = 0; i<total; i++){
    a = i;
    b = factor * i;
    let ax = r * cos(a * theta);
    let ay = r * sin(a * theta);
    let bx = r * cos(b * theta);
    let by = r * sin(b * theta);
    line(ay,ax,by,bx)
	}
}

function blackbar(){
  fill(0);
  stroke(0);
  rect(0, (pos/3)-height-100, 2*width/3, 50);
  fill(255);
  textFont(font);
  textSize(30);
	text("TED BENNETT", 0, (pos/3)-height-90);	
  
    
}