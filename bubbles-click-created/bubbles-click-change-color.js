//empty array to eventually fill with bubble objects when the user clicks.
var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 50; i++) {
    bubbles.push(new Bubble(random(0,width), random(0,height)));
  }
}

//to create bubbles whne the user clicks
function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  background(0);
  //loops through the array of bubble objects to create and move them
  bubbles.forEach(function(bubble){
    bubble.display();
    bubble.move();
  })
}
