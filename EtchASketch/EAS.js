// VARIABLE DECLARATIONS //

//Create HTML Elements
const container = document.getElementById("container");
const colorPalette = document.getElementById("color-palette");
const colorPicker = document.getElementById("color-picker");
const sizeRange = document.getElementById("size-range");
const menu = document.getElementById("menu");
const sizeOutput = document.getElementById("size-output");
const sizeButton = document.getElementById("size-button");
const wipeButton = document.getElementById("wipe-button");
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
const gridButton = document.getElementById("grid-button");

var allowedSizesByHeight = [];
var allowedSizesByWidth = [];
var pickedColor = "";

var allowedSizes = [];
var desiredSize;

var rows;
var cols;
var grid = document.getElementsByClassName("grid-item");

var gridDisplay = true

// #region MAIN SEQUENCES

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
  await createPaletteElements();
  await assignColorEvent();
  await assignCustomColorEvent();
  displayMenu();
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
  gridButton.onclick = function () {
    toggleGrid();
  };
  menu.style.setProperty("display", "none");
};

// #endregion

// #region GRID AND CONTAINER

async function setContainer() {
  let ratio = Math.round((window.innerWidth / window.innerHeight) * 5) / 5;
  let roundedHeight = Math.ceil((0.6 * window.innerHeight) / 20) * 20;
  console.log("roundedHeight" + roundedHeight);
  console.log("ratio " + ratio);
  container.style.setProperty("height", roundedHeight + "px");
  container.style.setProperty("width", ratio * roundedHeight + "px");
}

//get allowed grid item sizes based on container height and width
async function getAllowedSizes() {
  allowedSizesByHeight = [];
  allowedSizesByWidth = [];
  //get all possible sizes based on height
  let k = 0;
  for (let i = 4; i < container.clientHeight; i++) {
    if (container.clientHeight % i == 0) {
      allowedSizesByHeight[k] = i;
      k++;
    }
  }
  //get all possible sides based on width
  let l = 0;
  console.log(container.clientWidth);
  for (let i = 8; i < container.clientWidth; i++) {
    if (container.clientWidth % i == 0) {
      allowedSizesByWidth[l] = i;
      l++;
    }
  }
  //reset allowed sizes array everytime the function runs
  allowedSizes = [];
  // check which values would work for both width and height
  allowedSizesByHeight.forEach((element) => {
    if (allowedSizesByWidth.includes(element)) {
      allowedSizes.push(element);
    }
  });
}

// set range input max
async function setMaxSize() {
  console.log("allowed sizes" + allowedSizes);
  var maxSize = allowedSizes.length - 1;
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
  cols = Math.floor(container.clientWidth / desiredSize);
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
}

function toggleGrid() {
  console.log("lessgo");
  var gridArray = Array.from(grid);
  if (gridDisplay == true) {
    gridArray.forEach(function (element) {
      element.classList.add("inactive");
    });
    gridDisplay = false;
    gridButton.classList.add("opened");
  } else {
    gridArray.forEach(function (element) {
      element.classList.remove("inactive");
    });
    gridDisplay = true;
    gridButton.classList.remove("opened");
  }
}

// #endregion

//#endregion

// #region PALETTE AND COLOR

//create color picking buttons in the color palette
async function createPaletteElements() {
  for (let i = 0; i < 11; i++) {
    let button = document.createElement("button");
    colorPalette.appendChild(button).className = "color-square";
    button.id = "color" + i;
  }
}

//set current drawing color based on button clicked
async function assignColorEvent() {
  for (let i = 0; i < 11; i++) {
    var colorSquare = document.getElementById("color" + i);
    colorSquare.addEventListener("click", function getColor() {
      let style = getComputedStyle(this);
      pickedColor = style.backgroundColor;
      assignColor();
    });
  }
}

//add event listener on color input
async function assignCustomColorEvent() {
  colorPicker.addEventListener(
    "input",
    function assignCustomColor(event) {
      pickedColor = event.target.value;
      assignColor();
    },
    false
  );
}

// #endregion

// #region DRAWING

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
    firstTime = false;
    //when the pointer enters a square IF the user is holding down the mouse button
    grid[i].addEventListener("mouseover", function () {
      if (drawing == true) {
        grid[i].style.backgroundColor = pickedColor;
      }
      firstTime = false;
    });
  }
}

function wipeCanvas() {
  for (let i = 0; i < grid.length; i++) {
    grid[i].style.backgroundColor = "white";
  }
}

wipeButton.onclick = function () {
  if (window.confirm("Are you sure you want to start over?")) {
    wipeCanvas();
    menu.style.setProperty("display", "none");
  }
};

// #endregion

// #region MENUS

//set buttons events
function displayMenu() {
  menu.style.setProperty("display", "flex");
}

menuButton.onclick = function () {
  menu.style.setProperty("display", "flex");
};

closeButton.onclick = function displayPalette() {
  this.parentElement.style.setProperty("display", "none");
};
