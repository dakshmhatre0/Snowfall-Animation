function setup() {
  createCanvas(1920,1080);
  createSprite(400, 200, 50, 50);
}

function preload(){
  snow3 = loadImage("snow3.jpg")
}

function draw() {
  background(snow3);  
  drawSprites();
}