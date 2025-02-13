class Particle {
    constructor(_x, _y, img, type) {
      this.position = createVector(_x, _y)
      this.size = 60
      this.img = img
      
      this.velocity = p5.Vector.random2D()
      this.velocity.setMag(random(1.5, 2))
      
      this.checkContact = false
      this.type = type
      
      this.startTime = millis()
      this.noContactTime = 5000
      
      if (this.type === 'P') {
        this.allowedTypes = ['O', 'R']
      } else if (this.type === 'R') {
        this.allowedTypes = ['P', 'O']
      } else if (this.type === 'O') {
        this.allowedTypes = ['P', 'R', 'O']
      } else if (this.type === 'T') {
        this.allowedTypes = ['O']}
    }
    
    display() {
      push()
      fill(0)
      noStroke()
      circle(this.position.x, this.position.y, this.size)
      noFill()
      imageMode(CENTER)
      image(this.img, this.position.x, this.position.y, this.size * 0.7 ,this.size * 0.7)
      pop()
    }
    
    move(){
      this.position.add(this.velocity)
      if(
        this.position.x -this.size/2 <=0 || this.position.x + this.size/2 >=width){
        this.velocity.x *= -1
        this.position.x = constrain(this.position.x, this.size / 2, width - this.size / 2)
      } 
      if(
        this.position.y -this.size/2 <=0 || this.position.y + this.size/2 >=height){
        this.velocity.y *= -1
        this.position.y = constrain(this.position.y, this.size / 2, height - this.size / 2)
      } 
   }
  
    contact(_those){
      _those.forEach((that)=>{
        if (this.allowedTypes.includes(that.type) && 
            that.allowedTypes.includes(this.type) && 
            millis() - this.startTime > this.noContactTime) {
          let distance = dist (this.position.x, this.position.y, that.position.x, that.position.y)
  
          
          if (distance <= this.size ){
            let averageVel = p5.Vector.lerp(this.velocity, that.velocity, 1)
            this.velocity = averageVel
            that.velocity = averageVel
            this.checkContact = true
            that.checkContact = true
          }
      }
    })
    }
  }