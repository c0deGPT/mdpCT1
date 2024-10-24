let fishes = []
let sharks = []

//UI
let hungerRadio
let hungerValue

function setup() {
  let theCanvas = document.getElementById("myCanvas")
  createCanvas(windowWidth-350, windowHeight-100,theCanvas);
  colorMode(HSB, TWO_PI,1,1)
  
  hungerRadio = createRadio()
  hungerRadio.position ((windowWidth -hungerRadio.width)/2, height + 40)
  hungerRadio.size(60)
  
  hungerRadio.option('Full')
  hungerRadio.option('Hungry')
  
  hungerRadio.selected('Full')
  
  let fishNumber = 30
  for (let i = 0; i < fishNumber; i++) {
    let x = random(width)
    let y = random(height)
    fishes.push(new Fish(x, y))
  }
  
  let sharkNumber = 5
  for (let s = 0; s < sharkNumber; s++) {
    let x2 = random(width)
    let y2 = random(height)
    sharks.push(new Shark(x2, y2))
  }
}

function draw() {
  background(0)
  
  fishes.forEach((f)=>{
    f.move()
    f.display()
    f.mating(fishes)
  })
  
    sharks.forEach((s)=>{
    s.move()
    s.display()
    
    let hungerValue = hungerRadio.value()
    if (hungerValue === 'Hungry') {
      for (let i = fishes.length - 1; i >= 0; i--) {
        let fish = fishes[i];
        let distance = dist(s.position.x, s.position.y, fish.position.x, fish.position.y)
      
        if (distance < s.radius + fish.radius) {
          fishes.splice(i, 1);
        }
      }
    }
  })
}
