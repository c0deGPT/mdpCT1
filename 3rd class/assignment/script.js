let buttonImage1 = document.getElementById("btnImage1")
let buttonImage2 = document.getElementById("btnImage2")
let buttonImage3 = document.getElementById("btnImage3")
let buttonImage4 = document.getElementById("btnImage4")
let hugeImage = document.getElementById("main-hugeImage").children[0]
let startButton = document.getElementById("btnstart")
let stopButton = document.getElementById("btnstop")

// image setting
const images = [
    "image/animal1.jpg",
    "image/animal2.jpg",
    "image/animal3.jpg",
    "image/animal4.jpg"
]

let currentImageIndex = 0

function changeImage(){
    currentImageIndex = (currentImageIndex + 1) % images.length
    hugeImage.src = images[currentImageIndex]
}


// interval setting
let intervalID

function startImageScroll(){
    if(!intervalID){
        intervalID = setInterval(changeImage, 1000)
    }
}

function stopImageScroll(){
    clearInterval(intervalID)
    intervalID = null
}


// button setting
buttonImage1.addEventListener("click", function(){
    if(hugeImage.src. includes("image/animal1.jpg")){
        hugeImage.src = "image/animal1.jpg"
    }
    else{
        hugeImage.src = "image/animal1.jpg"
    }
    stopImageScroll()
})

buttonImage2.addEventListener("click", function(){
    if(hugeImage.src. includes("image/animal2.jpg")){
        hugeImage.src = "image/animal2.jpg"
    }
    else{
        hugeImage.src = "image/animal2.jpg"
    }
    stopImageScroll()
})

buttonImage3.addEventListener("click", function(){
    if(hugeImage.src. includes("image/animal3.jpg")){
        hugeImage.src = "image/animal3.jpg"
    }
    else{
        hugeImage.src = "image/animal3.jpg"
    }
    stopImageScroll()
})

buttonImage4.addEventListener("click", function(){
    if(hugeImage.src. includes("image/animal4.jpg")){
        hugeImage.src = "image/animal4.jpg"
    }
    else{
        hugeImage.src = "image/animal4.jpg"
    }
    stopImageScroll()
})

startButton.addEventListener("click",startImageScroll)
stopButton.addEventListener("click",stopImageScroll)


startImageScroll()


