var balls = new Array();

function setup() {
  createCanvas(800,480);
  
  for(var i=0; i < 10; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(90,90,255);
  for(var i=0; i < balls.length; i++) {
    balls[i].move();
    balls[i].display();
  }
}

function Ball(x, y) {
  this.x = x || random(0,width);
  this.y = y || random(0,height);
  this.display = function() {
    stroke(255);
    noFill();
    ellipse(this.x, this.y, 25, 25);
  } 
  this.move = function() {
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
  }
}

function mousePressed() {
  balls.push(new Ball(mouseX,mouseY));  
}