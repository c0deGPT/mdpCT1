class Box {
    constructor(x, y, img) {
      this.x = x - width /2
      this.y = y - height /2
      this.z = random(-200, 200)
      this.size = 100
      this.img = img
    }
    
    display() {
      push();
      translate(this.x, this.y, this.z);
      texture(this.img);
      box(this.size);
      pop()
    }
    
  }