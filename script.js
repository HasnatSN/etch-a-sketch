const sliderInput = document.querySelector("#canvas-slider");
const canvasGrid = document.querySelector('.canvas');

let = canvasSize = 0;

sliderInput.addEventListener(
  "change",
  function () {
    canvasSize = sliderInput.value;
    document.querySelector(".lbl-slider").textContent = `${canvasSize}x${canvasSize}`;
    makeGrid(canvasSize);
  },
  false
);

function makeGrid(size) {
    canvasGrid.style.setProperty('--grid-rows', size);
    canvasGrid.style.setProperty('--grid-cols', size);
    canvasGrid.innerText = '';
    for (c = 0; c < (size * size); c++) {
        let cell = document.createElement("div");
        cell.innerText = "+";
        canvasGrid.appendChild(cell).className = "grid-item";
    };
};