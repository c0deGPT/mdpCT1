class Fish{
    constructor(_x ,_y){
     this.position = createVector(_x, _y)
     this.velocity = createVector(random (-2, 2) , random (-0.5, 0.5))
     this.velocity.setMag(random(2,3))
      
     this.radius = 15
     this.clr = color(random(PI , TWO_PI),0.8,0.8)
     this.friendliness = 40
      
     this.staying = false
     this.stayingTime = 1000
     this.beginStayingTime = 0
     
     this.fishCD = 2000
     this.canMating = true
     this.beginCD = 0
    }
   
   move(){
     if(!this.staying){
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
       this.position.x += random(-0.3, 0.3);
       this.position.y += random(-0.3, 0.3);
     }
     else{
       if(millis() - this.beginStayingTime >= this.stayingTime){
         this.staying = false
         this.velocity.mult(-1)
       }
     }
   }
   
   display(){
     noStroke()
     fill(this.clr)
     circle(this.position.x, this.position.y, this.radius * 2)
   }
   
   procreate(otherFish){
     if (!this.canMating) {
         if (millis() - this.beginCD < this.fishCD) {
             return
         } 
         this.canMating = true
     }
     
     let newFishPosition = p5.Vector.lerp(this.position, otherFish.position, 0.5)
     let newFish = new Fish(newFishPosition.x, newFishPosition.y)
     newFish.canMating = false
     newFish.beginCD = millis()
     fishes.push(newFish)
   }
   
   mating(_allOtherFishes){
     _allOtherFishes.forEach((otherFish)=>{
       let thisGender = hue(this.clr)
       let otherGender = hue(otherFish.clr)
       
         // judge the distance and gender
       if (this.position.dist(otherFish.position) > 0 &&
          this.position.dist(otherFish.position) <= this.friendliness){
          if ((thisGender >= PI && thisGender <= PI + PI/2) && 
              (otherGender >= PI + PI/2 && otherGender <= TWO_PI) || 
              (otherGender >= PI && otherGender <= PI + PI/2) && 
              (thisGender >= PI + PI/2 && thisGender <= TWO_PI)){
            
            // judge whether two fishes are moving towards each other, and if yes, they will speed up to get closer
              let direction = p5.Vector.sub(otherFish.position , this.position).normalize()
              if(this.velocity.dot(direction) >0 && otherFish.velocity.dot(direction) > 0){
                  this.velocity.add(direction.mult(-2))
                  otherFish.velocity.add(direction.mult(2))
                  
                  this.staying = true
                  otherFish.staying = true
                  this.beginStayingTime = millis()
                  otherFish.beginStayingTime = millis()
                
                  this.procreate(otherFish)
                  this.canMating = false
                  otherFish.canMating = false
                  this.beginCD = millis()
                  otherFish.beginCD = millis()
                  }
                }
            }
        })
                  this.separating(_allOtherFishes)
    }
 
    separating(_allOtherFishes) {
      _allOtherFishes.forEach((otherFish) => {
         if (otherFish !== this && this.position.dist(otherFish.position) < this.radius * 2) {
           let direction = p5.Vector.sub(this.position, otherFish.position).normalize()
           this.position.add(direction.mult(2))
            }
        })
    }
 }