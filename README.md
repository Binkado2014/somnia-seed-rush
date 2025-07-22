<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Somnia Seed Rush</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>🌱 Somnia Seed Rush</h1>
    <p>Tap the seed as fast as you can before time runs out!</p>
    <button id="startButton">Start Game</button>
    <div id="gameArea" class="hidden">
      <div id="timer">Time: 10</div>
      <div id="score">Score: 0</div>
      <button id="seed">🌾 Tap Me!</button>
    </div>
    <div id="endGame" class="hidden">
      <h2>⏳ Time's Up!</h2>
      <p>Your Score: <span id="finalScore"></span></p>
      <button onclick="location.reload()">Play Again</button>
    </div>
  </div>
  <script src="game.js"></script>
</body>
</html>
# 🌱 Somnia Seed Rush

Somnia Seed Rush is a fast-paced mini web3-inspired tapping game. Tap the seed 🌾 as fast as you can before time runs out!

## 🎮 How to Play
1. Click **Start Game**
2. Tap the 🌾 seed button repeatedly to increase your score.
3. You have only **10 seconds** — hurry up!
4. After time runs out, your score will be displayed.
5. Click **Play Again** to restart the game.

## 🚀 Purpose
This game was created as a demo for community engagement and entry-level interaction with Somnia. It is part of the **Amg_k3Hub** initiative to explore simple Web3 integrations through fun gameplay.

## 🛠 Tech Stack
- HTML, CSS, JavaScript
- GitHub Pages (Hosting)
- Mobile-First Design

## 📢 Credits
Created by [@Amg_k3Hub](https://twitter.com/Amg_k3Hub)  
GitHub: [Somnia Seed Rush](https://github.com/Binkado2014/somnia-seed-rush)

## 📄 License
MIT License
MIT License

Copyright (c) 2025 Binkado2014 & Amg_k3Hub Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
let startButton = document.getElementById("startButton");
let gameArea = document.getElementById("gameArea");
let seed = document.getElementById("seed");
let scoreDisplay = document.getElementById("score");
let timerDisplay = document.getElementById("timer");
let endGame = document.getElementById("endGame");
let finalScore = document.getElementById("finalScore");

let score = 0;
let timeLeft = 10;
let timerInterval;

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.style.display = "none";
  gameArea.classList.remove("hidden");
  score = 0;
  timeLeft = 10;
  updateScore();
  updateTimer();

  seed.addEventListener("click", increaseScore);

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      endGameFunction();
    }
  }, 1000);
}

function increaseScore() {
  score++;
  updateScore();
}

function updateScore() {
  scoreDisplay.textContent = "Score: " + score;
}

function updateTimer() {
  timerDisplay.textContent = "Time: " + timeLeft;
}

function endGameFunction() {
  clearInterval(timerInterval);
  seed.removeEventListener("click", increaseScore);
  gameArea.classList.add("hidden");
  endGame.classList.remove("hidden");
  finalScore.textContent = score;
}
