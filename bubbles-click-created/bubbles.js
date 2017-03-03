function Bubble(x, y) {
  this.x = x,
  this.y = y,
  this.diameter = 35;

  this.display = function() {
    fill(0, 0, 200, 200);
    stroke(255);
    strokeWeight(3);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  },

  this.move = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
}
