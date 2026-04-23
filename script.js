// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable for Task 10
let intervalId = null;
let clickTimer = null;

const mainTitle = document.getElementById("main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.getElementById("status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");

// Task 3: Modify title on load
mainTitle.innerHTML = "DOM Project: Ready!";

// Task 4: Add custom attribute
toggleButton.setAttribute("data-action", "status-toggle");

// Task 8: Create timestamp
function createTimestamp() {
  const timeSpan = document.createElement("span");
  timeSpan.innerHTML = new Date().toLocaleTimeString();
  statusOutput.appendChild(timeSpan);
  statusOutput.appendChild(document.createElement("br"));
}

// Tasks 5, 6, 7, 8: Toggle status
function toggleStatus(e) {
  e.preventDefault(); // Task 6
  statusOutput.classList.toggle("hidden"); // Task 5

  // Task 7
  if (!statusOutput.classList.contains("hidden")) {
    mainTitle.style.backgroundColor = "yellow";
    createTimestamp(); // Task 8
  } else {
    mainTitle.style.backgroundColor = "";
  }
}

toggleButton.addEventListener("click", toggleStatus);

// Task 9: Highlight list items on load
function highlightListItems() {
  const listItems = document.querySelectorAll("#item-list li");
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "blue";
  }
}

highlightListItems();

// Task 10: Flashing timer
function startFlashing() {
  clickTimer = setTimeout(function () {
    if (intervalId !== null) return;
    console.log("Flashing started");
    intervalId = setInterval(function () {
      controlPanel.classList.toggle("hidden");
    }, 500);
  }, 250);
}

function stopFlashing() {
  clearTimeout(clickTimer);
  clearInterval(intervalId);
  intervalId = null;
  controlPanel.classList.remove("hidden");
  console.log("Flashing stopped");
}

timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);