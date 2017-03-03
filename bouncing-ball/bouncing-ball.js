var x = 0;
var speed = 2;

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(0);
  fill(0, 100, 200);
  stroke(255);
  strokeWeight(4);
  var ball = ellipse(x, 100, 50, 50);
  //each draw loop, the ball increases its distance
  x += speed;

  //if the ball's x position is greater than the end of the canvas or less than the begininng of the canvas, the balls changes its direction.
  if (x > width || x < 0 ) {
    speed *= -1;
  }

}
