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

// const sum = function (numbers) {
//   let result = 0;
//   numbers.forEach((element) => (result += element));
//   if (result != 0) {
//     return result;
//   } else {
//     return 0;
//   }
// };

// const multiply = function (numbers) {
//   let result = numbers[0];
//   numbers.shift();
//   numbers.forEach((element) => (result *= element));
//   if (result != 0) {
//     return result;
//   } else {
//     return 0;
//   }
// };

// const power = function (a, b) {
//   let result = Math.pow(a, b);
//   return result;
// };

// const factorial = function (a) {
//   let result = 1;
//   if (a != 0 && a != 1) {
//     for (i = a; i >= 1; i--) {
//       result *= i;
//     }
//     return result;
//   } else {
//     return 1;
//   }
// };

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
var lastEntered = undefined;
//#endregion

// when backspace button is clicked
backspaceButton.onclick = function removeLast() {
  // check array counter to know if there was a previous calculation made or if we're starting over with 0 inputs
  if (numbersArray[numberCounter] != undefined) {
    // if we're not starting over, remove last character from display string
    lastEntered = display.innerHTML.charAt(display.innerHTML.length - 1);
    console.log(lastEntered);
    // check if the last char is a number or a dot
    if (lastEntered != "+" && lastEntered != " " && lastEntered != "-" && lastEntered != "/" && lastEntered != "*") {
      console.log("THATS A NUMBER OR A DOT" + display.innerHTML + "\"");
      // if the last input was a number or a dot, remove last character from current "number" array element
      display.innerHTML = display.innerHTML.slice(0, -1);
      console.log("OKAY");
      numbersArray[numberCounter] = numbersArray[numberCounter].slice(0, -1);
    }
    // if last char is an operator
    else if (lastEntered == " ") {
      console.log("THATS A SPACE");
      // remove last element from operator array
      display.innerHTML = display.innerHTML.slice(0, -1);
    } else {
      display.innerHTML = display.innerHTML.slice(0, -1);
      console.log("THATS AN OPERATOR");
      operatorsArray.pop();

      if (numberCounter > 0) {
        display.innerHTML = display.innerHTML.slice(0, -1);
        numberCounter--;
        numbersArray[numberCounter] += numbersArray[numberCounter + 1];
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
  operatorsArray.forEach((element) => {
    console.log("are we doing this ?");
    // check if there's less numbers stored than operators, indicating an extra operator was entered by mistake
    if (numbersArray.length >= operatorsArray.length) {
      // if +, perform addition
      if (element == "+") {
        // result equals first two number
        let result = add(numbersArray[0], numbersArray[1]);
        //first number is removed
        numbersArray.shift();
        // first number is now result of the operation
        numbersArray[0] = result;
        display.innerHTML = result;
      } else if (element == "-") {
        let result = subtract(numbersArray[0], numbersArray[1]);
        numbersArray.shift();
        numbersArray[0] = result;
        display.innerHTML = result;
      } else if (element == "/") {
        // check if user is trying to divide by zero
        if (numbersArray[1] != 0) {
          // if not, perform division
          let result = divide(numbersArray[0], numbersArray[1]);
          numbersArray.shift();
          numbersArray[0] = result;
          display.innerHTML = result;
        } else {
          // berate user for trying to divide by zero
          display.innerHTML =
            "Are you trying to create a black hole or something ?";
          setTimeout(function () {
            clearInputs();
          }, 1500);
        }
      } else if (element == "*") {
        let result = multiply(numbersArray[0], numbersArray[1]);
        numbersArray.shift();
        numbersArray[0] = result;
        display.innerHTML = result;
      }
    }
  });

  // check if user tried to divide by zero
  if (
    display.innerHTML != "Are you trying to create a black hole or something ?"
  ) {
    // keep result stored and displayed but
    operatorsArray = [];
    numberCounter = 0;
  }
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
      if (isNaN(element.innerHTML)) {
        // display operator with spaces on either side
        display.innerHTML += " " + element.innerHTML + " ";
        // store operator in array
        operatorsArray.push(element.innerHTML);
        // move to next number to be inputed
        numberCounter++;
      } else {
        // else, retrieve number value from HTML and display it
        display.innerHTML += element.innerHTML;
        // store the info that last input was a number
        // if we're starting from fresh create first number element in array
        if (numbersArray[numberCounter] == undefined) {
          numbersArray[numberCounter] = element.innerHTML;
          // else concat element value to current "number" being edited
        } else {
          numbersArray[numberCounter] += element.innerHTML;
        }
      }
    };
  }
});
