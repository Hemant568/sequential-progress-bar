const root = document.getElementById("root");
const button = document.getElementById("button");
let totalBars = 0;
let isRunning = false;
const queue = [];

const runProgressBar = () => {
  if (queue.length) {
    isRunning = true;
    const id = queue.shift();
    const progressBar = document.getElementById(id);
    const mover = document.createElement("div");
    mover.classList.add("mover");
    progressBar.appendChild(mover);
    let width = 0;
    const intervalId = setInterval(() => {
      width++;
      mover.style.width = `${width}px`;
      if (width === 500) {
        clearInterval(intervalId);
        isRunning = false;
        runProgressBar();
      }
    }, 10);
  }
};

const addProgressBar = () => {
  const id = totalBars++;
  const addProgressBar = document.createElement("div");
  addProgressBar.id = id;
  addProgressBar.classList.add("progress-container");
  root.appendChild(addProgressBar);
  queue.push(id);
  if (!isRunning) runProgressBar();
};

button.addEventListener("click", addProgressBar);
