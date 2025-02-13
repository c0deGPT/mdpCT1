class Shark{
    constructor(_x ,_y){
     this.position = createVector(_x, _y)
     this.velocity = createVector(random (-2, 2) , random (-2, 2))
     this.velocity.setMag(random(1,2))
      
     this.radius = 50
     this.clr = color(TWO_PI,0.8,0.8)
     this.friendliness = 40
      
     this.angleRotate = 0
     this.rotationSpeed = random(-0.08, 0.08);
    }
   
   move(){
     this.position.add(this.velocity)
     if(
       this.position.x -this.radius <=0||
       this.position.x + this.radius >=width){
       this.velocity.x *= -1
     }
     if(
       this.position.y -this.radius <=0||
       this.position.y + this.radius >=height){
       this.velocity.y *= -1
     }
   }
   
   display(){
     noStroke()
     fill(this.clr)
     
     this.angleRotate += this.rotationSpeed
     arc(this.position.x, this.position.y, this.radius * 2, this.radius * 2, this.angleRotate, this.angleRotate + PI + HALF_PI)
   }
 }