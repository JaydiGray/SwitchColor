const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let intervalId = null;

startBtn.addEventListener('click', onClickRandomizeBodyColor);
stopBtn.addEventListener('click', onClickStopInterval);

function onClickRandomizeBodyColor() {
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }, 1000);
}

function onClickStopInterval() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
