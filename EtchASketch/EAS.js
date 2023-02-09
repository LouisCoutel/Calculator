
//Create HTML Elements
const container = document.getElementById("container");
const colorPalette = document.getElementById("color-palette");

//Set desired size based on user input (WIP)
let desiredSize = 50;

//Set number of rows and cols based on container width (responsive)
let rows = Math.floor(container.clientHeight / desiredSize);
let cols = Math.floor(container.clientWidth / desiredSize);

//Fill the container with div elements (grid items)
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (let c = 0; c < rows * cols; c++) {
    var cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

//create color picking buttons in the color palette
for (let i = 0; i < 8; i++) var colorSquare = document.createElement("button");
colorPalette.appendChild(colorSquare).className = "color-square";

makeRows(rows, cols);

//Create grid items list
const grid = container.getElementsByClassName("grid-item");

//control for user input
var drawing = false;
//toggle control when use clicks and hold
window.addEventListener("mousedown", function () {
  drawing = true;
});


//toggle control when user release click
window.addEventListener("mouseup", function () {
  drawing = false;
});

//Assign grid item size and allow user to draw
for (let i = 0; i <= grid.length; i++) {
  //grid item size
  grid[i].style.setProperty("width", desiredSize + "px");
  grid[i].style.setProperty("height", desiredSize + "px");

  //Color the grid-items if the user is clicking and the mouse is over a grid item
  grid[i].addEventListener("mouseover", function () {
    if (drawing == true) {
      grid[i].style.backgroundColor = "red";
    }
  });
}
