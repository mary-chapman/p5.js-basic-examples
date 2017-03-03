//empy array to stor Bubble objects
var bubbles = []

function setup() {
  createCanvas(600, 400);
  //to create 50 new bubbles
  for (var i = 0; i < 50; i++) {
    var x = random(width);
    var y = random(height);
    bubbles.push(new Bubble(x, y));
  }
}
function draw() {
  background(0);
  //iterates thru the array of objects to move and display the bubbles
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }

}
//to change color when the mouse is pressed
function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}
