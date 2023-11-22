let posX;
let posY;

let snakeX = 10;
let snakeY = 10;
let velocityX = 0;
let velocityY = 0;

let squareGame = document.querySelector(".square-game");
let score = document.getElementById("current-score");

// Donne une position random à la pomme
const randomPosition = () => {
  posX = Math.floor(Math.random() * 30) + 1;
  posY = Math.floor(Math.random() * 30) + 1;
};
randomPosition();

// Permet d'initialiser le jeu
const initGame = () => {
  let html = `<div class="apple" style="grid-area : ${posY} / ${posX}"></div>`;

  snakeX += velocityX;
  snakeY += velocityY;
  html += `<div class="snake" style="grid-area : ${snakeY} / ${snakeX}"></div>`;
  squareGame.innerHTML = html;
};
initGame();

// Permet de faire bouger le snake en fonction des touches pressées
const mooveSnake = (e) => {
  if (e.key === "ArrowUp") {
    velocityY = -1;
    velocityX = 0;
  } else if (e.key === "ArrowDown") {
    velocityY = +1;
    velocityX = 0;
  } else if (e.key === "ArrowRight") {
    velocityY = 0;
    velocityX = +1;
  } else if (e.key === "ArrowLeft") {
    velocityY = 0;
    velocityX = -1;
  }
  initGame();
  eatFood();
};

// Si le serpent passe sur la pomme, il la mange, et donne une nouvelle position à la pomme
const eatFood = () => {
  // console.log(posY);
  // console.log(snakeY);
  // console.log(posX);
  // console.log(snakeX);
  if (snakeY === posY && snakeX === posX) {
    randomPosition();
    incrementScore();
    // return true;
  }
};

// Permet d'incrémenter le score
let currentScore = 0;
const incrementScore = () => {
  currentScore++;
  score.textContent = `Score : ${currentScore}`;
};

// const soloGo = (e) => {
//   setInterval(() => {
//     if (e.key === "ArrowUp") {
//       velocityY = -1;
//       velocityX = 0;
//     } else if (e.key === "ArrowDown") {
//       velocityY = +1;
//       velocityX = 0;
//     } else if (e.key === "ArrowRight") {
//       velocityY = 0;
//       velocityX = +1;
//     } else if (e.key === "ArrowLeft") {
//       velocityY = 0;
//       velocityX = -1;
//     }
//     initGame();
//   }, 500);
// };

// soloGo();

document.addEventListener("keydown", mooveSnake);
// document.addEventListener("keydown", soloGo);
// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });
