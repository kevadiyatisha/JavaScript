let timer;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById("timerDisplay");
const playButton = document.getElementById("playButton");
const stopButton = document.getElementById("stopButton");
const restartButton = document.getElementById("restartButton");

// Start the timer
playButton.addEventListener("click", function () {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      timerDisplay.textContent = seconds;
    }, 1000);
    playButton.disabled = true;
    stopButton.disabled = false;
    restartButton.disabled = false;
  }
});

// Stop the timer
stopButton.addEventListener("click", function () {
  clearInterval(timer);
  isRunning = false;
  playButton.disabled = false;
  stopButton.disabled = true;
});

// Restart the timer
restartButton.addEventListener("click", function () {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  timerDisplay.textContent = seconds;
  playButton.disabled = false;
  stopButton.disabled = true;
  restartButton.disabled = true;
});
