//Create HTML Elements
const container = document.getElementById("container");
const colorPalette = document.getElementById("color-palette");
const colorPicker = document.getElementById("color-picker");
const sizeRange = document.getElementById("size-range");
const sizeOutput = document.getElementById("size-output");
const sizeButton = document.getElementById("size-button");
const allowedSizesByHeight = [0];
const allowedSizesByWidth = [0];
var pickedColor = "";

const allowedSizes = [1];
const minSize = 1;
var desiredSize;

var rows;
var cols;
var grid = document.getElementsByClassName("grid-item");

// calculate grid item size on window load or resize
window.addEventListener("resize", getAllowedSizes());

//executes the grid creation sequence when button to select size is clicked
sizeButton.onclick = async function() {
  await setRowsColsNumber();
  await makeRows();
  await setGridItemSize();
};

//get allowed grid item sizes based on container height and width
async function getAllowedSizes() {
  let k = 0;
  for (let i = 0; i < container.clientHeight; i++) {
    if (container.clientHeight % i == 0) {
      allowedSizesByHeight[k] = i;
      k++;
    }
  }
  let l = 0;
  for (let i = 0; i < container.clientHeight; i++) {
    if (container.clientHeight % i == 0) {
      allowedSizesByWidth[l] = i;
      l++;
    }
  }

  allowedSizesByHeight.forEach((element) => {
    if (allowedSizesByWidth.includes(element)) {
      allowedSizes.push(element);
    }
  });
  
  var maxSize = (allowedSizes.length - 1);
  sizeRange.setAttribute("max", maxSize);
  sizeRange.setAttribute("min", minSize);
  console.log("ça marche");
}

//Set desired square size based on user input (WIP)
sizeRange.oninput = function setDesiredSize() {
  desiredSize = allowedSizes[this.value];
  sizeOutput.innerHTML = desiredSize
};

//Set number of rows and cols based on desired square size
async function setRowsColsNumber() {
  rows = Math.floor(container.clientHeight / desiredSize);
  console.log(rows);
  cols = Math.floor(container.clientWidth / desiredSize);
  console.log(cols);
  console.log("2");
}

//Assign grid item size
async function setGridItemSize() {
  for (let i = 0; i < grid.length; i++) {
    //grid item size
    grid[i].style.setProperty("width", desiredSize + "px");
    grid[i].style.setProperty("height", desiredSize + "px");
  }
  console.log("4");
}

//Fill the container with div elements (grid items)
async function makeRows() {
  //set the grid rows/cols properties for the container
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  //create and append grid items
  for (let c = 0; c < rows * cols; c++) {
    var cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
  //Create grid items list
  grid = container.getElementsByClassName("grid-item");
  console.log("3");
}

//create color picking buttons in the color palette
for (let i = 0; i < 11; i++) {
  let button = document.createElement("button");
  colorPalette.appendChild(button).className = "color-square";
  button.id = "color" + i;
}

//set current drawing color based on button clicked
for (let i = 0; i < 11; i++) {
  var colorSquare = document.getElementById("color" + i);
  colorSquare.addEventListener("click", function getColor() {
    let style = getComputedStyle(this);
    pickedColor = style.backgroundColor;
    console.log(pickedColor);
    assignColor();
  });
}

//add event listener on color input
colorPicker.addEventListener(
  "input",
  function assignCustomColor(event) {
    pickedColor = event.target.value;
    assignColor();
  },
  false
);

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
