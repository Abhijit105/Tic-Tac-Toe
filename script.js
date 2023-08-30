"use strict";

const newGame = document.getElementsByClassName("new-game");
const square = document.getElementsByClassName("square");
const cross = document.getElementsByClassName("cross");
const nuts = document.getElementsByClassName("nuts");
const scorePlayer1 = document.getElementsByClassName("score-player1");
const scorePlayer2 = document.getElementsByClassName("score-player2");
const clicked = [];
for (let i = 0; i < 9; i++) {
  clicked.push(false);
}
let activePlayer = 1;
console.log([...square]);
console.log([...cross]);
console.log([...nuts]);
[...square].forEach((sq, idx) => {
  sq.addEventListener("click", function () {
    if (!clicked[idx]) {
      if (activePlayer === 1) {
        sq.innerHTML = `<ion-icon name="close-outline" class="square-icon cross"></ion-icon>`;
        clicked[idx] = true;
        activePlayer = 2;
        console.log(activePlayer);
        console.log([...cross]);
        checkWinner();
      } else if (activePlayer === 2) {
        sq.innerHTML = `<ion-icon name="ellipse-outline" class="square-icon nuts"></ion-icon>`;
        clicked[idx] = true;
        activePlayer = 1;
        console.log(activePlayer);
      }
    }
  });
});

const checkWinner = () => {
  const crossArr = [...cross];
  console.log(crossArr);
  const nutsArr = [...nuts];
  // if (
  //   (crossArr[0].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[1].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[2].children[0].getAttribute("name") === "close-outline") ||
  //   (crossArr[3].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[4].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[5].children[0].getAttribute("name") === "close-outline") ||
  //   (crossArr[6].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[7].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[8].children[0].getAttribute("name") === "close-outline") ||
  //   (crossArr[0].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[3].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[6].children[0].getAttribute("name") === "close-outline") ||
  //   (crossArr[1].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[4].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[7].children[0].getAttribute("name") === "close-outline") ||
  //   (crossArr[2].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[5].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[8].children[0].getAttribute("name") === "close-outline") ||
  //   (crossArr[0].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[4].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[8].children[0].getAttribute("name") === "close-outline") ||
  //   (crossArr[2].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[4].children[0].getAttribute("name") === "close-outline" &&
  //     crossArr[6].children[0].getAttribute("name") === "close-outline")
  // ) {
  //   alert("Player 1 winner");
  // } else if (
  //   (nutsArr[0].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[1].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[2].children[0].getAttribute("name") === "close-outline") ||
  //   (nutsArr[3].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[4].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[5].children[0].getAttribute("name") === "close-outline") ||
  //   (nutsArr[6].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[7].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[8].children[0].getAttribute("name") === "close-outline") ||
  //   (nutsArr[0].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[3].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[6].children[0].getAttribute("name") === "close-outline") ||
  //   (nutsArr[1].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[4].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[7].children[0].getAttribute("name") === "close-outline") ||
  //   (nutsArr[2].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[5].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[8].children[0].getAttribute("name") === "close-outline") ||
  //   (nutsArr[0].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[4].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[8].children[0].getAttribute("name") === "close-outline") ||
  //   (nutsArr[2].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[4].children[0].getAttribute("name") === "close-outline" &&
  //     nutsArr[6].children[0].getAttribute("name") === "close-outline")
  // ) {
  //   alert("Player 2 winner");
  // }
};
