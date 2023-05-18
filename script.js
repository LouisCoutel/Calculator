//#region operations

const add = function (a, b) {
  let result = a + b;
  if (result != 0) {
    return result;
  } else {
    return 0;
  }
};

const subtract = function (a, b) {
  let result = a - b;
  if (result != 0) {
    return result;
  } else {
    return 0;
  }
};

const multiply = function (a, b) {
  let result = a * b;
  if (result != 0) {
    return result;
  } else {
    return 0;
  }
};

const divide = function (a, b) {
  let result = a / b;
  if (result != 0) {
    return result;
  } else {
    return 0;
  }
};

//#endregion

//#region variables

// operation variables
var number1;
var number2;
var operator;
// DOM elements
const display = document.getElementById("screen");
const zeroButton = document.getElementById("0");
const oneButton = document.getElementById("1");
const twoButton = document.getElementById("2");
const threeButton = document.getElementById("3");
const fourButton = document.getElementById("4");
const fiveButton = document.getElementById("5");
const sixButton = document.getElementById("6");
const sevenButton = document.getElementById("7");
const eightButton = document.getElementById("8");
const nineButton = document.getElementById("9");
const addButton = document.getElementById("+");
const subButton = document.getElementById("-");
const multButton = document.getElementById("*");
const divButton = document.getElementById("/");
const equalButton = document.getElementById("=");
const clrButton = document.getElementById("CLR");
const floatButton = document.getElementById("float");
const backspaceButton = document.getElementById("backspace");
const buttons = document.querySelectorAll("button");

// operate arrays
var numbersArray = [];
var operatorsArray = [];
var numberCounter = 0;
var opCounter = 0;
var lastEntered = undefined;
//#endregion

// when backspace button is clicked
backspaceButton.onclick = function removeLast() {
  // check array counter to know if there was a previous calculation made or if we're starting over with 0 inputs
  if (lastEntered != undefined) {
    // if we're not starting over, remove last character from display string
    lastEntered = display.innerHTML.charAt(display.innerHTML.length - 1);
    // check if the last char is an operator
    if (lastEntered != " ") {
      console.log("THATS A NUMBER OR A DOT" + display.innerHTML + '"');
      // if the last input isn't and is a number or a dot, remove last character from current "number" array element
      display.innerHTML = display.innerHTML.slice(0, -1);
      numbersArray[numberCounter] = numbersArray[numberCounter].slice(0, -1);

      // if last char is a space
    } else {
      // remove last 3 char from display
      display.innerHTML = display.innerHTML.slice(0, -3);
      // and remove from operator array
      operatorsArray.pop();

      // check if there's still a number stored in the array, meaning there is a number before the operator we just removed
      if (numberCounter > 0) {
        // actualize number counter to switch to last number still stored
        numberCounter--;
        numbersArray.pop();
      }
    }
  }
};

function clearInputs() {
  // reset display
  display.innerHTML = "";
  // reset number counter so that input goes to first "number"
  numberCounter = 0;
  // remove all existing elements from number array, leaving it "undefined" so that we start from fresh
  numbersArray.splice(0, numbersArray.length);
  // remove all elements from operator array
  operatorsArray = [];
  lastEntered = undefined;
}

// when clear button is clicked
clrButton.addEventListener("click", function () {
  clearInputs();
});

// when equal button is clicked
equalButton.onclick = function operate() {
  console.log("COMPUTING !");
  // convert all "number" elements from array into floating points numbers rounded to last 5 digits after dot
  numbersArray = numbersArray.map(function (str) {
    return Math.round(parseFloat(str) * 100000) / 100000;
  });

  // for each operator stored in array

  while (operatorsArray.length > 0) {
    if (numbersArray.length >= operatorsArray.length) {
      if (operatorsArray.includes("*")) {
        opCounter = operatorsArray.indexOf("*");
      } else if (operatorsArray.includes("/")) {
        opCounter = operatorsArray.indexOf("/");
      } else {
        opCounter = 0;
      }

      console.log("are we doing this ?");
      // if +, perform addition
      if (operatorsArray[opCounter] == "+") {
        // result equals first two number
        let result = add(numbersArray[opCounter], numbersArray[opCounter + 1]);
        //numbers are removed and first number of the pair is now result
        numbersArray.splice(opCounter, 2, result);
        operatorsArray.splice(opCounter, 1);
      } else if (operatorsArray[opCounter] == "-") {
        let result = subtract(
          numbersArray[opCounter],
          numbersArray[opCounter + 1]
        );
        operatorsArray.splice(opCounter, 1);
        numbersArray.splice(opCounter, 2, result);
      } else if (operatorsArray[opCounter] == "/") {
        // check if user is trying to divide by zero
        if (numbersArray[1] != 0) {
          // if not, perform division
          let result = divide(
            numbersArray[opCounter],
            numbersArray[opCounter + 1]
          );
          numbersArray.splice(opCounter, 2, result);
          operatorsArray.splice(opCounter, 1);
        } else {
          // berate user for trying to divide by zero
          display.innerHTML =
            "Are you trying to create a black hole or something ?";
          setTimeout(function () {
            clearInputs();
          }, 1500);
        }
      } else if (operatorsArray[opCounter] == "*") {
        let result = multiply(
          numbersArray[opCounter],
          numbersArray[opCounter + 1]
        );
        numbersArray.splice(opCounter, 2, result);
        console.log(result);
        operatorsArray.splice(opCounter, 1);
      }
    }
    // check if user tried to divide by zero
  }
  operatorsArray = [];
  numberCounter = 0;
  display.innerHTML = Math.round(numbersArray[0] * 100000) / 100000;
  lastEntered = undefined;
};

floatButton.onclick = function addDot() {
  // if we're starting from fresh and user didn't input a 0 before the dot, add a zero in front of it for convenience
  if (numbersArray[numberCounter] == undefined) {
    display.innerHTML += "0.";
    numbersArray[numberCounter] = "0.";
  } else {
    // else just add a dot
    display.innerHTML += ".";
    numbersArray[numberCounter] += ".";
  }
  lastEntered = display.innerHTML.length;
};

// for every number and operator button
buttons.forEach((element) => {
  if (
    element != clrButton &&
    element != equalButton &&
    element != floatButton &&
    element != backspaceButton
  ) {
    element.onclick = function enterInputs() {
      // check if element is a number or not
      if (isNaN(element.id)) {
        // display operator with spaces on either side
        display.innerHTML += " " + element.id + " ";
        // store operator in array
        operatorsArray.push(element.id);
        // move to next number to be inputed
        numberCounter++;
      } else {
        // else, retrieve number value from HTML and display it
        display.innerHTML += element.id;
        // store the info that last input was a number
        // if we're starting from fresh create first number element in array
        if (numbersArray[numberCounter] == undefined) {
          numbersArray[numberCounter] = element.id;
          // else concat element value to current "number" being edited
        } else {
          numbersArray[numberCounter] += element.id;
        }
      }
      lastEntered = display.innerHTML.length;
    };
  }
});
