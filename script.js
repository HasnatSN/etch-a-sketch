const sliderInput = document.querySelector("#canvas-slider");
const canvasGrid = document.querySelector(".canvas");
const inputColor = document.querySelector("#color-picker");
const colorBtn = document.querySelector(".color-mode");
const randomColor = document.querySelector(".random-color");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");

let = currentSize = 32;
let = currentColor = document.querySelector("#color-picker").value;

sliderInput.addEventListener("input", (e) => {
  document.querySelector(
    ".lbl-slider"
  ).textContent = `${e.target.value}x${e.target.value}`;
  currentSize = e.target.value;
  makeGrid(e.target.value);
});

inputColor.addEventListener("input", (e) => {
  currentColor = e.target.value;
});

colorBtn.addEventListener("click", function () {
  currentColor = document.querySelector("#color-picker").value;
});

randomColor.addEventListener("click", function () {
    
});

eraserBtn.addEventListener("click", function () {
  currentColor = "white";
});

clearBtn.addEventListener("click", function () {
  makeGrid(currentSize);
  currentColor = document.querySelector("#color-picker").value;
});

function assignEventL() {
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("click", () => {
      gridItem.style.backgroundColor = `${currentColor}`;
    });
  });
}

function makeGrid(size) {
  canvasGrid.style.setProperty("--grid-rows", size);
  canvasGrid.style.setProperty("--grid-cols", size);
  canvasGrid.innerText = "";
  for (c = 0; c < size * size; c++) {
    let cell = document.createElement("div");
    cell.innerText = "";
    canvasGrid.appendChild(cell).className = "grid-item";
  }

  assignEventL();
}

makeGrid(32);
