let score = 0;
let timeLeft = 10;
let timerInterval;

const startButton = document.getElementById('startButton');
const gameArea = document.getElementById('gameArea');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const seedButton = document.getElementById('seed');
const endGame = document.getElementById('endGame');
const finalScore = document.getElementById('finalScore');

startButton.addEventListener('click', startGame);

function startGame() {
  startButton.classList.add('hidden');
  gameArea.classList.remove('hidden');
  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = "Score: 0";
  timerDisplay.textContent = `Time: ${timeLeft}`;
  timerInterval = setInterval(updateTimer, 1000);
}

seedButton.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
});

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = `Time: ${timeLeft}`;
  if (timeLeft === 0) {
    clearInterval(timerInterval);
    gameArea.classList.add('hidden');
    endGame.classList.remove('hidden');
    finalScore.textContent = score;
  }
}
