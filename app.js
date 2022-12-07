console.log("hello World");
////connecting DOM elements
let  gameColors = ["red", "blue", "green", "yellow"];
const message = document.querySelector(".message");
const gamearea = document.querySelector(".gamearea");
const button = document.querySelector("button");
const resetbtn = document.querySelector(".play-again")
////////////////Adding Global varriables 4 
let gameClicks = []; //////array that the game can use to store the clickable array
let userClicks = []; /////we populate as the user plays
let inPlay = false; ///// ability to disable the game
let playNum = 1; //// this increases the number of colors to advance in the game. We start from one and see how far a player will go

///add event listeners
resetbtn.addEventListener("click", function(){
 reset()
})
window.addEventListener("load",setup) 
button.addEventListener("click", function () {
  if (!inPlay) {
    player(); ///////////////check if the inplay is false
  }
});

function player() {
  button.disabled = true; //////can't press the start button again once the gane starts 
  button.style.display = "none"
  messanger('Match Pattern')
  gameClicks = [];  ////launch a new game 
  userClicks = [];
  runSequence(playNum);   /////call the run sequence function
}

//////run sequence function 
function runSequence(num) {
  let squares = document.querySelectorAll(".box");
  num--;
  if (num < 0) { //////// check if the value of num is less than 0 and run through the sequence 
    inPlay = true; ///////this allows user to only build their sequence after the sequence has run to avoid cheating 
    return;
  }
  /////////////////////////////////user mimic this using a random color 
  let randomNum = Math.floor(Math.random() * gameColors.length);
  console.log(squares[randomNum]);
  gameClicks.push(gameColors[randomNum]);
  console.log(gameClicks);
  squares[randomNum].style.opacity = "1";
  setTimeout(function () {
    squares[randomNum].style.opacity = "0.5";
    setTimeout(function () { //////////set timeout function
      runSequence(num);
    }, 100);
  }, 500);
}
///create a function for set up    /////2///////////////////
function setup() {
  //check if its working
  console.log("page Loaded");
  for (let X = 0; X < gameColors.length; X++) {
    let div = eleFactory("div");
    div.style.backgroundColor = gameColors[X];  ////added the colors here
    div.classList.add("box");
    div.style.opacity = "0.5"; /////////// so that its not so bright 
    div.myColor = gameColors[X];
    div.addEventListener("click", checkAnswer);  /////added event listener for the four boxex(divs) here
    gamearea.appendChild(div); ///////append the element to the game area
  }
}
///this is where the user paticipates
function checkAnswer(e) {
  if (inPlay) {
    let el = e.target ///////getting the element information  3
    userClicks.push(el.myColor); /////// 
    el.style.opacity = "1"; /////make it full color
    setTimeout(function () {
      el.style.opacity = "0.5"; /////
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
//////function to generate the elemennts   2
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

