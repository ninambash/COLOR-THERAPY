console.log("hello World")
////connecting DOM elements
const gameColors = ["red","blue","green","yellow"]
const message = document.querySelector(".message")
const gamearea = document.querySelector(".gamearea")
const button = document.querySelector("button")

///add event listeners 
window.addEventListener("load",setup)
///create a function for set up
function setup(){
  //check if its working
  console.log("page Loaded")
  for(let X = 0; X < gameColors.length; X++){
    let div = eleFactory("div")
    div.style.backgroundColor = gameColors[X]
    div.classList.add("box")
    div.style.opacity = "0.5"
    div.myColor = gameColors[X]
    div.addEventListener("click",checkAnswer)
    gamearea.appendChild(div)
  }
}