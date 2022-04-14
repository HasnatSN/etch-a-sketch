const sliderInput = document.querySelector("#canvas-slider");
const canvasGrid = document.querySelector(".canvas");
const inputColor = document.querySelector("#color-picker");
const colorBtn = document.querySelector(".color-mode");
const randomColor = document.querySelector(".random-color");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");

let currentSize = 32;
let currentColor = document.querySelector("#color-picker").value;
let numberRandomColor = 100000000;
let isRandom = false;

sliderInput.addEventListener("input", (e) => {
  document.querySelector(
    ".lbl-slider"
  ).textContent = `${e.target.value}x${e.target.value}`;
  currentSize = e.target.value;
  makeGrid(e.target.value);
});

inputColor.addEventListener("input", (e) => {
  currentColor = e.target.value;
  isRandom = false;
});

colorBtn.addEventListener("click", function () {
  isRandom = false;
  currentColor = document.querySelector("#color-picker").value;
  colorBtn.classList.add("active");
  randomColor.classList.remove("active");
  eraserBtn.classList.remove("active");
});

randomColor.addEventListener("click", function () {
  isRandom = true;
  randomColor.classList.add("active");
  colorBtn.classList.remove("active");
  eraserBtn.classList.remove("active");
});

eraserBtn.addEventListener("click", function () {
  isRandom = false;
  currentColor = "white";
  eraserBtn.classList.add("active");
  colorBtn.classList.remove("active");
  randomColor.classList.remove("active");
});

clearBtn.addEventListener("click", function () {
  makeGrid(currentSize);
  currentColor = document.querySelector("#color-picker").value;
});

function assignEventL() {
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
      if (isRandom == true) {
        currentColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        gridItem.style.backgroundColor = `${currentColor}`;
      } else {
        gridItem.style.backgroundColor = `${currentColor}`;
      }
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
