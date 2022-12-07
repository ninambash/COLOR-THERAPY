console.log("hello World");
////connecting DOM elements
let  gameColors = ["red", "blue", "green", "yellow"];
const message = document.querySelector(".message");
const gamearea = document.querySelector(".gamearea");
const button = document.querySelector("button");
const resetbtn = document.querySelector(".play-again")
let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 5;

///add event listeners


 

resetbtn.addEventListener("click", function(){
 reset()
})
window.addEventListener("load",setup)
button.addEventListener("click", function () {
  if (!inPlay) {
    player();
  }
});

function player() {
  button.disabled = true;
  button.style.display = "none"
  messanger('Match Pattern')
  gameClicks = [];
  userClicks = [];
  runSequence(playNum);
}
function runSequence(num) {
  let squares = document.querySelectorAll(".box");
  num--;
  if (num < 0) {
    inPlay = true;
    return;
  }
  let randomNum = Math.floor(Math.random() * gameColors.length);
  console.log(squares[randomNum]);
  gameClicks.push(gameColors[randomNum]);
  console.log(gameClicks);
  squares[randomNum].style.opacity = "1";
  setTimeout(function () {
    squares[randomNum].style.opacity = "0.5";
    setTimeout(function () {
      runSequence(num);
    }, 100);
  }, 500);
}
///create a function for set up
function setup() {
  //check if its working
  console.log("page Loaded");
  for (let X = 0; X < gameColors.length; X++) {
    let div = eleFactory("div");
    div.style.backgroundColor = gameColors[X];
    div.classList.add("box");
    div.style.opacity = "0.5";
    div.myColor = gameColors[X];
    div.addEventListener("click", checkAnswer);
    gamearea.appendChild(div);
  }
}
//////////////this is where the user paticipates
function checkAnswer(e) {
  if (inPlay) {
    let el = e.target;
    userClicks.push(el.myColor);
    el.style.opacity = "1";
    setTimeout(function () {
      el.style.opacity = "0.5";
    }, 500);
    if (userClicks.length == gameClicks.length) {
      inPlay = false;
      endGame();
    }
  }
  console.log(userClicks);
}
function messanger(mes){
  message.innerHTML =mes
}
//////end game function
function endGame() {
  console.log("game over");
  button.disabled = false;
  button.style.display = "block"
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  if (userClicks.toString() == gameClicks.toString()) {
    playNum++; /////increase the play number if they got correct
    messanger('correct') ////let the player know status of the game if correct
  }else{
    messanger("Try again");
  }
  
}

function eleFactory(elType) {
  let ele = document.createElement(elType);
  return ele;
}
function reset(){
   gameClicks = [];
   userClicks = [];
    inPlay = false;
    playNum = 5;
    gameColors = ["red", "blue", "green", "yellow"]
    button.style.display = "block"
    button.style.opacity = "1"
    button.disabled = false

    ///add start btn remove hidden fron
  //setup()

}

