//constructor function: purpose is to generate an object
function Bubble(x, y, index) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.col = color(200);

  this.changeColor = function() {
    this.col = color(random(200), 0, 100)
  },

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  this.display = function() {
    stroke(255)
    fill(this.col);
    //diameter is multiplied by the radius twice
    ellipse(this.x, this.y, this.r*2, this.r*2);
  },

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

}
