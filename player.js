// Toggle navigation slider
const nav = document.querySelector('.aside3')
const hamburger = document.querySelector('.menu')
const rhs = document.querySelector('.new')
function toggle(){
    if (nav.style.transform === "translateX(-700px)"){
        nav.style.transform = "translateX(0px)"
        nav.style.transition = "0.5s"

    } else {
        nav.style.transform = "translateX(-700px)"
  
    }
}
hamburger.addEventListener('click',toggle)

//First Chart Click Animation
const heart1 = document.querySelector('.heartt')
function tick(){
    if (heart1.style.fill === "none") {
        heart1.style.fill = "#facd66";
        heart1.style.background = "#7e6927"
    } else {
        heart1.style.fill = "none"
        heart1.style.background = "none"
        heart1.style.transition = "0.2s"
    }
}
heart1.addEventListener('click',tick)

//Second Chart Click Animation
const heart2 = document.querySelector('.hearttt')

function tock(){
    if (heart2.style.fill === "none") {
        heart2.style.fill = "#facd66";
        heart2.style.background = "#7e6927"
    } else {
        heart2.style.fill = "none"
        heart2.style.background = "none"
        heart2.style.transition = "0.4s"
    }
}
heart2.addEventListener('click',tock)

const heart3 = document.querySelector('.heart')

function tack(){
    if (heart3.style.fill === "none") {
        heart3.style.fill = "#facd66";
        heart3.style.background = "#7e6927"
    } else {
        heart3.style.fill = "none"
        heart3.style.background = "none"
        heart3.style.transition = "0.4s"
    }
}
heart3.addEventListener('click',tack)

var jolt = document.querySelector('audio')

function play(){
    jolt.play()
   
}
function pause(){    
        jolt.pause()    
        }




