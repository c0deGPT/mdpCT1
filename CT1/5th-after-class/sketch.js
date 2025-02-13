let penLength = 100
let circleRadius = 30
let posX, posY,penPosX,penPosY,penAngle

let timerID
let ballPosX, ballPosY, velX,velY
let ballGenerate = []
let radius = 40

function setup() {
  let theCanvas = document.getElementById("myCanvas")
  createCanvas(800,600,theCanvas)
  posX = width/2
  posY = height/2
  penAngle = TWO_PI
  
  timerID = setInterval(()=>{
    ballPosX = random(width-100); 
    ballPosY = random(height-100);
    velX = random(-20, 20);
    velY = random(-20, 20);
    ballGenerate.push({ x : ballPosX, y : ballPosY, velX : velX, velY: velY})
  }, 1670)
  }

function draw() {
  background(220,50)
  noStroke()
  fill(253, 85, 0)
  circle(width/2, height/2, 250)
  
  stroke(0)
  penAngle = sin(millis()*0.002)
  penPosX = posX + penLength * sin(penAngle)
  penPosY = posY + penLength * cos(penAngle)
  stroke(220)
  line(posX, posY, penPosX, penPosY)
  noStroke()
  fill(220)
  circle(penPosX, penPosY, circleRadius)

  fill(253, 85, 0)
  for (let ball of ballGenerate){
  ball.x += ball.velX
  ball.y += ball.velY
  
    if(ball.x - radius <= 0 || ball.x + radius>= width ){
      ball.velX = ball.velX*-1
    }
    
    if(ball.y - radius <= 0 || ball.y + radius>= height ){
      ball.velY *= -1
    }
  circle(ball.x, ball.y, radius)
  }
  
}