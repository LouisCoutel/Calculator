//Create HTML Elements
const container = document.getElementById("container");
const colorPalette = document.getElementById("color-palette");

var pickedColor = "";

//Set desired square size based on user input (WIP)
let desiredSize = 50;

//Set number of rows and cols based on desired square size
let rows = Math.floor(container.clientHeight / desiredSize);
let cols = Math.floor(container.clientWidth / desiredSize);

//Fill the container with div elements (grid items)
function makeRows(rows, cols) {
  //set the grid rows/cols properties for the container
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  //create and append grid items
  for (let c = 0; c < rows * cols; c++) {
    var cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

//create color picking buttons in the color palette
for (let i = 0; i < 8; i++) {
  let button = document.createElement("button");
  colorPalette.appendChild(button).className = "color-square";
  button.id = "color" + i;
}

//set current drawing color based on button clicked
for (let i = 0; i < 8; i++) {
  var colorSquare = document.getElementById("color" + i);
  colorSquare.addEventListener("click", function getColor() {
    let style = getComputedStyle(this);
    pickedColor = style.backgroundColor;
    console.log(pickedColor);
    assignColor()
  });
}

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
}

//assign current drawing color to drawing event listeners
function assignColor() {
  for (let i = 0; i <= grid.length; i++) {
    //Color the grid-items
    //when the user clicks on a square
    grid[i].addEventListener("mousedown", function () {
      grid[i].style.backgroundColor = pickedColor;
    });
    //when the pointer enters a square IF the user is holding down the mouse button
    grid[i].addEventListener("mouseover", function () {
      if (drawing == true) {
        console.log("drawing");
        grid[i].style.backgroundColor = pickedColor;
      }
    });
  }
}
