//elements
let playButton = document.getElementById("playb")

let container = document.getElementById("center")

let choose = document.getElementById("choose")

let button1 = document.getElementById("button1")

let button2 = document.getElementById("button2")

let button3 = document.getElementById("button3")

let figureJumping = document.getElementById("figure-jumping")

let countDown = document.getElementById("countDown")

let keyboard = document.getElementById("keyboard")

let startCount = document.getElementById("startCount")

let game = document.getElementById("game")

let highScore = document.getElementById("highScore")

let infoText = document.getElementById("infoText")

let input = document.getElementById("input")

let scoreEl = document.getElementById("scoreEl")

let timeEl = document.getElementById("timeEl")

let gameOver = document.getElementById("gameOver")

let finalScore = document.getElementById("finalScore")

let menu = document.getElementById("menu")

let about = document.getElementById("about")

let backb = document.getElementById("backb")

let info = document.getElementById("info")    

//events
playButton.addEventListener("click", startGame)

function startGame() {
  container.style.display = "none"
  choose.style.display = "block"
  gameOver.style.display = "none"
  info.style.display = "none"
  about.style.display = "none"

}


button1.addEventListener("click", keyboardPart)
button2.addEventListener("click", gamePart)
button3.addEventListener("click", informationPart)
menu.addEventListener("click", startGame)
backb.addEventListener("click", startGame)




function keyboardPart() {
  let falseEl;
  choose.style.display = "none"
  figureJumping.style.display = "none"
  keyboard.style.display = "block"
  gameOver.style.display = "none"
  back.style.display = "block"

  let oneLetter = randLetter()
  let letterEl = document.getElementById(oneLetter)
  console.log(oneLetter)
  letterEl.classList.add("selected")
  mySound1 = new Audio("./assets/sounds/keyboard_sound1.m4a")
  // mySound2 = new Audio("./assets/sounds/wronganswer-37702.mp3")
  document.addEventListener("keyup", function (e) {
    if (e.code == oneLetter) {
      letterEl.classList.remove("selected")
      oneLetter = randLetter()
      letterEl = document.getElementById(oneLetter)
      letterEl.classList.add("selected")
      mySound1.play()
    } else {
      falseEl = document.getElementById(e.code)
      falseEl.classList.add("hit")
      mySound2.play()
    }
  })

}

function gamePart() {

  startCount.innerHTML = 3
  choose.style.display = "none"
  figureJumping.style.display = "none"
  countDown.style.display = "block"
  gameOver.style.display = "none"
  //back.style.display = "block"
  let id = setInterval(function time() {
    if (startCount.innerHTML == 0) {
      clearInterval(id)
      startCount.style.display = "none"
      game.style.display = "block"
      
      generalGame()

    } else {
      startCount.innerHTML = startCount.innerHTML - 1
    }
  }, 1000)

}

function informationPart() {
  choose.style.display = "none"
  figureJumping.style.display = "block"
  // back.style.display = "block"
  info.style.display = "block"   
  about.style.display = "block"      


}





function gameOverF() {
  gameOver.style.display = "block"
  finalScore.innerHTML = scoreEl.innerHTML


}

function generalGame() {
  //back.style.display = "block"
  let time = 5;
  let oneWord;
  let score = 0;
  let hScore;
  timeEl.innerHTML = time
  if (localStorage.length == 0) {
    localStorage.score = 0
  }
  hScore = localStorage.score

  oneWord = randWord()
  infoText.innerHTML = oneWord
  highScore.innerHTML = localStorage.score
  input.onchange = function () {
    if (input.value == oneWord) {
      score++;
      time += 4
      timeEl.innerHTML = time
      if (score >= hScore) {
        hScore = score
        localStorage.score = hScore
        highScore.innerHTML = hScore
      }
      scoreEl.innerHTML = score
      input.value = ""
      oneWord = randWord()
      infoText.innerHTML = oneWord


    } else {
      input.value = ""
      oneWord = randWord()
      infoText.innerHTML = oneWord
      time -= 2
      if(time>=0)
        timeEl.innerHTML = time
    }
  }
  let id = setInterval(function () {
    if (timeEl.innerHTML == 0) {
      clearInterval(id)
      gameOverF()
      // gameOver.style.display = "block"
      game.style.display = "none"

    } else {
      time--
        if(time>=0)
      timeEl.innerHTML = time
    }
  }, 1000)

}

function randWord() {
  let i = Math.floor(Math.random() * words.length)
  return words[i]
}

function randLetter() {
  let i = Math.floor(Math.random() * letter.length)
  console.log(i)
  return letter[i]
}




