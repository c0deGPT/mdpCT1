let boxes = []
let textures = []

let handPose
let video
let pinchCheck = false
let hands = []

function preload(){
  textures[0] = loadImage('images/E.png')
  textures[1] = loadImage('images/X.png')
  textures[2] = loadImage('images/P.png')
  textures[3] = loadImage('images/O.png')
  textures[4] = loadImage('images/R.png')
  textures[5] = loadImage('images/T.png')
  handPose = ml5.handPose()
}

function setup(){
  let theCanvas = createCanvas(800, 600, WEBGL)
  theCanvas.parent("theCanvas")
  video = createCapture(VIDEO)
  video.size(320, 240)

  video.hide()
  handPose.detectStart(video, gotHands)
}

function draw() {
  background(220)
  boxes.forEach((b)=>{
    b.display()
  })
}

function pinchDistance(){
    if (hands.length > 0){
    let hand = hands[0]
   if (hand.keypoints && hand.keypoints.length > 8){
      let thumbTip = hand.keypoints[4]
      let pointerTip = hand.keypoints[8]
      let distance = dist(thumbTip.x, thumbTip.y, pointerTip.x, pointerTip.y)

      let pinchThreshold= 60
      if (distance < pinchThreshold && !pinchCheck){
          let randomTexture = textures[int(random(textures.length))];
          let randomX = random(0, width)
          let randomY = random(0, height)
          boxes.push(new Box(randomX, randomY, randomTexture));
          pinchCheck = true
      } else if(distance >= pinchThreshold){
          pinchCheck = false}
    } 
  } 
}
function gotHands(results){
  hands = results
  pinchDistance()
}

function mouseReleased() {
  let randomTexture = textures[int(random(textures.length))]
  boxes.push(new Box(mouseX, mouseY, randomTexture))
}
