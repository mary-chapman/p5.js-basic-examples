//constructor function: purpose is to generate an object
function Bubble(x, y, lifespan) {
  this.x = x;
  this.y = y;
  this.diameter = 48;
  this.lifespan = lifespan;
  this.display = function() {
    stroke(this.lifespan);
    strokeWeight(2);
    fill(0, this.lifespan, 0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  },
  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    this.lifespan = this.lifespan - .1;
  },
  this.isFinished = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }


}
