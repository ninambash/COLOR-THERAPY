console.log("hello World")
////connecting DOM elements
const gameColors = ["red","blue","green","yellow"]
const message = document.querySelector(".message")
const gamearea = document.querySelector(".gamearea")
const button = document.querySelector("button")
let gameClicks = []
let userClicks = []
let inPlay = false
let playNum = 5

///add event listeners 
window.addEventListener("load",setup)
button.addEventListener("click",function(){
  if(!inPlay){
    player()
  }
 })
 function player(){
   button.disabled = true
   button.style.display = 'none'
   player()
   gameClicks = []
   userClicks = []
   runSequence(playNum)
       
 }
 function runSequence(num){
  let squares = document.querySelectorAll(".box")
  num--
  if(num < 0){
    inPlay = true
    return 
  }
  let randomNum = Math.floor(Math.random() * gameColors.length)
  console.log(squares[randomNum])
  gameClicks.push(gameColors[randomNum])
  console.log(gameClicks)
  squares[randomNum].style.opacity = "1"
  setTimeout(function(){
    squares[randomNum].style.opacity = "0.5"
    setTimeout(function(){
      runSequence(num)

    },100)
  },500)

}
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
function checkAnswer(e){
  if(inPlay){
    let el = e.target
    userClicks.push(el.myColor)
    el.style.opacity = "1"
    setTimeout(function(){
      el.style.opacity = "0.5"
    },500)
    if(userClicks.length == gameClicks.length){
      inPlay = false
      endGame()
    }

  }
  console.log(userClicks)
}
////user message function
function messager(mes){
  message.innerHTML = mes
}

//////end game function
function endGame(){
  console.log("game over")
  button.disabled = false
  button.style.display = "blockS"
  if(userClicks.toString() == gameClicks.toString()){
    playNum++
    messager("Match Pattern")
    console.log("correct")
  }else{
    console.log("not correct")
  }
}
function eleFactory(elType){
  let ele = document.createElement(elType)
  return ele
}