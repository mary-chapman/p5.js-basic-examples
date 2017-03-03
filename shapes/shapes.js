
function setup() {
  createCanvas(200, 200);
}

function draw() {
  //canvas background
  background(0);

  //shape fill
  fill(0, 255, 100, 200);

  //shape outline
  stroke(255);
  strokeWeight(2);

  //shapes
  ellipse(50, 50, 30, 30);
  point(140, 50, 160, 100);
  line(50, 100, 75, 150)
  rect(125, 100, 40, 40);
}
