"use strict"

const newGame = document.getElementsByClassName("new-game")[0]
const reset = document.getElementsByClassName("reset")[0]
const square = document.getElementsByClassName("square")
const cross = document.getElementsByClassName("cross")
const nuts = document.getElementsByClassName("nuts")
const scorePlayer1 = document.getElementsByClassName("score-player1")[0]
const scorePlayer2 = document.getElementsByClassName("score-player2")[0]
const right = document.getElementsByClassName("right")[0]
const left = document.getElementsByClassName("left")[0]
const player1 = document.querySelector(".indicator-cross p")
const player2 = document.querySelector(".indicator-nuts p")
const trophy = document.getElementsByClassName("trophy")
const draw = document.getElementsByClassName("draw")[0]

let score1 = 0
let score2 = 0
let activePlayer = 1

const clicked = []

const clickRefresh = () => {
  for (let i = 0; i < 9; i++) {
    clicked[i] = false
  }
}

const init = () => {
  scorePlayer1.innerText = score1
  scorePlayer2.innerText = score2
  const clickRefresh = () => {
    for (let i = 0; i < 9; i++) {
      clicked.push(false)
    }
  }
}

init()
;[...square].forEach((sq, idx) => {
  sq.addEventListener("click", function () {
    if (!clicked[idx]) {
      if (activePlayer === 1) {
        sq.innerHTML = `<ion-icon name="close-outline" class="square-icon cross"></ion-icon>`
        clicked[idx] = true
        activePlayer = 2
        console.log(activePlayer)
        console.log([...cross])
        checkWinner()
      } else if (activePlayer === 2) {
        sq.innerHTML = `<ion-icon name="ellipse-outline" class="square-icon nuts"></ion-icon>`
        clicked[idx] = true
        activePlayer = 1
        console.log(activePlayer)
        checkWinner()
      }
    }
  })
})

const checkWinner = () => {
  console.log([...square][0].innerHTML.includes("close-outline"))

  if (
    ([...square][0].innerHTML.includes("close-outline") &&
      [...square][1].innerHTML.includes("close-outline") &&
      [...square][2].innerHTML.includes("close-outline")) ||
    ([...square][3].innerHTML.includes("close-outline") &&
      [...square][4].innerHTML.includes("close-outline") &&
      [...square][5].innerHTML.includes("close-outline")) ||
    ([...square][6].innerHTML.includes("close-outline") &&
      [...square][7].innerHTML.includes("close-outline") &&
      [...square][8].innerHTML.includes("close-outline")) ||
    ([...square][0].innerHTML.includes("close-outline") &&
      [...square][3].innerHTML.includes("close-outline") &&
      [...square][6].innerHTML.includes("close-outline")) ||
    ([...square][1].innerHTML.includes("close-outline") &&
      [...square][4].innerHTML.includes("close-outline") &&
      [...square][7].innerHTML.includes("close-outline")) ||
    ([...square][2].innerHTML.includes("close-outline") &&
      [...square][5].innerHTML.includes("close-outline") &&
      [...square][8].innerHTML.includes("close-outline")) ||
    ([...square][0].innerHTML.includes("close-outline") &&
      [...square][4].innerHTML.includes("close-outline") &&
      [...square][8].innerHTML.includes("close-outline")) ||
    ([...square][2].innerHTML.includes("close-outline") &&
      [...square][4].innerHTML.includes("close-outline") &&
      [...square][6].innerHTML.includes("close-outline"))
  ) {
    // alert("Player1 wins");
    score1++
    right.style.background =
      "linear-gradient(rgb(0, 0, 0, 0.25),rgb(0, 0, 0, 0.9))"
    scorePlayer1.innerText = score1
    player1.innerText = "Player1 wins"
  } else if (
    ([...square][0].innerHTML.includes("ellipse-outline") &&
      [...square][1].innerHTML.includes("ellipse-outline") &&
      [...square][2].innerHTML.includes("ellipse-outline")) ||
    ([...square][3].innerHTML.includes("ellipse-outline") &&
      [...square][4].innerHTML.includes("ellipse-outline") &&
      [...square][5].innerHTML.includes("ellipse-outline")) ||
    ([...square][6].innerHTML.includes("ellipse-outline") &&
      [...square][7].innerHTML.includes("ellipse-outline") &&
      [...square][8].innerHTML.includes("ellipse-outline")) ||
    ([...square][0].innerHTML.includes("ellipse-outline") &&
      [...square][3].innerHTML.includes("ellipse-outline") &&
      [...square][6].innerHTML.includes("ellipse-outline")) ||
    ([...square][1].innerHTML.includes("ellipse-outline") &&
      [...square][4].innerHTML.includes("ellipse-outline") &&
      [...square][7].innerHTML.includes("ellipse-outline")) ||
    ([...square][2].innerHTML.includes("ellipse-outline") &&
      [...square][5].innerHTML.includes("ellipse-outline") &&
      [...square][8].innerHTML.includes("ellipse-outline")) ||
    ([...square][0].innerHTML.includes("ellipse-outline") &&
      [...square][4].innerHTML.includes("ellipse-outline") &&
      [...square][8].innerHTML.includes("ellipse-outline")) ||
    ([...square][2].innerHTML.includes("ellipse-outline") &&
      [...square][4].innerHTML.includes("ellipse-outline") &&
      [...square][6].innerHTML.includes("ellipse-outline"))
  ) {
    // alert("Player2 wins");
    score2++
    left.style.background =
      "linear-gradient(rgb(0, 0, 0, 0.25),rgb(0, 0, 0, 0.9))"
    scorePlayer2.innerText = score2
    player2.innerText = "Player2 wins"
  } else if (
    [...square].reduce((riVal, sq) => {
      return riVal && sq.innerHTML !== ""
    }, true)
  ) {
    left.style.background =
      "linear-gradient(rgb(0, 0, 0, 0.25),rgb(0, 0, 0, 0.9))"
    right.style.background =
      "linear-gradient(rgb(0, 0, 0, 0.25),rgb(0, 0, 0, 0.9))"
    draw.classList.remove("hidden")
  }
}

function checkDraw() {
  var flag = true
  for (sq of [...square]) {
    console.log(sq)
    if (sq.innerHTML === "") {
      flag = false
      break
    }
  }
  return flag
}

newGame.addEventListener("click", () => {
  squareReset()
  clickRefresh()
  left.style.background = ""
  right.style.background = ""
  player1.innerText = "Player 1"
  player2.innerText = "Player 2"
  if (score1 > score2) {
    trophy[0].innerText = "🏆"
    trophy[1].innerText = ""
  } else if (score2 > score1) {
    trophy[0].innerText = ""
    trophy[1].innerText = "🏆"
  }
})

reset.addEventListener("click", () => {
  score1 = 0
  score2 = 0
  squareReset()
  clickRefresh()
  scorePlayer1.innerHTML = score1
  scorePlayer2.innerHTML = score2
  left.style.background = ""
  right.style.background = ""
  player1.innerText = "Player 1"
  player2.innerText = "Player 2"
})

const squareReset = () => {
  ;[...square].forEach((value, index) => {
    value.innerHTML = ""
  })
}
