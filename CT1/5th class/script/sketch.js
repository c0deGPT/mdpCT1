let radius
let numCircles = 10
let strWeight = 20

let timerID
let backgroundColor

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB,TWO_PI,1,1)
  radius = width *0.1
  strokeCap(SQUARE)
  
  backgroundColor= color(0)
  timerID = setInterval(()=>{
    backgroundColor = color(random(TWO_PI), random(1), random(1))
  },2000)
}

function draw() {
  background(backgroundColor);
  strokeWeight(strWeight)
  noFill()
  translate(width/2,height/2)
  for(let i =0; i<numCircles; i++){
    push()
    rotate(sin(millis()*0.001*(i*0.5+1)))
    let diameter =  (i*strWeight*2)+radius*2
    stroke(TWO_PI/numCircles*i,1,1)
    arc(0,0, diameter, diameter, HALF_PI + QUARTER_PI, TWO_PI + QUARTER_PI)
    pop()
  }
}
  
function windowResize(){
    resizeCanvas(windowWidth, windowHeight);
}