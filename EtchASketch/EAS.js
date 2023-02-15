//Create HTML Elements
const container = document.getElementById("container");
const colorPalette = document.getElementById("color-palette");
const colorPicker = document.getElementById("color-picker");
const sizeRange = document.getElementById("size-range");
const sizeOutput = document.getElementById("size-output");
const sizeButton = document.getElementById("size-button");
const wipeButton = document.getElementById("wipe-button");
var allowedSizesByHeight = [];
var allowedSizesByWidth = [];
var pickedColor = "";

var allowedSizes = [];
var desiredSize;

var rows;
var cols;
var grid = document.getElementsByClassName("grid-item");

// calculate grid item size on window load or resize
window.addEventListener("resize", async function () {
  await setContainer();
  await getAllowedSizes();
  await setMaxSize();
});

window.addEventListener("load", async function () {
  await setContainer();
  await getAllowedSizes();
  await setMaxSize();
});

// control for first time execution
var firstTime = true;
//executes the grid creation sequence when button to select size is clicked
sizeButton.onclick = async function () {
  if (firstTime == false) {
    if (window.confirm("Are you sure you want to start over?")) {
      wipeCanvas();
    }
  }
  container.innerHTML = "";
  await setRowsColsNumber();
  await makeRows();
  await setGridItemSize();
  firstTime = false;
};

async function setContainer() {
  let ratio = window.innerWidth / window.innerHeight;
  console.log("ratio" + ratio);
  let roundedHeight = Math.ceil((window.innerHeight + 1) / 10) * 10 * 0.6;
  console.log("roundedH ", roundedHeight);
  container.style.setProperty("height", roundedHeight + "px");
  if (ratio >= 2.5) {
    container.style.setProperty("width", 2.5 * roundedHeight + "px");
  } else if (ratio >= 2) {
    container.style.setProperty("width", 2 * roundedHeight + "px");
  } else if (ratio >= 1.5) {
    container.style.setProperty("width", 1.5 * roundedHeight + "px");
  } else if (ratio >= 1) {
    container.style.setProperty("width", 1 * roundedHeight + "px");
  } else {
    container.style.setProperty("width", 0.5 * roundedHeight + "px");
  }
}

//get allowed grid item sizes based on container height and width
async function getAllowedSizes() {
  allowedSizesByHeight = [];
  allowedSizesByWidth = [];
  //get all possible sizes based on height
  let k = 0;
  console.log(container.clientHeight);
  for (let i = 4; i < container.clientHeight; i++) {
    if (container.clientHeight % i == 0) {
      allowedSizesByHeight[k] = i;
      k++;
    }
  }
  console.log("all height" + allowedSizesByHeight);
  //get all possible sides based on width
  let l = 0;
  console.log(container.clientWidth);
  for (let i = 8; i < container.clientWidth; i++) {
    if (container.clientWidth % i == 0) {
      allowedSizesByWidth[l] = i;
      l++;
    }
  }
  console.log("all wid" + allowedSizesByWidth);
  //reset allowed sizes array everytime the function runs
  allowedSizes = [];
  // check which values would work for both width and height
  allowedSizesByHeight.forEach((element) => {
    if (allowedSizesByWidth.includes(element)) {
      console.log(element);
      allowedSizes.push(element);
    }
  });
}

// set range input max
async function setMaxSize() {
  console.log("allowed sizes" + allowedSizes);
  var maxSize = allowedSizes.length - 1;
  console.log("maxsize" + maxSize);
  sizeRange.setAttribute("max", maxSize);

  //default desired size to max
  desiredSize = allowedSizes[allowedSizes.length - 1];
  //display current selected size
  sizeOutput.innerHTML = allowedSizes[allowedSizes.length - 1] + "px";
}

//Set desired square size based on user input (WIP)
sizeRange.oninput = function setDesiredSize() {
  desiredSize = allowedSizes[this.value];
  sizeOutput.innerHTML = allowedSizes[this.value] + "px";
};

//Set number of rows and cols based on desired square size
async function setRowsColsNumber() {
  rows = Math.floor(container.clientHeight / desiredSize);
  console.log("rows" + rows);
  cols = Math.floor(container.clientWidth / desiredSize);
  console.log("cols" + cols);
}

//Assign grid item size
async function setGridItemSize() {
  for (let i = 0; i < grid.length; i++) {
    //grid item size
    grid[i].style.setProperty("width", desiredSize + "px");
    grid[i].style.setProperty("height", desiredSize + "px");
  }
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

function wipeCanvas() {
  for (let i = 0; i < grid.length; i++) {
    grid[i].style.backgroundColor = "transparent";
  }
}

wipeButton.onclick = function () {
  if (window.confirm("Are you sure you want to start over?")) {
    wipeCanvas();
  }
};
