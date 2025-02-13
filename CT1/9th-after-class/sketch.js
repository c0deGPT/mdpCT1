let particles = []
let textures = []

let handPose
let video
let pinchCheck = false
let hands = []

function preload(){
  textures[0] = loadImage('images/P.png')
  textures[1] = loadImage('images/O.png')
  textures[2] = loadImage('images/R.png')
  textures[3] = loadImage('images/T.png')
  handPose = ml5.handPose()
}

function setup(){
  let theCanvas = createCanvas(800, 600)
  theCanvas.parent("theCanvas")
  video = createCapture(VIDEO)
  video.size(800, 600)

  video.hide()
  handPose.detectStart(video, gotHands)
}

function draw() {
  background(220)
  particles.forEach((p)=>{
    p.display()
    p.move()
    p.contact(particles)
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
          let poseX= constrain(thumbTip.x, 0, width) 
          let poseY= constrain(thumbTip.y, 0, height)
          
        let particleType = '';
        if (randomTexture === textures[0]) {
          particleType = 'P';
        } else if (randomTexture === textures[1]) {
          particleType = 'O';
        } else if (randomTexture === textures[2]) {
          particleType = 'R';
        } else if (randomTexture === textures[3]) {
          particleType = 'T';
        }
          particles.push(new Particle(poseX, poseY, randomTexture, particleType));
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
