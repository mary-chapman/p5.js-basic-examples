//constructor function: purpose is to generate an object
function Bubble(x, y, index) {
  this.x = x;
  this.y = y;
  this.diameter = 48;
  this.col = color(255,100);

  this.display = function() {
    stroke(255);
    strokeWeight(2);
    fill(this.col);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  },

  //function to figure out if mouseclick is within the circle
  this.clicked = function() {
    //figure out the distance from the x and y chords of the circle and the x and y chords of the mouseclick
    var d = dist(mouseX, mouseY, this.x, this.y);
    var radius = this.diameter/2;
    if (d < radius) {
      this.col = color(255, 0, 200);
    }
  },

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1)
  }

}
